import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslintJs.configs['recommended'],
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
