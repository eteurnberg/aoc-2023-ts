import path from 'path';
import { fileURLToPath } from 'url';

import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslintJs.configs['recommended'],
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended-type-checked'],
    ignorePatterns: ['build/**', 'node_modules/**', '**/*.js'],
    parserOptions: {
      project: true,
      tsConfigRootDir: __dirname,
    },
  }),
  eslintConfigPrettier,
  {
    // global ignores
    ignores: ['build/**', 'node_modules/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  },
  {
    files: ['.eslintrc.{js,cjs}'],
    languageOptions: {
      parserOptions: {
        sourceType: 'script',
      },
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  },
];
