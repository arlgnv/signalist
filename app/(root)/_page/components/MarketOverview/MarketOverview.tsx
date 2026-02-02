'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import type { ColorTheme } from 'react-ts-tradingview-widgets';

import { TypographyH2 } from '@/components/ui/typography';

import { TABS } from './data';

const TradingViewMarketOverview = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketOverview),
  {
    ssr: false,
  },
);

function MarketOverview() {
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <TypographyH2 className="mb-5">Market overview</TypographyH2>
      <TradingViewMarketOverview
        colorTheme={resolvedTheme as ColorTheme}
        width="100%"
        height={600}
        tabs={TABS}
      />
    </section>
  );
}

export default MarketOverview;
