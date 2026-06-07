'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTheme } from '@/theme';

import { assertGroupValueIsValid } from './utilities';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('header.settings.themeSwitcher');
  const switchers = [
    { value: 'light', accessibleName: t('lightItemAccessibleName'), Icon: Sun },
    {
      value: 'system',
      accessibleName: t('systemItemAccessibleName'),
      Icon: Monitor,
    },
    { value: 'dark', accessibleName: t('darkItemAccessibleName'), Icon: Moon },
  ];

  function handleValueChange(groupValue: string[]) {
    if (groupValue.length === 0) {
      return;
    }

    assertGroupValueIsValid(groupValue);

    setTheme(groupValue[0]);
  }

  return (
    <ToggleGroup size="sm" value={[theme]} onValueChange={handleValueChange}>
      {switchers.map(({ value, accessibleName, Icon }) => (
        <ToggleGroupItem key={value} value={value} aria-label={accessibleName}>
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default ThemeSwitcher;
