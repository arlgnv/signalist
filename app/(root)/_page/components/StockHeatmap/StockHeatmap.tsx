'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import type { ColorTheme } from 'react-ts-tradingview-widgets';

import { TypographyH2 } from '@/components/ui/typography';

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
        colorTheme={resolvedTheme as ColorTheme}
        width="100%"
        height={600}
      />
    </section>
  );
}

export default StockHeatmap;
