'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import type { ColorTheme } from 'react-ts-tradingview-widgets';

const TradingViewTechnicalAnalysis = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TechnicalAnalysis),
  {
    ssr: false,
  },
);

function TechnicalAnalysis() {
  const { symbol } = useParams<{ symbol: string }>();
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <h2 className="sr-only">Technical analysis</h2>
      <TradingViewTechnicalAnalysis
        colorTheme={resolvedTheme as ColorTheme}
        symbol={symbol}
        width="100%"
      />
    </section>
  );
}

export default TechnicalAnalysis;
