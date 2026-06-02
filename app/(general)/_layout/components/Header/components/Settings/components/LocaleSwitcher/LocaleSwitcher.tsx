'use client';

import { useCookie } from '@reactuses/core';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogContent,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { LOCALE_COOKIE_NAME } from '@/intl';

import { LOCALE_TO_LANGUAGE } from './constants';

function LocaleSwitcher() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const activeLocale = useLocale();
  const t = useTranslations('header.settings.localeSwitcher');
  const [, updateLocale] = useCookie(LOCALE_COOKIE_NAME);
  const router = useRouter();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function createLanguageSelectHandler(locale: 'en' | 'ru') {
    return () => {
      if (locale === activeLocale) {
        return;
      }

      updateLocale(locale);
      router.refresh();
    };
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger
        render={
          <Button variant="ghost" size="sm">
            {t('language')}
          </Button>
        }
      />
      <DialogContent showCloseButton={false}>
        <DialogTitle>Select language</DialogTitle>
        <DialogDescription className="sr-only">
          Browse available languages and select preferred one.
        </DialogDescription>
        <Input
          value={query}
          placeholder="Search languages..."
          onChange={handleInputChange}
        />
        <ul className="flex flex-wrap gap-x-2 gap-y-1">
          {Object.entries(LOCALE_TO_LANGUAGE).map(([locale, language]) => {
            const active = locale === activeLocale;

            return (
              <li key={locale}>
                <Button
                  variant={active ? undefined : 'secondary'}
                  onClick={createLanguageSelectHandler(locale as Locale)}
                >
                  {locale} {language}
                </Button>
              </li>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

export default LocaleSwitcher;
