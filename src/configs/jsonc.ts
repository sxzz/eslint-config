import { pluginJsonc } from '../plugins.ts'
import type { Config } from '../types.ts'

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
