import { pluginPnpm } from '../plugins'
import type { Config } from '../types'

export async function pnpm(): Promise<Config[]> {
  return [
    {
      files: ['package.json', '**/package.json'],
      languageOptions: {
        parser: await import('jsonc-eslint-parser'),
      },
      name: 'sxzz/pnpm/package-json',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/json-enforce-catalog': 'error',
        'pnpm/json-prefer-workspace-settings': 'error',
        'pnpm/json-valid-catalog': 'error',
      },
    },
    {
      files: ['pnpm-workspace.yaml'],
      languageOptions: {
        parser: await import('yaml-eslint-parser'),
      },
      name: 'sxzz/pnpm/pnpm-workspace-yaml',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/yaml-no-duplicate-catalog-item': 'error',
        'pnpm/yaml-no-unused-catalog-item': 'error',
      },
    },
  ]
}
