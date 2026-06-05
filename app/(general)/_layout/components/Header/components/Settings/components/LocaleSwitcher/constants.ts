import type { Locale } from 'next-intl';

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

export { LANGUAGES };
