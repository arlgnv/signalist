'use client';

import { useTranslations, useLocale } from 'next-intl';
import dynamic from 'next/dynamic';

import { TypographyH2 } from '@/components/ui/typography';
import { useTheme } from '@/theme';

import { useTabs } from './hooks';

const TradingViewMarketOverview = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketOverview),
  {
    ssr: false,
  },
);

function MarketOverview() {
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations('pages.home.marketOverview');
  const tabs = useTabs();

  return (
    <section>
      <TypographyH2 className="mb-5">{t('title')}</TypographyH2>
      <TradingViewMarketOverview
        colorTheme={resolvedTheme}
        locale={locale}
        width="100%"
        height={600}
        tabs={tabs}
        showFloatingTooltip
      />
    </section>
  );
}

export default MarketOverview;
