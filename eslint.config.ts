import { sxzz } from './src/index'

export default sxzz({
  vue: true,
  pnpm: true,
}).append(
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
  {
    ignores: ['src/typegen.ts'],
  },
)
