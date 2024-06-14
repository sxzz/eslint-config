import { pluginPerfectionist } from '../plugins'
import type { Linter } from 'eslint'

export const sortKeys: Linter.FlatConfig[] = [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
  },
]
