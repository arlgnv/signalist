import { type Theme, VALID_THEMES } from '@/theme';

function assertGroupValueIsValid(
  groupValue: string[],
): asserts groupValue is [Theme] {
  if (
    groupValue.length !== 1 ||
    !VALID_THEMES.includes(groupValue[0] as Theme)
  ) {
    throw new Error(`Invalid groupValue: ${String(groupValue)}`);
  }
}

export default assertGroupValueIsValid;
