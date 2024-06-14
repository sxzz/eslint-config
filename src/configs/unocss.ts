import { pluginUnocss } from '../plugins'
import type { Linter } from 'eslint'

export const unocss: Linter.FlatConfig[] = [
  pluginUnocss.configs.flat as any as Linter.FlatConfig,
]
