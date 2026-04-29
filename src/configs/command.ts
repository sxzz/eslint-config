import { configCommand } from '../plugins.ts'
import type { Config } from '../types.ts'

export const command = (): Config[] => [
  {
    ...configCommand(),
    name: 'sxzz/command',
  },
]
