import { getTheme, getThemeScript } from '@teispace/next-themes/server';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { twJoin } from 'tailwind-merge';

import Sonner from '@/components/ui/sonner';
import { ThemeProvider } from '@/theme';

import { QueryProvider } from './_components';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s · Signalist',
    default: 'Signalist',
  },
  description:
    'Track real-time stock prices, get personalized alerts, and explore detailed company insights.',
  generator: 'Next.js',
  applicationName: 'Signalist',
};

async function Layout({ children }: LayoutProps<'/'>) {
  const initialTheme = (await getTheme()) ?? undefined;
  const themeScript = getThemeScript({
    attribute: 'class',
    initialTheme,
  });
  const locale = await getLocale();

  return (
    <html
      className={twJoin(
        GeistSans.variable,
        'scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-muted bg-background font-geist text-foreground antialiased sm:scrollbar',
      )}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        {/* anti-FOUC */}
        {/*  eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider attribute="class" initialTheme={initialTheme} noScript>
          <NextIntlClientProvider>
            <QueryProvider>{children}</QueryProvider>
            <Sonner />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
