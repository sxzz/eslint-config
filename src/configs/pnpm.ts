import { pluginPnpm } from '../plugins'
import type { Config } from '../types'

export async function pnpm(): Promise<Config[]> {
  return [
    {
      files: ['package.json', '**/package.json'],
      languageOptions: {
        parser: await import('jsonc-eslint-parser'),
      },
      name: 'sxzz/pnpm/rules',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/enforce-catalog': 'error',
        'pnpm/prefer-workspace-settings': 'error',
        'pnpm/valid-catalog': 'error',
      },
    },
  ]
}
