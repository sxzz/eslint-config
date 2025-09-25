import { pluginUnicorn } from '../plugins'
import type { Config } from '../types'

export const unicorn = (): Config[] => [
  {
    ...pluginUnicorn.configs.unopinionated,
    name: 'sxzz/unicorn/unopinionated',
  },
  {
    name: 'sxzz/unicorn',
    rules: {
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-empty-array-spread': 'error',
      'unicorn/consistent-function-scoping': [
        'error',
        { checkArrowFunctions: false },
      ],
      'unicorn/custom-error-definition': 'error',
      'unicorn/filename-case': [
        'error',
        {
          cases: { kebabCase: true, pascalCase: true },
          ignore: [/^[A-Z]+\..*$/, /import_map\.json/],
        },
      ],
      'unicorn/import-style': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-process-exit': 'off',
      'unicorn/no-this-assignment': 'off',
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/no-useless-undefined': [
        'error',
        { checkArguments: false, checkArrowFunctionBody: false },
      ],
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-ternary': 'off',
      // top level await is not supported in all environments
      'unicorn/prefer-top-level-await': 'off',
      // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2710
      'unicorn/require-module-specifiers': 'off',
    },
  },
]
