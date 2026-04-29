import { configComments } from '../plugins.ts'
import type { Config } from '../types.ts'

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
