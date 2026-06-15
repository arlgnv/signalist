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

const withNextIntl = createNextIntlPlugin('./i18n/requestConfig.ts');

export default withNextIntl(config);
