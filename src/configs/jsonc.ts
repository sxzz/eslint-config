import { type FlatESLintConfigItem, type Rules } from 'eslint-define-config'
import { parserJsonc, pluginJsonc } from '../plugins'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs'

export const jsonc: FlatESLintConfigItem[] = [
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    plugins: {
      jsonc: pluginJsonc,
    },
    languageOptions: {
      parser: parserJsonc,
    },
    rules: {
      ...(pluginJsonc.configs['recommended-with-jsonc'].rules as Rules),
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off',
    },
  },
]