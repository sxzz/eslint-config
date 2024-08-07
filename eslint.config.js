// @ts-check
// import { sxzz } from './dist/index.js'
import { importx } from 'importx'

/** @type {import('./src/index.ts')} */
const { sxzz } = await importx('./src/index.ts', {
  parentURL: import.meta.url,
  loader: 'jiti',
})

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
        'perfectionist/sort-imports': 'off',
        'perfectionist/sort-named-imports': 'off',
      },
    },
  ],
  { vue: true },
)
