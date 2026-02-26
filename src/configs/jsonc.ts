import { pluginJsonc } from '../plugins'
import type { Config } from '../types'

export const jsonc = (): Config[] => [
  ...pluginJsonc.configs['recommended-with-jsonc'].map((config) => ({
    ...config,
    name: `sxzz/jsonc/${config.name || 'recommended'}`,
  })),
  {
    name: 'sxzz/jsonc',
    rules: {
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off',
    },
  },
]
