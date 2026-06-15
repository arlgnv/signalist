import type { LOCALES } from './constants';
import type messages from './messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof LOCALES)[number];
    Messages: typeof messages;
  }
}
