import type { Route } from 'next';

export interface Props {
  text: string;
  linkText: string;
  href: Route;
}
