import type { Locale } from 'next-intl';

import { LOCALES } from '../constants';

function isValidLocale(value: unknown): value is Locale {
  return LOCALES.includes(value as Locale);
}

export default isValidLocale;
