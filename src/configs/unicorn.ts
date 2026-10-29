import { GLOB_SRC } from '../globs.ts'
import { pluginUnicorn } from '../plugins.ts'
import type { Config } from '../types.ts'

const filenameCaseIgnore = [
  /^[A-Z]+\..*$/,
  /^[a-z]{2}-[A-Z]{2}$/, // zh-CN, en-US, etc.
  /import_map\.json/,
]

export const unicorn = (): Config[] => [
  {
    ...pluginUnicorn.configs.unopinionated,
    files: [GLOB_SRC],
    name: 'sxzz/unicorn/unopinionated',
  },
  {
    files: [GLOB_SRC],
    name: 'sxzz/unicorn',
    rules: {
      'unicorn/consistent-arrow-return-style': 'off',
      'unicorn/consistent-function-scoping': [
        'error',
        { checkArrowFunctions: false },
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: { kebabCase: true, pascalCase: true },
          ignore: filenameCaseIgnore,
        },
      ],
      'unicorn/import-style': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-array-for-each': 'off',
      // conflicts with e18e/prefer-array-fill
      'unicorn/no-array-from-fill': 'off',
      'unicorn/no-barrel-files': 'off',
      'unicorn/no-duplicate-set-values': 'error',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-for-each': 'off',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-nonstandard-builtin-properties': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/no-this-assignment': 'off',
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/no-unreadable-object-destructuring': 'off',
      'unicorn/no-useless-undefined': [
        'error',
        { checkArguments: false, checkArrowFunctionBody: false },
      ],
      'unicorn/numeric-separators-style': 'off',
      // covered by e18e/prefer-array-some
      'unicorn/prefer-array-some': 'off',
      'unicorn/prefer-await': 'off',
      // conflicts with e18e/prefer-string-fromcharcode
      'unicorn/prefer-code-point': 'off',
      // covered by e18e/prefer-date-now
      'unicorn/prefer-date-now': 'off',
      // covered by e18e/prefer-includes
      'unicorn/prefer-includes': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-query-selector': 'error',
      // covered by e18e/prefer-regex-test
      'unicorn/prefer-regexp-test': 'off',
      'unicorn/prefer-ternary': 'off',
      // top level await is not supported in all environments
      'unicorn/prefer-top-level-await': 'off',
      // covered by e18e/prefer-url-canparse
      'unicorn/prefer-url-can-parse': 'off',
      'unicorn/require-array-sort-compare': 'off',
      // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2710
      'unicorn/require-module-specifiers': 'off',
      'unicorn/single-line-block-comment-style': 'off',
    },
  },
]
