'use client';

import dynamic from 'next/dynamic';

import { TypographyH2 } from '@/components/ui/typography';
import { useResolvedTheme } from '@/hooks';

import { TABS } from './data';

const TradingViewMarketOverview = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketOverview),
  {
    ssr: false,
  },
);

function MarketOverview() {
  const resolvedTheme = useResolvedTheme();

  return (
    <section>
      <TypographyH2 className="mb-5">Market overview</TypographyH2>
      <TradingViewMarketOverview
        colorTheme={resolvedTheme}
        width="100%"
        height={600}
        tabs={TABS}
      />
    </section>
  );
}

export default MarketOverview;
