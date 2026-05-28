function assertGroupValueIsValid(
  groupValue: string[],
): asserts groupValue is ['light' | 'dark' | 'system'] {
  if (
    groupValue.length !== 1 ||
    (groupValue[0] !== 'light' &&
      groupValue[0] !== 'dark' &&
      groupValue[0] !== 'system')
  ) {
    throw new Error(`Invalid groupValue: ${String(groupValue)}`);
  }
}

export default assertGroupValueIsValid;
