'use client';

import { useLocale, useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

import { useParams } from '../../_hooks';

const TradingViewCompanyProfile = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.CompanyProfile),
  {
    ssr: false,
  },
);

function CompanyProfile() {
  const { symbol } = useParams();
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations('pages.stock.companyProfile');

  return (
    <section>
      <h2 className="sr-only">{t('title')}</h2>
      <TradingViewCompanyProfile
        colorTheme={resolvedTheme}
        locale={locale}
        symbol={symbol}
        width="100%"
        height={550}
      />
    </section>
  );
}

export default CompanyProfile;
