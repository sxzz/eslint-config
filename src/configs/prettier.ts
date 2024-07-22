import { configPrettier, pluginPrettier } from '../plugins'
import type { Linter } from 'eslint'

const prettierConflictRules = { ...configPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

export const prettier: Linter.Config[] = [
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
