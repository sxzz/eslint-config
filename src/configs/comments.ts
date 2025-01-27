import { configComments } from '../plugins'
import type { Config } from '../types'

export const comments = (): Config[] => [
  {
    ...configComments.recommended,
    name: 'sxzz/comments/recommended',
  },
  {
    name: 'sxzz/comments',
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
    },
  },
]
