import baselineJs from 'eslint-plugin-baseline-js'
import type { Config } from '../types'

export const baseline = (): Config[] => [
  {
    name: 'sxzz/baseline',
    plugins: {
      'baseline-js': baselineJs,
    },
    rules: {
      'baseline-js/use-baseline': [
        'warn',
        {
          includeJsBuiltins: { preset: 'auto' },
          includeWebApis: { preset: 'auto' },
        },
      ],
    },
  },
]
