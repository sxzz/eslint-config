import { configPrettier, pluginPrettier } from '../plugins'
import type { FlatESLintConfig } from 'eslint-define-config'

const prettierConflictRules = { ...configPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

export const prettier: FlatESLintConfig[] = [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
]
