import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  eslintJs.configs['recommended'],
  eslintConfigPrettier,
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
