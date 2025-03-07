import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'
import type { Rules } from '../typegen'
import type { Config } from '../types'

export const yml = (): Config[] => [
  {
    name: 'sxzz/yaml/setup',
    plugins: {
      yml: pluginYml as any,
    },
  },
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml,
    },
    name: 'sxzz/yaml/rules',
    rules: {
      ...(pluginYml.configs.standard.rules as Rules),
      ...(pluginYml.configs.prettier.rules as Rules),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
