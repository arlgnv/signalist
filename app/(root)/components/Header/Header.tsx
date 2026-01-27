import { headers } from 'next/headers';
import Link from 'next/link';

import auth from '@/auth';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

import { Search, Settings, UserMenu } from './components';

async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="sticky top-0 z-1 bg-card">
      <div className="mx-auto grid max-w-360 min-w-80 grid-cols-[1fr_auto_auto_auto] items-center gap-x-2 px-4 py-5 sm:grid-cols-[1fr_13rem_auto_auto] sm:px-8">
        <Link className="justify-self-start" href="/" aria-label="Go home">
          <Logo />
        </Link>
        <Search />
        <Settings />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button asChild size="sm">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
