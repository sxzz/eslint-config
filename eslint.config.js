// @ts-check
// import { sxzz } from './dist/index.js'

import { require } from 'tsx/cjs/api'
/** @type {typeof import('./src/index.ts')} */
const { sxzz } = require('./src/index.ts', import.meta.url)

export default sxzz(
  [
    {
      files: ['src/**/*.ts'],
      rules: {
        'perfectionist/sort-objects': 'error',
      },
    },
    {
      files: ['**/*.md/*'],
      rules: {
        'sort-imports': 'off',
      },
    },
  ],
  { vue: true },
)
