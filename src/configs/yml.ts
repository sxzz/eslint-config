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
      // @ts-expect-error type incompatibility between yml and eslint-define-config
      yml: pluginYml,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Partial<Rules>),
      ...(pluginYml.configs.prettier.rules as Partial<Rules>),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
