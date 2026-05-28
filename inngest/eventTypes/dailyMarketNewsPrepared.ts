import { eventType } from 'inngest';
import * as z from 'zod';

import { MarketNewsSchema } from '@/schemas';

const dailyMarketNewsPrepared = eventType('app/daily_market_news.prepared', {
  schema: z.object({
    userEmail: z.email(),
    marketNews: z.array(MarketNewsSchema),
  }),
});

export default dailyMarketNewsPrepared;
