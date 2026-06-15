import type { Locale } from 'next-intl';

import { DAYS_IN_A_YEAR } from '@/constants';

const LANGUAGES: { locale: Locale; title: string }[] = [
  {
    locale: 'en',
    title: 'English',
  },
  {
    locale: 'ru',
    title: 'Русский',
  },
];

const SET_LOCALE_OPTIONS = {
  expires: DAYS_IN_A_YEAR,
  sameSite: 'lax',
};

export { LANGUAGES, SET_LOCALE_OPTIONS };
