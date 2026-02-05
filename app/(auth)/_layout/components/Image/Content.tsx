import { useTheme } from 'next-themes';
import NextImage from 'next/image';

import { assertResolvedThemeIsDefined } from './utilities';

function Content() {
  const { resolvedTheme } = useTheme();

  assertResolvedThemeIsDefined(resolvedTheme);

  return (
    <NextImage
      className="absolute rounded-ss-2xl border-s-6 border-t-6 object-cover object-top-left"
      src={`/images/${resolvedTheme}-home-page.jpg`}
      alt={`Preview of the home page in ${resolvedTheme} theme`}
      fill
      loading="eager"
    />
  );
}

export default Content;
