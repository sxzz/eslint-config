import { GLOB_TS, GLOB_TSX } from '../globs'
import { parserTypeScript, pluginAntfu, pluginTypeScript } from '../plugins'
import { restrictedSyntaxJs } from './javascript'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const typescript: FlatESLintConfigItem[] = [
  {
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      antfu: pluginAntfu,
    },
    rules: {
      ...pluginTypeScript.configs['eslint-recommended'].overrides![0].rules,
      ...pluginTypeScript.configs.strict.rules,

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-redeclare': 'error',

      // handled by unused-imports/no-unused-imports
      '@typescript-eslint/no-unused-vars': 'off',

      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': [
        'error',
        { allowBitwiseExpressions: true },
      ],

      'no-restricted-syntax': [
        'error',
        ...restrictedSyntaxJs,
        'TSEnumDeclaration[const=true]',
      ],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'import/no-duplicates': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.ts?(x)'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
]
