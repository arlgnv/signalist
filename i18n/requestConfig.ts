import { getRequestConfig } from 'next-intl/server';
import { cookies as getCookies, headers as getHeaders } from 'next/headers';

import { LOCALE_COOKIE_NAME } from './constants';
import { isValidLocale } from './typeGuards';

const PREFERRED_LOCALE_REG_EXP = /[a-z]+/;

async function resolveLocale() {
  const cookies = await getCookies();
  const localeCookie = cookies.get(LOCALE_COOKIE_NAME)?.value;

  if (localeCookie && isValidLocale(localeCookie)) {
    return localeCookie;
  }

  const headers = await getHeaders();
  const acceptLanguageHeader = headers.get('accept-language');

  if (acceptLanguageHeader) {
    for (const preferredLanguage of acceptLanguageHeader.split(',')) {
      const preferredLocale =
        PREFERRED_LOCALE_REG_EXP.exec(preferredLanguage)?.[0];

      if (preferredLocale && isValidLocale(preferredLocale)) {
        return preferredLocale;
      }
    }
  }

  return 'en';
}

const requestConfig = getRequestConfig(async () => {
  const locale = await resolveLocale();

  return {
    locale,
    // todo: figure out how to strictly type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

export default requestConfig;
