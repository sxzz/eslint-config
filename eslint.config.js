/* eslint-disable import/order */
import sortKeys from 'eslint-plugin-sort-keys'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { frabbit } = require('./src/index.ts')

// import { frabbit } from './dist/index.js'

export default frabbit([
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
