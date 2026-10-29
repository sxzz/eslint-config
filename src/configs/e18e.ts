import { pluginE18e } from '../plugins.ts'
import type { Config } from '../types.ts'

export const e18e = (): Config[] => [
  {
    name: 'sxzz/e18e',
    plugins: {
      e18e: pluginE18e,
    },
    rules: {
      ...pluginE18e.configs.recommended.rules,

      // These can change runtime behavior, so they're not safe to autofix blindly
      'e18e/prefer-array-at': 'off',
      'e18e/prefer-array-from-map': 'off',
      'e18e/prefer-array-to-reversed': 'off',
      'e18e/prefer-array-to-sorted': 'off',
      'e18e/prefer-array-to-spliced': 'off',
      'e18e/prefer-spread-syntax': 'off',
    },
  },
]
