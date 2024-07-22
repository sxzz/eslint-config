import { pluginPerfectionist } from '../plugins'
import type { Linter } from 'eslint'

export const sortKeys: Linter.Config[] = [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'internal-type',
            'parent',
            'parent-type',
            'sibling',
            'sibling-type',
            'index',
            'index-type',
            'object',
            'type',
            'side-effect',
            'side-effect-style',
          ],
          internalPattern: ['~/**', '@/**', '#**'],
          newlinesBetween: 'ignore',
        },
      ],
      'perfectionist/sort-named-exports': [
        'warn',
        { groupKind: 'values-first' },
      ],
      'perfectionist/sort-named-imports': [
        'warn',
        { groupKind: 'values-first' },
      ],
    },
  },
]
