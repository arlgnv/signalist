'use client';

import dynamic from 'next/dynamic';

import { useResolvedTheme } from '@/hooks';

import { SYMBOLS_GROUPS } from './data';

const TradingViewMarketData = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketData),
  {
    ssr: false,
  },
);

function MarketData() {
  const resolvedTheme = useResolvedTheme();

  return (
    <section className="xl:col-span-2">
      <h2 className="sr-only">Market data</h2>
      <TradingViewMarketData
        colorTheme={resolvedTheme}
        width="100%"
        height={600}
        symbolsGroups={SYMBOLS_GROUPS}
      />
    </section>
  );
}

export default MarketData;
