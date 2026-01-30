import { Sun, Monitor, Moon } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

function ThemeToggle() {
  return (
    <ToggleGroup size="sm">
      <ToggleGroupItem
        value="light"
        aria-label="Switch to light theme"
        disabled
      >
        <Sun />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="Switch to system theme"
        disabled
      >
        <Monitor />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Switch to dark theme">
        <Moon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default ThemeToggle;
