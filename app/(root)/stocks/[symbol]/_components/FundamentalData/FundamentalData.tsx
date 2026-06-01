'use client';

import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

import { useParams } from '../../_hooks';

const TradingViewFundamentalData = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.FundamentalData),
  {
    ssr: false,
  },
);

function FundamentalData() {
  const { symbol } = useParams();
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <h2 className="sr-only">Fundamental data</h2>
      <TradingViewFundamentalData
        colorTheme={resolvedTheme}
        symbol={symbol}
        width="100%"
        height={550}
      />
    </section>
  );
}

export default FundamentalData;
