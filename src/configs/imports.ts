import { pluginAntfu, pluginImport } from '../plugins.ts'
import type { Config } from '../types.ts'

export const imports = (): Config[] => [
  {
    name: 'sxzz/imports',
    plugins: {
      antfu: pluginAntfu,
      import: pluginImport,
    },
    rules: {
      'import/first': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': ['error', { preferInline: true }],
      'import/no-duplicates-specifier': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
    },
  },
]
