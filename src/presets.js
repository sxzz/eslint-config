import { eslintComments } from './eslint-comments.js'
import { imports, js, jsx, unicorn } from './js.js'
import { jsonc, pkgOrder } from './jsonc.js'
import { markdown } from './markdown.js'
import { prettier } from './prettier.js'
import { GLOB_EXCLUDE } from './shared.js'
import { typescript } from './typescript.js'
import { vue } from './vue.js'
import { yml } from './yml.js'

/** @type {import('eslint-define-config').FlatESLintConfig[]} */
export const basic = [
  {
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

/** @type {import('eslint-define-config').FlatESLintConfig[]} */
export const all = [...basic, ...vue, ...prettier]
