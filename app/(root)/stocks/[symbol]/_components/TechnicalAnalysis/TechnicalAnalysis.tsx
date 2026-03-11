'use client';

import dynamic from 'next/dynamic';

import { useResolvedTheme } from '@/hooks';

import { useParams } from '../../_hooks';

const TradingViewTechnicalAnalysis = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TechnicalAnalysis),
  {
    ssr: false,
  },
);

function TechnicalAnalysis() {
  const { symbol } = useParams();
  const resolvedTheme = useResolvedTheme();

  return (
    <section>
      <h2 className="sr-only">Technical analysis</h2>
      <TradingViewTechnicalAnalysis
        colorTheme={resolvedTheme}
        symbol={symbol}
        width="100%"
      />
    </section>
  );
}

export default TechnicalAnalysis;
