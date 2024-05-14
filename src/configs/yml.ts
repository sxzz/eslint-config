import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'
import type { CustomRuleOptions, FlatESLintConfig } from 'eslint-define-config'

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
      ...(pluginYml.configs.standard.rules as CustomRuleOptions),
      ...(pluginYml.configs.prettier.rules as CustomRuleOptions),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
