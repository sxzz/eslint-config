import { GLOB_YAML } from '../globs'
import { pluginYml } from '../plugins'
import type { Config } from '../types'

const yamlConfigs = Array.from(
  new Set([...pluginYml.configs.standard, ...pluginYml.configs.prettier]),
)

export const yml = (): Config[] => [
  ...yamlConfigs.map((config) => ({
    ...config,
    name: 'sxzz/yaml/standard',
  })),
  {
    files: [GLOB_YAML],
    language: 'yml/yaml',
    name: 'sxzz/yaml',
    rules: {
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
