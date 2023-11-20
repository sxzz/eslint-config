import { type FlatESLintConfig, type Rules } from 'eslint-define-config'

import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'

export const yml: FlatESLintConfig[] = [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml,
    },
    plugins: {
      yml: pluginYml,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Rules),
      ...(pluginYml.configs.prettier.rules as Rules),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
