import { Monitor, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';

function useSwitchers() {
  const t = useTranslations('header.settings.themeSwitcher');

  return [
    { value: 'light', accessibleName: t('lightItemAccessibleName'), Icon: Sun },
    {
      value: 'system',
      accessibleName: t('systemItemAccessibleName'),
      Icon: Monitor,
    },
    { value: 'dark', accessibleName: t('darkItemAccessibleName'), Icon: Moon },
  ];
}

export default useSwitchers;
