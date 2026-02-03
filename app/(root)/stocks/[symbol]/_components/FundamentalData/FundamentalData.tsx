'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import type { ColorTheme } from 'react-ts-tradingview-widgets';

const TradingViewFundamentalData = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.FundamentalData),
  {
    ssr: false,
  },
);

function FundamentalData() {
  const { symbol } = useParams<{ symbol: string }>();
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <h2 className="sr-only">Fundamental data</h2>
      <TradingViewFundamentalData
        colorTheme={resolvedTheme as ColorTheme}
        symbol={symbol}
        width="100%"
        height={550}
      />
    </section>
  );
}

export default FundamentalData;
