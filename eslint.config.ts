// import { sxzz } from './dist/index.js'
import { sxzz } from './src/index'

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
  { vue: true, pnpm: true },
)
