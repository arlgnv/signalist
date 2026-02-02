import { TradingViewWidget } from '@/components/complex';

import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from '../_shared/constants';
import { MarketOverview } from './_page/components';

function Page() {
  return (
    <main className="mx-auto grid max-w-360 min-w-80 gap-10 px-8 pt-10 pb-12.5 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8">
      <h1 className="sr-only">Signalist</h1>
      <MarketOverview />
      <TradingViewWidget
        className="xl:col-span-2"
        title="Stock Heatmap"
        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
        config={HEATMAP_WIDGET_CONFIG}
        height={600}
      />
      <TradingViewWidget
        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
        config={TOP_STORIES_WIDGET_CONFIG}
        height={600}
      />
      <TradingViewWidget
        className="xl:col-span-2"
        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
        config={MARKET_DATA_WIDGET_CONFIG}
        height={600}
      />
    </main>
  );
}

export default Page;
