import { hasPnpmCatalogs } from '../env.ts'
import { pluginPnpm } from '../plugins.ts'
import type { Config } from '../types.ts'

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
        // Only enforce catalogs for workspaces that already use them
        ...(hasPnpmCatalogs() ? { 'pnpm/json-enforce-catalog': 'error' } : {}),
        'pnpm/json-prefer-workspace-settings': 'error',
        'pnpm/json-valid-catalog': 'error',
      },
    },
    {
      files: ['pnpm-workspace.yaml'],
      language: 'yml/yaml',
      name: 'sxzz/pnpm/pnpm-workspace-yaml',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/yaml-enforce-settings': [
          'error',
          {
            settings: {
              minimumReleaseAgeExcludePrune: true,
              shellEmulator: true,
              trustPolicy: 'no-downgrade',
              trustPolicyExcludePrune: true,
            },
          },
        ],
        'pnpm/yaml-no-duplicate-catalog-item': 'error',
        'pnpm/yaml-no-unused-catalog-item': 'error',
      },
    },
  ]
}
