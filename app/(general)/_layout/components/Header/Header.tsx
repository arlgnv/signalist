import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import Link from 'next/link';

import auth from '@/auth';
import Logo from '@/components/complex/Logo';
import { buttonVariants } from '@/components/ui/button';

import { Search, Settings, UserMenu } from './components';

async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const t = await getTranslations('layouts.general.header');

  return (
    <header className="sticky top-0 z-1 border-b bg-card text-card-foreground">
      <div className="mx-auto grid max-w-360 min-w-80 grid-cols-[1fr_auto_auto_auto] items-center gap-x-2 px-4 py-5 sm:grid-cols-[1fr_13rem_auto_auto] sm:px-8">
        <Link
          className="justify-self-start"
          href="/"
          aria-label={t('logoLinkAccessibleName')}
        >
          <Logo />
        </Link>
        <Search />
        <Settings />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Link className={buttonVariants({ size: 'sm' })} href="/sign-in">
            {t('signInButton.title')}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
