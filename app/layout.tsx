import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { twJoin } from 'tailwind-merge';

import { Toaster } from '@/components/ui/sonner';

import { QueryProvider, ThemeProvider } from './_components';
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

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      className={twJoin(
        GeistSans.variable,
        'scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-muted bg-background font-geist text-foreground antialiased sm:scrollbar',
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

export default Layout;
