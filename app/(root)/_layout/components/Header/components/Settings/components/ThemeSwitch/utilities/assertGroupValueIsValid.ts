import type { Theme } from '@/theme';

const VALID_THEMES = ['system', 'light', 'dark'];

function assertGroupValueIsValid(
  groupValue: string[],
): asserts groupValue is [Theme] {
  if (groupValue.length !== 1 || !VALID_THEMES.includes(groupValue[0])) {
    throw new Error(`Invalid groupValue: ${String(groupValue)}`);
  }
}

export default assertGroupValueIsValid;
