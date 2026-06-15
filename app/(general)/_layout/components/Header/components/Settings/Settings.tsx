import { Settings as SettingsIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';

import { LocaleSwitcher, ThemeSwitcher } from './components';

async function Settings() {
  const t = await getTranslations('layouts.general.header.settings');

  return (
    <Popover modal={false}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            aria-label={t('accessibleName')}
          >
            <SettingsIcon />
          </Button>
        }
      />
      <PopoverContent align="end">
        <ul className="space-y-2">
          <li className="flex items-center justify-between text-sm">
            {t('localeSwitcherTitle')} <LocaleSwitcher />
          </li>
          <li className="flex items-center justify-between text-sm">
            {t('themeSwitcherTitle')}
            <ThemeSwitcher />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

export default Settings;
