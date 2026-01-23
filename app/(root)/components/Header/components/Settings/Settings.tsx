import { Settings as SettingsIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';

import { ThemeToggle } from './components';

function Settings() {
  return (
    <Popover modal={false}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon-sm" aria-label="Settings">
          <SettingsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <ul>
          <li className="flex justify-between py-1.5 text-sm">
            Language{' '}
            <button className="cursor-not-allowed" type="button" disabled>
              <span className="text-muted-foreground">English</span>
            </button>
          </li>
          <li className="flex justify-between py-1.5 text-sm">
            Currency{' '}
            <button className="cursor-not-allowed" type="button" disabled>
              <span className="text-muted-foreground">USD</span>
            </button>
          </li>
          <li className="mt-2 flex items-center justify-between text-sm">
            Theme
            <ThemeToggle />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

export default Settings;
