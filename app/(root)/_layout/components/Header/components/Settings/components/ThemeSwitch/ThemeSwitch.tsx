'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTheme } from '@/theme';

import { SWITCHERS } from './data';
import { assertGroupValueIsValid } from './utilities';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  function handleValueChange(groupValue: string[]) {
    assertGroupValueIsValid(groupValue);

    setTheme(groupValue[0]);
  }

  return (
    <ToggleGroup size="sm" value={[theme]} onValueChange={handleValueChange}>
      {SWITCHERS.map(({ value, Icon }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          aria-label={`Switch to ${value} theme`}
        >
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default ThemeSwitch;
