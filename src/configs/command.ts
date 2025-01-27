import { configCommand } from '../plugins'
import type { Config } from '../types'

export const command = (): Config[] => [
  {
    ...configCommand(),
    name: 'sxzz/command',
  },
]
