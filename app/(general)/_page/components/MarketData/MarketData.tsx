'use client';

import { useLocale, useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

import { useSymbolsGroups } from './hooks';

const TradingViewMarketData = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketData),
  {
    ssr: false,
  },
);

function MarketData() {
  const { resolvedTheme } = useTheme();
  const t = useTranslations('pages.home.marketData');
  const locale = useLocale();
  const symbolsGroups = useSymbolsGroups();

  return (
    <section className="xl:col-span-2">
      <h2 className="sr-only">{t('title')}</h2>
      <TradingViewMarketData
        colorTheme={resolvedTheme}
        locale={locale}
        width="100%"
        height={600}
        symbolsGroups={symbolsGroups}
      />
    </section>
  );
}

export default MarketData;
