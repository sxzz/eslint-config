/* eslint-disable import/order */
import sortKeys from 'eslint-plugin-sort-keys'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { sxzz } = require('./src/index.ts')

// import { sxzz } from './dist/index.js'

export default sxzz([
  {
    files: ['src/**/*.ts'],
    plugins: {
      'sort-keys': sortKeys,
    },
    rules: {
      'sort-keys/sort-keys-fix': 'error',
    },
  },
])
