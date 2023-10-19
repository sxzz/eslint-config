import { pluginSortKeys } from '../plugins'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const sortKeys: FlatESLintConfigItem[] = [
  {
    plugins: {
      'sort-keys': pluginSortKeys,
    },
  },
]
