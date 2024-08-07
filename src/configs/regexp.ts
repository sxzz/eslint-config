import { configs } from 'eslint-plugin-regexp'
import type { Linter } from 'eslint'

export const regexp: Linter.Config[] = [
  {
    ...(configs['flat/recommended'] as Linter.Config),
    name: 'sxzz/regexp',
  },
]
