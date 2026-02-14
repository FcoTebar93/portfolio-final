// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  { ignores: ['dist/**', 'node_modules/**', '*.config.mjs', '*.config.cjs'] },
  ...eslintPluginAstro.configs.recommended,
  // Que el script dentro de .astro se parsee como TypeScript (interface, type, etc.)
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
];
