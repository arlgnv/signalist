'use client';

import dynamic from 'next/dynamic';

import { useResolvedTheme } from '@/hooks';

import { useParams } from '../../_hooks';

const TradingViewCompanyProfile = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.CompanyProfile),
  {
    ssr: false,
  },
);

function CompanyProfile() {
  const { symbol } = useParams();
  const resolvedTheme = useResolvedTheme();

  return (
    <section>
      <h2 className="sr-only">Company profile</h2>
      <TradingViewCompanyProfile
        colorTheme={resolvedTheme}
        symbol={symbol}
        width="100%"
        height={550}
      />
    </section>
  );
}

export default CompanyProfile;
