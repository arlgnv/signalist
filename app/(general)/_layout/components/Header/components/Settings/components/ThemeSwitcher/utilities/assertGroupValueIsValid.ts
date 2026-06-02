import { type Theme, THEMES } from '@/theme';

function assertGroupValueIsValid(
  groupValue: string[],
): asserts groupValue is [Theme] {
  if (groupValue.length !== 1 || !THEMES.includes(groupValue[0] as Theme)) {
    throw new Error(`Invalid groupValue: ${String(groupValue)}`);
  }
}

export default assertGroupValueIsValid;
