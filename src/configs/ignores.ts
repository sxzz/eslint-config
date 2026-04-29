import { GLOB_EXCLUDE } from '../globs.ts'
import { pluginIgnore } from '../plugins.ts'
import type { Config } from '../types.ts'

export const ignores = (): Config[] => [
  {
    ignores: GLOB_EXCLUDE,
    name: 'sxzz/global-ignores',
  },
  {
    ...pluginIgnore({ strict: false }),
    name: 'sxzz/gitignore',
  },
]
