import { pluginUnocss } from '../plugins'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const unocss: FlatESLintConfigItem[] = [
  {
    plugins: {
      '@unocss': pluginUnocss,
    },
    rules: {
      ...pluginUnocss.configs.recommended.rules,
    },
  },
]
