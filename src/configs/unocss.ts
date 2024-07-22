import { pluginUnocss } from '../plugins'
import type { Linter } from 'eslint'

export const unocss: Linter.Config[] = [
  pluginUnocss.configs.flat as any as Linter.Config,
]
