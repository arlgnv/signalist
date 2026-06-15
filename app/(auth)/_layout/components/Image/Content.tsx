import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import { useTheme } from '@/theme';

function Content() {
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations('layouts.auth.image.altText');

  return (
    <Image
      className="absolute rounded-ss-2xl border-s-6 border-t-6 object-cover object-top-left"
      src={`/images/${resolvedTheme}-${locale}-home-page.jpg`}
      alt={t(resolvedTheme)}
      fill
      loading="eager"
    />
  );
}

export default Content;
