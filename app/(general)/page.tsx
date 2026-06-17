import {
  MarketOverview,
  StockHeatmap,
  TickerTape,
  TopStories,
  MarketData,
} from './_page/components';

function Page() {
  return (
    <main className="mx-auto grid max-w-360 min-w-80 gap-10 px-8 pt-10 pb-12.5 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8">
      <h1 className="sr-only">Signalist</h1>
      <MarketOverview />
      <StockHeatmap />
      <TickerTape />
      <TopStories />
      <MarketData />
    </main>
  );
}

export default Page;
