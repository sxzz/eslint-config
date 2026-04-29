import { pluginPrettier, pluginPrettierRecommended } from '../plugins.ts'
import type { Config } from '../types.ts'

const rules = { ...pluginPrettierRecommended.rules }
delete rules['vue/html-self-closing']

export const prettier = (): Config[] => [
  {
    name: 'sxzz/prettier',
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...rules,
      'prettier/prettier': 'warn',
    },
  },
]
