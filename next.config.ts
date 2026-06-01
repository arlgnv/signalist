import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import './environment';

const config: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
  },
};

const withNextIntl = createNextIntlPlugin('./intl/requestConfig.ts');

export default withNextIntl(config);
