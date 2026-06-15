import { defineConfig } from 'cspell';

const config = defineConfig({
  import: ['@cspell/dict-ru_ru/cspell-ext.json'],
  language: 'en,ru',
  useGitignore: true,
  ignorePaths: ['supabase/types.ts'],
  dictionaries: ['project-words'],
  dictionaryDefinitions: [
    {
      name: 'project-words',
      path: 'project-words.txt',
      addWords: true,
    },
  ],
});

export default config;
