import { importWithError } from '../utils'
import type { Config } from '../types'

export const astro = async (): Promise<Config[]> => {
  const pluginAstro = await importWithError<
    typeof import('eslint-plugin-astro')
  >('eslint-plugin-astro')
  return pluginAstro.configs.recommended.map((config) => ({
    ...config,
    name: `sxzz/${config.name || 'anonymous'}`,
  }))
}
