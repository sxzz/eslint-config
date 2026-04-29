import { importWithError } from '../utils.ts'
import type { Config } from '../types.ts'

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
