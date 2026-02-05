'use client';

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./Content'), {
  ssr: false,
});

function Image() {
  return <Content />;
}

export default Image;
