import { getRequestConfig } from 'next-intl/server';
import { cookies as getCookies } from 'next/headers';

const requestConfig = getRequestConfig(async () => {
  const cookies = await getCookies();
  const locale = cookies.get('locale')?.value ?? 'en';

  return {
    locale,
    // todo: figure out how to strictly type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

export default requestConfig;
