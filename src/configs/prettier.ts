import {
  configPrettier,
  pluginPrettier,
  pluginPrettierRecommended,
} from '../plugins'
import type { Config } from '../types'

const prettierConflictRules = { ...configPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

export const prettier = (): Config[] => [
  {
    name: 'sxzz/prettier',
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettierRecommended.rules,
      'prettier/prettier': 'warn',
    },
  },
]
