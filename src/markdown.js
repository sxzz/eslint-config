import markdownPlugin from 'eslint-plugin-markdown'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from './shared.js'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const markdown = [
  {
    files: [GLOB_MARKDOWN],
    plugins: {
      markdown: markdownPlugin,
    },
    processor: 'markdown/markdown',
  },
  {
    files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
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
