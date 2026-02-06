import { useTheme } from 'next-themes';

function useResolvedTheme() {
  const { resolvedTheme } = useTheme();

  return resolvedTheme as 'light' | 'dark' | undefined;
}

export default useResolvedTheme;
