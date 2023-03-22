import markdownPlugin from 'eslint-plugin-markdown'
import { GLOB_MARKDOWN } from './shared.js'

/** @type {import('eslint-define-config').FlatESLintConfig[]} */
export const markdown = [
  {
    files: [GLOB_MARKDOWN],
    plugins: {
      markdown: markdownPlugin,
    },
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/*'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    rules: {
      ...markdownPlugin.configs.recommended.overrides[1].rules,

      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
    },
  },
]
