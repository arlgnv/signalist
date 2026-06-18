import type { Messages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { cookies as getCookies, headers as getHeaders } from 'next/headers';

import { LOCALE_COOKIE_NAME, LOCALES } from './constants';
import { isValidLocale } from './typeGuards';

async function resolveLocale() {
  const cookies = await getCookies();
  const localeCookie = cookies.get(LOCALE_COOKIE_NAME)?.value;

  if (isValidLocale(localeCookie)) {
    return localeCookie;
  }

  const headers = await getHeaders();
  const acceptLanguageHeader = headers.get('accept-language');

  if (acceptLanguageHeader) {
    for (const preferredLanguage of acceptLanguageHeader.split(',')) {
      const baseLanguageTag = preferredLanguage.split(/[;-]/)[0];

      if (isValidLocale(baseLanguageTag)) {
        return baseLanguageTag;
      }
    }
  }

  return LOCALES[0];
}

const requestConfig = getRequestConfig(async () => {
  const locale = await resolveLocale();

  return {
    locale,
    messages: (
      (await import(`./messages/${locale}.json`)) as {
        default: Messages;
      }
    ).default,
  };
});

export default requestConfig;
