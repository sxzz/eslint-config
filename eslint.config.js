// @ts-check
// import { sxzz } from './dist/index.js'

import { tsImport } from 'tsx/esm/api'
/** @type {typeof import('./src/index.ts')} */
const { sxzz } = await tsImport('./src/index.ts', import.meta.url)

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
