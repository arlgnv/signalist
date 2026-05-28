import { useTheme } from 'next-themes';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { SWITCHERS } from './data';

function Content() {
  const { theme, setTheme } = useTheme();

  if (typeof theme === 'undefined') {
    return null;
  }

  function handleValueChange(groupValue: string[]) {
    const selectedValue = groupValue.at(0);

    if (selectedValue) {
      setTheme(selectedValue);
    }
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

export default Content;
