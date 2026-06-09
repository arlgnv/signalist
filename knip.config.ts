import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['supabase/types.ts', 'components/ui/**'],
  commitlint: {
    config: 'commitlint.config.mts',
  },
  'lint-staged': {
    config: 'lint-staged.config.mts',
  },
  'next-intl': {
    entry: 'i18n/requestConfig.ts',
  },
};

export default config;
