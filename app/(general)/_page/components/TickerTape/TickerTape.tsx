'use client';

import { useLocale, useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

import { SYMBOLS } from './data';

const TradingViewTickerTape = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TickerTape),
  {
    ssr: false,
  },
);

function TickerTape() {
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations('pages.home.tickerTape');

  return (
    <section className="col-span-full">
      <h2 className="sr-only">{t('title')}</h2>
      <TradingViewTickerTape
        colorTheme={resolvedTheme}
        locale={locale}
        symbols={SYMBOLS}
      />
    </section>
  );
}

export default TickerTape;
