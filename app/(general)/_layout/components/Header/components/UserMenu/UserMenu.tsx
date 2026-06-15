'use client';

import { LogOut, Settings, Trash } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import authClient from '@/auth-client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import type { Props } from './types';

function UserMenu({ user }: Props) {
  const router = useRouter();
  const t = useTranslations('layouts.general.header.userMenu');

  function handleAccountDelete() {
    if (!confirm(t('deleteAccountDialog.title'))) {
      return;
    }

    void authClient.deleteUser(undefined, {
      onSuccess() {
        router.push('/sign-up');
      },
      onError({ error: { message } }) {
        toast.error(message);
      },
    });
  }

  function handleSignOut() {
    void authClient.signOut(undefined, {
      onSuccess: () => {
        router.push('/sign-in');
      },
      onError: ({ error: { message } }) => {
        toast.error(message);
      },
    });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className="rounded-full"
        render={
          <Button variant="ghost" size="icon-sm">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt={t('avatarAltText')}
              />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
          </Button>
        }
        aria-label={t('accessibleName')}
      />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            {t('dropdown.title')}
          </DropdownMenuLabel>
          <DropdownMenuItem disabled>
            <Settings />
            {t('dropdown.settingsItemTitle')}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleAccountDelete}>
          <Trash />
          {t('dropdown.deleteAccountItemTitle')}
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
          <LogOut />
          {t('dropdown.signOutItemTitle')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
