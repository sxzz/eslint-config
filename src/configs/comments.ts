import { pluginComments } from '../plugins'
import type { Linter } from 'eslint'

export const comments: Linter.FlatConfig[] = [
  {
    plugins: {
      'eslint-comments': pluginComments,
    },
    rules: {
      ...pluginComments.configs.recommended.rules,
      'eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
    },
  },
]
