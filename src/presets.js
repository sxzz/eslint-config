// @ts-check

import { eslintComments } from './eslint-comments.js'
import { imports, js, jsx, unicorn } from './js.js'
import { jsonc, pkgOrder } from './jsonc.js'
import { markdown } from './markdown.js'
import { prettier } from './prettier.js'
import { GLOB_EXCLUDE } from './shared.js'
import { typescript } from './typescript.js'
import { vue } from './vue.js'
import { yml } from './yml.js'

/**
 * @typedef { import('eslint-define-config').FlatESLintConfigItem } FlatESLintConfigItem
 */

/** @type {FlatESLintConfigItem[]} */
export const basic = [
  {
    // @ts-ignore
    ignores: GLOB_EXCLUDE,
  },
  ...js,
  ...jsx,
  ...typescript,
  ...imports,
  ...unicorn,
  ...jsonc,
  ...pkgOrder,
  ...yml,
  ...markdown,
  ...eslintComments,
]

/** @type { FlatESLintConfigItem[] } */
export const all = [...basic, ...vue, ...prettier]

/** @type {(options: Partial<{
 * vue: boolean
 * prettier: boolean
 * } & FlatESLintConfigItem>) => FlatESLintConfigItem[]} */
export function sxzz({
  vue: enableVue = true,
  prettier: enablePrettier = true,
  ...config
} = {}) {
  const configs = [...basic]
  if (enableVue !== false) {
    configs.push(...vue)
  }
  if (enablePrettier !== false) {
    configs.push(...prettier)
  }
  if (Object.keys(config).length > 0) {
    configs.push(config)
  }
  return configs
}
