import { GLOB_EXCLUDE } from '../globs'
import { pluginIgnore } from '../plugins'
import type { Linter } from 'eslint'

export const ignores: Linter.Config[] = [
  {
    ignores: GLOB_EXCLUDE,
    name: 'sxzz/global-ignores',
  },
  {
    ...pluginIgnore({ strict: false }),
    name: 'sxzz/gitignore',
  },
]
