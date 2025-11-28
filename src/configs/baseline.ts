import baselineJs from 'eslint-plugin-baseline-js'
import type { Config } from '../types'

export interface BaselineOptions {
  baseline?: 'widely' | 'newly' | number
  available?: 'widely' | 'newly' | number
  ignoreFeatures?: string[]
}

export const baseline = (options: BaselineOptions = {}): Config[] => [
  {
    name: 'sxzz/baseline',
    plugins: {
      'baseline-js': baselineJs,
    },
    rules: {
      'baseline-js/use-baseline': [
        'warn',
        {
          ignoreFeatures: ['functions-caller-arguments'],
          includeJsBuiltins: { preset: 'auto' },
          includeWebApis: { preset: 'auto' },
          ...options,
        },
      ],
    },
  },
]
