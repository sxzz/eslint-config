import { configs } from 'eslint-plugin-regexp'
import type { Config } from '../types.ts'

export const regexp = (): Config[] => [
  {
    ...(configs['flat/recommended'] as Config),
    name: 'sxzz/regexp',
  },
]
