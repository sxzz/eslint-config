import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { GLOB_TS, GLOB_TSX } from './shared.js'

export { tsParser, tsPlugin }

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const typescript = [
  {
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs['strict'].overrides[0].rules,

      '@typescript-eslint/no-redeclare': 'error',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', disallowTypeAnnotations: false },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-as-const': 'warn',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/no-duplicates': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.ts?(x)'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
]
