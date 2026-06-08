'use client';

import { useLocale, useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

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
  const { resolvedTheme } = useTheme();
  const t = useTranslations('pages.stock.advancedRealTimeChart');
  const locale = useLocale();

  return (
    <section>
      <h2 className="sr-only">{t('title')}</h2>
      <TradingViewAdvancedRealTimeChart
        theme={resolvedTheme}
        locale={locale}
        symbol={symbol}
        width="100%"
        allow_symbol_change={false}
      />
    </section>
  );
}

export default AdvancedRealTimeChart;
