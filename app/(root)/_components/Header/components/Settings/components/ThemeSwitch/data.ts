import { Monitor, Moon, Sun } from 'lucide-react';

export const SWITCHERS = [
  { value: 'light', Icon: Sun },
  { value: 'system', Icon: Monitor },
  { value: 'dark', Icon: Moon },
] as const;
