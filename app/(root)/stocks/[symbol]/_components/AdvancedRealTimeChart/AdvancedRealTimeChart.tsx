'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import type { ColorTheme } from 'react-ts-tradingview-widgets';

const TradingViewAdvancedRealTimeChart = dynamic(
  () =>
    import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
);

function AdvancedRealTimeChart() {
  const { symbol } = useParams<{ symbol: string }>();
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <h2 className="sr-only">Advanced real time chart</h2>
      <TradingViewAdvancedRealTimeChart
        theme={resolvedTheme as ColorTheme}
        symbol={symbol}
        width="100%"
        allow_symbol_change={false}
      />
    </section>
  );
}

export default AdvancedRealTimeChart;
