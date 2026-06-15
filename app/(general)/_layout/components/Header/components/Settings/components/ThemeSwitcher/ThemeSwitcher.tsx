'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTheme } from '@/theme';

import { useSwitchers } from './hooks';
import { assertGroupValueIsValid } from './utilities';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const switchers = useSwitchers();

  function handleValueChange(groupValue: string[]) {
    if (groupValue.length === 0) {
      return;
    }

    assertGroupValueIsValid(groupValue);

    setTheme(groupValue[0]);
  }

  return (
    <ToggleGroup size="sm" value={[theme]} onValueChange={handleValueChange}>
      {switchers.map(({ value, accessibleName, Icon }) => (
        <ToggleGroupItem key={value} value={value} aria-label={accessibleName}>
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default ThemeSwitcher;
