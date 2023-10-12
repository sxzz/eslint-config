import { type FlatESLintConfigItem } from 'eslint-define-config'

import { pluginUnocss } from '../plugins'

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
