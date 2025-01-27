import type { Config } from '../types'

export const unocss = async (): Promise<Config[]> => {
  const { default: unocss } = await import('@unocss/eslint-plugin')
  return [
    {
      ...(unocss.configs.flat as any as Config),
      name: 'sxzz/unocss',
    },
  ]
}
