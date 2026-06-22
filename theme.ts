'use client';

import { createThemes } from '@teispace/next-themes';

const RESOLVED_THEMES = ['light', 'dark'] as const;
export const THEMES = ['system', ...RESOLVED_THEMES] as const;

export const { ThemeProvider, useTheme } = createThemes({
  themes: RESOLVED_THEMES,
  attribute: 'class',
  disableTransitionOnChange: true,
  themeColor: { light: '#fff', dark: '#0a0a0a' },
});

export type Theme = (typeof THEMES)[number];
