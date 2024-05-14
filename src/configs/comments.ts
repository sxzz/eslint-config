import { pluginComments } from '../plugins'
import type { FlatESLintConfig } from 'eslint-define-config'

export const comments: FlatESLintConfig[] = [
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
