import react from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import query from '@tanstack/eslint-plugin-query';
import perfectionist from 'eslint-plugin-perfectionist';
import zod from 'eslint-plugin-zod';
import { defineConfig, globalIgnores, includeIgnoreFile } from 'eslint/config';
import path from 'node:path';
import typescript from 'typescript-eslint';

const config = defineConfig([
  globalIgnores(['supabase/types.ts'], 'Global ignores'),
  includeIgnoreFile(
    path.resolve(import.meta.dirname, '.gitignore'),
    '.gitignore patterns',
  ),
  {
    name: 'JavaScript',
    files: ['**/*.{mjs,ts,mts,tsx}'],
    plugins: {
      js,
    },
    extends: ['js/recommended'],
  },
  {
    name: 'Sorting',
    files: ['**/*.{mjs,ts,mts,tsx}'],
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          tsconfig: {
            rootDir: import.meta.dirname,
          },
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
            ['unknown'],
          ],
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
        },
      ],
    },
  },
  {
    name: 'TypeScript',
    files: ['**/*.{ts,mts,tsx}'],
    extends: [
      typescript.configs.strictTypeChecked,
      typescript.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
  {
    name: 'React',
    files: ['**/*.tsx'],
    extends: [react.configs['strict-type-checked']],
  },
  {
    name: 'TanStack Query',
    files: ['**/*.tsx'],
    extends: [query.configs['flat/recommended']],
  },
  {
    name: 'Next.js',
    files: ['**/*.tsx'],
    extends: [next.configs['core-web-vitals']],
  },
  {
    name: 'Zod',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      zod,
    },
    rules: {
      ...zod.configs.recommended.rules,
      'zod/prefer-string-schema-with-trim': 'off',
    },
  },
]);

export default config;
