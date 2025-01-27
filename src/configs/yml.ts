import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'
import type { Rules } from '../typegen'
import type { Config } from '../types'

export const yml = (): Config[] => [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml,
    },
    name: 'sxzz/yaml',
    plugins: {
      yml: pluginYml as any,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Rules),
      ...(pluginYml.configs.prettier.rules as Rules),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
