import { defineConfig } from 'cspell';

const config = defineConfig({
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
