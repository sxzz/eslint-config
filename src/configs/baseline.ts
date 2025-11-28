import baselineJs from 'eslint-plugin-baseline-js'
import type { Config } from '../types'

export const baseline = ({
  ignoreFeatures,
}: { ignoreFeatures?: string[] } = {}): Config[] => [
  {
    name: 'sxzz/baseline',
    plugins: {
      'baseline-js': baselineJs,
    },
    rules: {
      'baseline-js/use-baseline': [
        'warn',
        {
          ignoreFeatures: ignoreFeatures || ['functions-caller-arguments'],
          includeJsBuiltins: { preset: 'auto' },
          includeWebApis: { preset: 'auto' },
        },
      ],
    },
  },
]
