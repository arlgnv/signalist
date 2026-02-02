import type { Configuration } from 'lint-staged';

const config: Configuration = {
  '*': [
    'cspell --no-progress --no-summary --no-must-find-files --file',
    'prettier --ignore-unknown --list-different',
  ],
  '*.{mjs,ts,mts,tsx}': 'eslint',
};

export default config;
