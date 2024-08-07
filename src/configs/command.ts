import { configCommand } from '../plugins'
import type { Linter } from 'eslint'

export const command: Linter.Config[] = [
  {
    ...configCommand(),
    name: 'sxzz/command',
  },
]
