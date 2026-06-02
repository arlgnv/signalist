'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { TypographyH2 } from '@/components/ui/typography';
import { useTheme } from '@/theme';

import { TABS } from './data';

const TradingViewMarketOverview = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.MarketOverview),
  {
    ssr: false,
  },
);

function MarketOverview() {
  const { resolvedTheme } = useTheme();
  const t = useTranslations('pages.home.marketOverview');

  return (
    <section>
      <TypographyH2 className="mb-5">{t('title')}</TypographyH2>
      <TradingViewMarketOverview
        colorTheme={resolvedTheme}
        width="100%"
        height={600}
        tabs={TABS}
      />
    </section>
  );
}

export default MarketOverview;
