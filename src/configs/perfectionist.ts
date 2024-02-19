import { pluginPerfectionist } from '../plugins'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const sortKeys: FlatESLintConfigItem[] = [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
  },
]
