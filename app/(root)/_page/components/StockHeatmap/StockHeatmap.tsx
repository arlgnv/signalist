'use client';

import dynamic from 'next/dynamic';

import { TypographyH2 } from '@/components/ui/typography';
import { useTheme } from '@/theme';

const TradingViewStockHeatmap = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.StockHeatmap),
  {
    ssr: false,
  },
);

function StockHeatmap() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="xl:col-span-2">
      <TypographyH2 className="mb-5">Stock heatmap</TypographyH2>
      <TradingViewStockHeatmap
        colorTheme={resolvedTheme}
        width="100%"
        height={600}
      />
    </section>
  );
}

export default StockHeatmap;
