import { defineConfig } from 'eslint/config'
import { GLOB_JS, GLOB_TS, GLOB_TSX } from '../globs'
import { tseslint } from '../plugins'
import type { Rules } from '../typegen'
import type { Config } from '../types'
import { restrictedSyntaxJs } from './javascript'

export const typescriptCore: Config[] = defineConfig({
  extends: [...tseslint.configs.recommended],
  files: [GLOB_TS, GLOB_TSX],
  name: 'sxzz/typescript',
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
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
    '@typescript-eslint/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],

    // handled by unused-imports/no-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
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
  } satisfies Rules,
})

export const typescript = (): Config[] => [
  ...typescriptCore,

  {
    files: ['**/*.d.ts'],
    name: 'sxzz/typescript/dts-rules',
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'import/no-duplicates': 'off',
      'no-restricted-syntax': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    files: [GLOB_JS, '**/*.cjs'],
    name: 'sxzz/typescript/cjs-rules',
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]
