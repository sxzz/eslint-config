import { sxzz } from './src/index'

export default sxzz({
  vue: true,
  // `oxfmt` is only installed for type generation
  oxfmt: false,
  pnpm: true,
  baseline: {
    ignoreFeatures: ['top-level-await'],
  },
}).append(
  {
    files: ['package.json'],
    rules: {
      // aliased to `typescript@7`, alongside `typescript@6`
      'e18e/ban-dependencies': [
        'error',
        { allowed: ['@typescript/native-preview'] },
      ],
    },
  },
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
