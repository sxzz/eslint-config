import { createRequire } from 'node:module'
// import { sxzz } from './dist/index.js'

const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { sxzz } = require('./src/index.ts')

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
