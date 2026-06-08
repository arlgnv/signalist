'use client';

import { useLocale, useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

import { useParams } from '../../_hooks';

const TradingViewSymbolInfo = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.SymbolInfo),
  {
    ssr: false,
  },
);

function SymbolInfo() {
  const { symbol } = useParams();
  const { resolvedTheme } = useTheme();
  const t = useTranslations('pages.stock.symbolInfo');
  const locale = useLocale();

  return (
    <section>
      <h2 className="sr-only">{t('title')}</h2>
      <TradingViewSymbolInfo
        colorTheme={resolvedTheme}
        locale={locale}
        symbol={symbol}
        width="100%"
      />
    </section>
  );
}

export default SymbolInfo;
