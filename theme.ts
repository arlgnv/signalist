'use client';
import { createThemes } from '@teispace/next-themes';

export const { ThemeProvider, useTheme } = createThemes({
  themes: ['light', 'dark'] as const,
  defaultTheme: 'system',
  attribute: 'class',
  disableTransitionOnChange: true,
  themeColor: { light: '#fff', dark: '#0a0a0a' },
});
