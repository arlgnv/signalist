'use client';
import { createThemes } from '@teispace/next-themes';

const END_THEMES = ['light', 'dark'] as const;
export const VALID_THEMES = ['system', ...END_THEMES] as const;

export const { ThemeProvider, useTheme } = createThemes({
  themes: END_THEMES,
  attribute: 'class',
  disableTransitionOnChange: true,
  themeColor: { light: '#fff', dark: '#0a0a0a' },
});

export type Theme = (typeof VALID_THEMES)[number];
