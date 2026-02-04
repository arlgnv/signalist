'use client';

import { useTheme } from 'next-themes';
import NextImage from 'next/image';

function Image() {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return;

  return (
    <NextImage
      className="absolute rounded-ss-2xl border-s-6 border-t-6 object-cover object-top-left"
      src={`/images/home-page-${resolvedTheme}.jpg`}
      alt="Home page"
      fill
    />
  );
}

export default Image;
