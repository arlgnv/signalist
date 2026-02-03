import { Star } from 'lucide-react';
import Link from 'next/link';

import { Logo } from '@/components/complex';

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="mx-auto grid max-w-360 min-w-80 gap-12 px-4 sm:grid-rows-[auto_1fr] sm:px-8 md:grid-cols-2 xl:grid-cols-[1fr_55%]">
      <header className="pt-8 sm:self-start sm:justify-self-start">
        <Link href="/" aria-label="Go home">
          <Logo />
        </Link>
      </header>
      <main className="sm:self-center">{children}</main>
      <div className="pt-18 sm:col-start-2 sm:row-span-2 sm:row-start-1">
        <figure className="grid grid-cols-2 gap-2">
          <blockquote className="col-span-2">
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and I feel more confident making moves in the market
          </blockquote>
          <div className="flex items-center justify-between gap-x-0.5 self-start">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                className="fill-muted-foreground"
                key={index}
                strokeWidth={0}
              />
            ))}
          </div>
          <figcaption className="col-start-1 row-start-2">
            - Ethan R.
            <br />
            <span>Retail Investor</span>
          </figcaption>
        </figure>
        {/* <div className="relative flex-1">
          <Image
            className="absolute top-0 auth-dashboard-preview"
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={1440}
            height={1150}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Layout;
