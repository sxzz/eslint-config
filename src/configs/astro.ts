import type { Config } from '../types'

export const astro = async (): Promise<Config[]> => {
  const pluginAstro = await import('eslint-plugin-astro')
  return (pluginAstro.default.configs.recommended as Config[]).map(
    (config) => ({
      ...config,
      name: `sxzz/${config.name || 'anonymous'}`,
    }),
  )
}
