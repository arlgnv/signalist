'use client';

import { LogOut, Settings, Trash } from 'lucide-react';
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
  function handleDeleteAccountSelect() {
    void authClient.deleteUser(undefined, {
      onError({ error: { message } }) {
        toast.error(message);
      },
    });
  }

  function handleSignOutSelect() {
    void authClient.signOut(undefined, {
      onError: ({ error: { message } }) => {
        toast.error(message);
      },
    });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="ghost" size="icon-sm">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            <AvatarFallback>{user.name.at(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuItem disabled>
            <Settings />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onSelect={handleDeleteAccountSelect}
        >
          <Trash />
          Delete account
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive" onSelect={handleSignOutSelect}>
          <LogOut />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
