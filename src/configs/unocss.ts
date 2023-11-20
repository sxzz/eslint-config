import { type FlatESLintConfig } from 'eslint-define-config'

import { pluginUnocss } from '../plugins'

export const unocss: FlatESLintConfig[] = [
  {
    plugins: {
      '@unocss': pluginUnocss,
    },
    rules: {
      ...pluginUnocss.configs.recommended.rules,
    },
  },
]
