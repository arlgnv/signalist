'use client';

import { useCookie } from '@reactuses/core';
import { Check } from 'lucide-react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogContent,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { LOCALE_COOKIE_NAME } from '@/i18n';

import { LANGUAGES } from './constants';

function LocaleSwitcher() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const activeLocale = useLocale();
  const t = useTranslations('header.settings.localeSwitcher');
  const [, updateLocale] = useCookie(LOCALE_COOKIE_NAME);
  const lowerCasedQuery = query.toLowerCase();
  const filteredLanguages = LANGUAGES.filter(
    ({ locale, title }) =>
      locale.toLowerCase().includes(lowerCasedQuery) ||
      title.toLowerCase().includes(lowerCasedQuery),
  );
  const queriedLanguageNotFound = filteredLanguages.length === 0;

  function handleDialogOpenChange(open: boolean) {
    setDialogIsOpen(open);

    if (!open) {
      setQuery('');
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function createLanguageSelectHandler(locale: Locale) {
    return () => {
      if (locale === activeLocale) {
        return;
      }

      updateLocale(locale);
      location.reload();
    };
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger
        render={
          <Button variant="ghost" size="sm">
            {t('title')}
          </Button>
        }
      />
      <DialogContent showCloseButton={false}>
        <DialogTitle>{t('dialogTitle')}</DialogTitle>
        <DialogDescription className="sr-only">
          {t('dialogDescription')}
        </DialogDescription>
        <Input
          value={query}
          placeholder={t('dialogInputPlaceholder')}
          onChange={handleInputChange}
        />
        {queriedLanguageNotFound ? (
          <p className="text-center">{t('queriedLanguageNotFoundMessage')}</p>
        ) : (
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {filteredLanguages.map(({ locale, title }) => {
              const active = locale === activeLocale;

              return (
                <li key={locale}>
                  <Button
                    className={twJoin(
                      'font-semibold',
                      active && 'bg-muted dark:bg-input/50',
                    )}
                    variant="outline"
                    onClick={createLanguageSelectHandler(locale)}
                  >
                    <span className="font-normal uppercase">{locale}</span>{' '}
                    {title}
                    {active && (
                      <Check
                        className="text-green-500 dark:text-green-300"
                        data-icon="inline-end"
                      />
                    )}
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default LocaleSwitcher;
