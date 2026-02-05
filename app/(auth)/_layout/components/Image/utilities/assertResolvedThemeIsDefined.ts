function assertResolvedThemeIsDefined(
  resolvedTheme: string | undefined,
): asserts resolvedTheme is NonNullable<typeof resolvedTheme> {
  if (resolvedTheme === undefined) {
    throw new Error('resolvedTheme is undefined');
  }
}

export default assertResolvedThemeIsDefined;
