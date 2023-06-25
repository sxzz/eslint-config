import { defineFlatConfig } from 'eslint-define-config'
import { all } from './index.js'

export default defineFlatConfig([
  ...all,
  {
    ignores: ['index.cjs'],
  },
])
