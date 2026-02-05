import { Star } from 'lucide-react';
import Link from 'next/link';

import { Logo } from '@/components/complex';
import { TypographyBlockquote } from '@/components/ui/typography';

import { Image } from './_layout/components';

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="grid h-dvh min-w-80 overflow-y-hidden max-md:grid-rows-[1fr_auto] md:grid-cols-2 xl:grid-cols-[min(700px,45%)_1fr]">
      <div className="flex flex-col gap-y-8 px-4 py-8 max-md:relative max-md:scrollbar-thin max-md:overflow-y-auto max-md:pb-8 md:gap-y-12 md:px-10 xl:px-20">
        <header>
          <Link href="/" aria-label="Go home">
            <Logo />
          </Link>
        </header>
        <main className="md:grow md:content-center">{children}</main>
      </div>
      <div className="flex flex-col gap-y-12 bg-sidebar px-2 py-3 max-md:border-t md:ps-10 md:pe-0 md:pt-18 md:pb-0 xl:ps-20">
        <figure className="grid w-[min(44.375rem,100%)] grid-cols-2 gap-2 md:gap-8 md:pe-8 xl:pe-16">
          <TypographyBlockquote className="col-span-2 text-sm font-medium max-md:pl-2 md:text-3xl">
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and I feel more confident making moves in the market.
          </TypographyBlockquote>
          <div className="flex items-center justify-between gap-x-0.5 self-start justify-self-end md:gap-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                className="fill-muted-foreground max-md:size-3"
                // It is safe to use index as a key here since elements aren't reordered
                // eslint-disable-next-line @eslint-react/no-array-index-key
                key={index}
                strokeWidth={0}
                size={20}
              />
            ))}
          </div>
          <figcaption className="col-start-1 row-start-2 text-xs font-bold md:text-lg">
            — Ethan R.
            <p className="text-[0.50rem]/[calc(0.75/0.625)] font-medium text-muted-foreground md:text-base">
              Retail Investor
            </p>
          </figcaption>
        </figure>
        <div className="relative grow max-md:hidden">
          <Image />
        </div>
      </div>
    </div>
  );
}

export default Layout;
