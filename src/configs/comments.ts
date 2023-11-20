import { type FlatESLintConfig } from 'eslint-define-config'

import { pluginComments } from '../plugins'

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
