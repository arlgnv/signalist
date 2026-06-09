import Image from 'next/image';

import { useTheme } from '@/theme';

function Content() {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      className="absolute rounded-ss-2xl border-s-6 border-t-6 object-cover object-top-left"
      src={`/images/${resolvedTheme}-home-page.jpg`}
      alt={`Home page in ${resolvedTheme} theme`}
      fill
      loading="eager"
    />
  );
}

export default Content;
