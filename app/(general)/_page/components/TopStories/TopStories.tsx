'use client';

import { useLocale, useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

const Timeline = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.Timeline),
  {
    ssr: false,
  },
);

function TopStories() {
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations('pages.home.topStories');

  return (
    <section>
      <h2 className="sr-only">{t('title')}</h2>
      <Timeline
        colorTheme={resolvedTheme}
        locale={locale}
        width="100%"
        height={600}
      />
    </section>
  );
}

export default TopStories;
