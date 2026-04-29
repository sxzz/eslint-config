import { pluginDeMorgan } from '../plugins.ts'
import type { Config } from '../types.ts'

export const deMorgan = (): Config[] => [
  {
    ...pluginDeMorgan.configs.recommended,
    name: 'sxzz/de-morgan',
  },
]
