import { pluginAntfu, pluginImport } from '../plugins'
import type { Linter } from 'eslint'

export const imports: Linter.Config[] = [
  {
    name: 'sxzz/imports',
    plugins: {
      antfu: pluginAntfu,
      import: pluginImport as any,
    },
    rules: {
      'antfu/import-dedupe': 'error',
      'import/first': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-webpack-loader-syntax': 'error',
    },
  },
]
