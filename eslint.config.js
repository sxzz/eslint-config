import { defineFlatConfig } from 'eslint-define-config'
import {
  eslintComments,
  imports,
  js,
  jsonc,
  jsx,
  markdown,
  pkgOrder,
  prettier,
  ts,
  unicorn,
  yml,
} from './index.js'

export default defineFlatConfig([
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
  ...prettier,
])
