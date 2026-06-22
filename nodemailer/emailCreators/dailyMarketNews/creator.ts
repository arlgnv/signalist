import dayjs from 'dayjs';

import type { MarketNews } from '@/types';

import TEMPLATE from './template';

function creator(marketNews: MarketNews[]) {
  return TEMPLATE.replace(
    '{{date}}',
    dayjs().format('dddd, MMMM D, YYYY'),
  ).replace(
    '{{news}}',
    marketNews
      .map(
        ({ headline, summary }) =>
          `<li style="margin-bottom: 12px"><p style="margin: 0 0 6px 0; font-weight: 500; font-size: 16px;">${headline}</p><p style="margin: 0">${summary}</p></li>`,
      )
      .join(''),
  );
}

export default creator;
