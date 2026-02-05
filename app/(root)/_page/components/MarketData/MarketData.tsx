'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import type { ColorTheme } from 'react-ts-tradingview-widgets';

import { SYMBOLS_GROUPS } from './data';

const TradingViewMarketData = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketData),
  {
    ssr: false,
  },
);

function MarketData() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="xl:col-span-2">
      <h2 className="sr-only">Market data</h2>
      <TradingViewMarketData
        colorTheme={resolvedTheme as ColorTheme}
        width="100%"
        height={600}
        symbolsGroups={SYMBOLS_GROUPS}
      />
    </section>
  );
}

export default MarketData;
