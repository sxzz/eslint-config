import { importWithError } from '../utils'
import type { Config } from '../types'

export const unocss = async (): Promise<Config[]> => {
  const unocss = await importWithError<typeof import('@unocss/eslint-plugin')>(
    '@unocss/eslint-plugin',
  )
  return [
    {
      ...unocss.configs.flat,
      name: 'sxzz/unocss',
    },
  ]
}
