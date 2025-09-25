import {
  GLOB_JSX,
  GLOB_MARKDOWN,
  GLOB_SRC,
  GLOB_SRC_EXT,
  GLOB_TSX,
  GLOB_VUE,
} from '../globs'
import { pluginImport } from '../plugins'
import type { Config } from '../types'

export const specialCases = (): Config[] => [
  {
    files: ['**/scripts/*', '**/cli.*'],
    name: 'sxzz/special/cli',
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: [`**/*.{test,spec}.${GLOB_SRC_EXT}`],
    name: 'sxzz/special/tests',
    rules: {
      'no-unused-expressions': 'off',
      'unicorn/consistent-function-scoping': 'off',
    },
  },
  {
    files: [
      `**/*config*.${GLOB_SRC_EXT}`,
      `**/{views,pages,routes,middleware,plugins,api,modules}/${GLOB_SRC}`,
      `**/{index,vite,esbuild,rollup,rolldown,webpack,rspack,farm,unloader}.${GLOB_SRC_EXT}`,
      '**/*.d.ts',
      `${GLOB_MARKDOWN}/**`,
      '**/.prettierrc*',
    ],
    name: 'sxzz/special/allow-default-export',
    plugins: {
      import: pluginImport as any,
    },
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/ISSUE_TEMPLATE/**'],
    name: 'sxzz/special/github',
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
  {
    files: [GLOB_JSX, GLOB_TSX],
    name: 'sxzz/special/components',
    rules: {
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
]
