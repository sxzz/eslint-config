import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

const prettierConflictRules = { ...prettierConfig.rules }
delete prettierConflictRules['vue/html-self-closing']

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const prettier = [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConflictRules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
]
