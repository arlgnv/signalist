'use client';

import { useLocale, useTranslations } from 'next-intl';
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
  const locale = useLocale();
  const t = useTranslations('pages.home.stockHeatmap');

  return (
    <section className="xl:col-span-2">
      <TypographyH2 className="mb-5">{t('title')}</TypographyH2>
      <TradingViewStockHeatmap
        colorTheme={resolvedTheme}
        locale={locale}
        width="100%"
        height={600}
      />
    </section>
  );
}

export default StockHeatmap;
