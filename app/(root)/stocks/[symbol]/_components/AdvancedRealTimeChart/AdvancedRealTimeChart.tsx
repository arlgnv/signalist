'use client';

import dynamic from 'next/dynamic';

import { useResolvedTheme } from '@/hooks';

import { useParams } from '../../_hooks';

const TradingViewAdvancedRealTimeChart = dynamic(
  () =>
    import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
);

function AdvancedRealTimeChart() {
  const { symbol } = useParams();
  const resolvedTheme = useResolvedTheme();

  return (
    <section>
      <h2 className="sr-only">Advanced real time chart</h2>
      <TradingViewAdvancedRealTimeChart
        theme={resolvedTheme}
        symbol={symbol}
        width="100%"
        allow_symbol_change={false}
      />
    </section>
  );
}

export default AdvancedRealTimeChart;
