import { cron } from 'inngest';

import { FINNHUB_API_URL } from '@/constants';
import environment from '@/environment';
import supabase from '@/supabase/client';
import type { MarketNews } from '@/types';

import inngest, { dailyMarketNewsPrepared } from '../';

const prepareDailyMarketNews = inngest.createFunction(
  {
    id: 'prepare-daily-market-news',
    triggers: [cron('0 12 * * *')],
  },
  async ({ step }) => {
    const fetchMarketNewsResponse = await step.fetch(
      `${FINNHUB_API_URL}/news?category=general`,
      {
        headers: {
          'X-Finnhub-Token': environment.FINNHUB_API_KEY,
        },
      },
    );

    const marketNews = await step.run('extract-market-news', async () => {
      const marketNews = (await fetchMarketNewsResponse.json()) as MarketNews[];

      return marketNews.slice(0, 5);
    });

    if (marketNews.length) {
      const users = await step.run('fetch-users', async () => {
        const fetchUsersResponse = await supabase
          .from('users')
          .select('email')
          .eq('receives_daily_market_news', true);

        if (fetchUsersResponse.error) {
          throw fetchUsersResponse.error;
        }

        return fetchUsersResponse.data;
      });

      if (users.length) {
        const dailyMarketNewsPreparedEvents = users.map(({ email }) =>
          dailyMarketNewsPrepared.create({
            userEmail: email,
            marketNews,
          }),
        );

        await step.sendEvent(
          'send-daily-market-news-prepared-events',
          dailyMarketNewsPreparedEvents,
        );
      }
    }
  },
);

export default prepareDailyMarketNews;
