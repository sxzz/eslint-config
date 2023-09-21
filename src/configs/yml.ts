import { type FlatESLintConfigItem, type Rules } from 'eslint-define-config'
import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'

export const yml: FlatESLintConfigItem[] = [
  {
    files: [GLOB_YAML],
    plugins: {
      yml: pluginYml,
    },
    languageOptions: {
      parser: parserYml,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Rules),
      ...(pluginYml.configs.prettier.rules as Rules),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
