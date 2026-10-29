import { pluginPrettierRecommended } from '../plugins.ts'
import { importWithError } from '../utils.ts'
import type { Config } from '../types.ts'

// Oxfmt is Prettier-compatible, so the same stylistic rules conflict with it
const rules = { ...pluginPrettierRecommended.rules }
// eslint-disable-next-line unicorn/no-top-level-side-effects
delete rules['prettier/prettier']
// eslint-disable-next-line unicorn/no-top-level-side-effects
delete rules['vue/html-self-closing']

export const oxfmt = async (): Promise<Config[]> => {
  const pluginOxfmt = await importWithError<
    typeof import('eslint-plugin-oxfmt')
  >('eslint-plugin-oxfmt')
  return [
    {
      name: 'sxzz/oxfmt',
      plugins: {
        oxfmt: pluginOxfmt.default,
      },
      rules: {
        ...rules,
        'oxfmt/oxfmt': 'warn',
      },
    },
  ]
}
