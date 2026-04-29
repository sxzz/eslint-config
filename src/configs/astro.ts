import { importWithError } from '../utils.ts'
import type { Config } from '../types.ts'

export const astro = async (): Promise<Config[]> => {
  const pluginAstro = await importWithError<
    typeof import('eslint-plugin-astro')
  >('eslint-plugin-astro')
  return pluginAstro.configs.recommended.map((config) => ({
    ...config,
    name: `sxzz/${config.name || 'anonymous'}`,
  }))
}
