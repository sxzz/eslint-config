import { pluginPerfectionist } from '../plugins'
import type { FlatESLintConfig } from 'eslint-define-config'

export const sortKeys: FlatESLintConfig[] = [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
  },
]
