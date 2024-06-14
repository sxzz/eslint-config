import { parserJsonc, pluginJsonc } from '../plugins'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs'
import type { Linter } from 'eslint'

export const jsonc: Linter.FlatConfig[] = [
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    languageOptions: {
      parser: parserJsonc,
    },
    plugins: {
      jsonc: pluginJsonc as any,
    },
    rules: {
      ...(pluginJsonc.configs['recommended-with-jsonc']
        .rules as Linter.RulesRecord),
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off',
    },
  },
]
