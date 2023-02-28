import { eslintComments } from './eslint-comments.js'
import { imports, js, jsx, unicorn } from './js.js'
import { jsonc, pkgOrder } from './jsonc.js'
import { markdown } from './markdown.js'
import { ts } from './ts.js'
import { yml } from './yml.js'

/** @type {import('eslint-define-config').FlatESLintConfig[]} */
export const presetBasic = [
  'eslint:recommended',
  ...js,
  ...jsx,
  ...ts,
  ...imports,
  ...unicorn,
  ...jsonc,
  ...pkgOrder,
  ...yml,
  ...markdown,
  ...eslintComments,
]
