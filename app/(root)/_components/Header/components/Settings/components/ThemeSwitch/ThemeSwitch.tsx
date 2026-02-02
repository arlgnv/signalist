'use client';

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./Content'), {
  ssr: false,
});

function ThemeSwitch() {
  return <Content />;
}

export default ThemeSwitch;
