import tsPlugin from '@typescript-eslint/eslint-plugin'
import { type FlatESLintConfig, type Rules } from 'eslint-define-config'
import { getPackageInfoSync } from 'local-pkg'

import { GLOB_NUXT_LAYOUTS, GLOB_NUXT_PAGE, GLOB_VUE } from '../globs'
import { parserVue, pluginVue } from '../plugins'

import { typescript } from './typescript'

export function getVueVersion() {
  const pkg = getPackageInfoSync('vue', { paths: [process.cwd()] })
  if (
    pkg &&
    typeof pkg.version === 'string' &&
    !Number.isNaN(+pkg.version[0])
  ) {
    return +pkg.version[0]
  }
  return 3
}
const isVue3 = getVueVersion() === 3

export const reactivityTransform: FlatESLintConfig[] = [
  {
    languageOptions: {
      globals: {
        $: 'readonly',
        $$: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $toRef: 'readonly',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      'vue/no-setup-props-reactivity-loss': 'off',
    },
  },
]

const vueCustomRules: Partial<Rules> = {
  'vue/attributes-order': [
    'warn',
    {
      alphabetical: false,
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    },
  ],
  'vue/block-order': [
    'error',
    {
      order: [
        'docs',
        'script[setup]',
        'template',
        'script:not([setup])',
        'style',
      ],
    },
  ],
  'vue/component-definition-name-casing': ['error', 'kebab-case'],
  'vue/component-name-in-template-casing': [
    'error',
    'kebab-case',
    {
      ignores: [],
      registeredComponentsOnly: false,
    },
  ],
  'vue/component-options-name-casing': ['error', 'PascalCase'],
  'vue/component-tags-order': 'off',

  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/eqeqeq': ['error', 'smart'],
  'vue/html-self-closing': [
    'error',
    {
      html: {
        component: 'always',
        normal: 'always',
        void: 'always',
      },
      math: 'always',
      svg: 'always',
    },
  ],
  'vue/match-component-file-name': [
    'error',
    {
      extensions: ['vue'],
      shouldMatchCase: false,
    },
  ],
  'vue/match-component-import-name': 'warn',
  'vue/max-attributes-per-line': 'off',
  'vue/multi-word-component-names': 'error',
  'vue/no-boolean-default': ['error', 'default-false'],
  'vue/no-constant-condition': 'warn',
  'vue/no-duplicate-attr-inheritance': 'warn',
  'vue/no-empty-pattern': 'error',
  'vue/no-irregular-whitespace': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-multiple-objects-in-class': 'error',
  'vue/no-potential-component-option-typo': [
    'error',
    {
      presets: ['vue', 'nuxt'],
      threshold: 5,
    },
  ],
  'vue/no-reserved-component-names': 'error',
  'vue/no-static-inline-styles': [
    'error',
    {
      allowBinding: false,
    },
  ],
  'vue/no-this-in-before-route-enter': 'error',
  // 'vue/no-restricted-static-attribute': [
  //   'error',
  //   {
  //     key: 'stlye',
  //     message: 'Using "stlye" is not allowed. Use "style" instead.',
  //   },
  // ],
  // 'vue/no-template-target-blank': [
  //   'error',
  //   {
  //     allowReferrer: true,
  //     enforceDynamicLinks: 'always',
  //   },
  // ],
  'vue/no-undef-components': [
    'error',
    {
      ignorePatterns: ['lazy-hydrate', 'no-ssr', 'client-only'],
    },
  ],

  'vue/no-unsupported-features': [
    'error',
    {
      ignores: [],
      version: '^2.7.14',
    },
  ],
  'vue/no-unused-properties': [
    'error',
    {
      groups: ['props', 'data', 'computed', 'methods', 'setup'],
      ignorePublicMembers: true,
    },
  ],
  'vue/no-unused-refs': 'error',
  'vue/no-useless-concat': 'warn',
  'vue/no-useless-mustaches': [
    'warn',
    {
      ignoreIncludesComment: true,
      ignoreStringEscape: true,
    },
  ],
  'vue/no-useless-v-bind': [
    'warn',
    {
      ignoreIncludesComment: true,
      ignoreStringEscape: true,
    },
  ],
  'vue/no-v-html': 'off',
  'vue/object-curly-spacing': 'error',
  'vue/object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/prefer-prop-type-boolean-first': 'error',
  'vue/prefer-separate-static-class': 'error',
  'vue/prefer-template': 'error',
  'vue/prefer-true-attribute-shorthand': 'warn',
  'vue/prop-name-casing': ['error', 'camelCase'],
  'vue/require-default-prop': 'error',
  'vue/require-prop-types': 'error',
  // TODO: отступы в <script>
  'vue/script-indent': [
    'error',
    2,
    {
      baseIndent: 1,
      ignores: [],
      switchCase: 1,
    },
  ],
  'vue/space-in-parens': 'error',
  'vue/static-class-names-order': 'off',
  'vue/v-on-handler-style': [
    'error',
    ['method', 'inline-function'], // ["method", "inline-function"] | ["method", "inline"] | "inline-function" | "inline"
    {
      ignoreIncludesComment: true,
    },
  ],
  'vue/valid-v-bind-sync': 'error',
  'vue/valid-v-slot': 'error',
}

const vue3Rules: Rules = {
  ...pluginVue.configs.base.rules,
  ...pluginVue.configs['vue3-essential'].rules,
  ...pluginVue.configs['vue3-strongly-recommended'].rules,
  ...pluginVue.configs['vue3-recommended'].rules,
}

const vue2Rules: Rules = {
  ...pluginVue.configs.base.rules,
  ...pluginVue.configs.essential.rules,
  ...pluginVue.configs['strongly-recommended'].rules,
  ...pluginVue.configs.recommended.rules,
}

export const vue: FlatESLintConfig[] = [
  {
    files: [GLOB_VUE],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: pluginVue,
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...typescript[0].rules,
    },
  },
  {
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...(isVue3 ? vue3Rules : vue2Rules),
      ...vueCustomRules,
    },
  },
  ...reactivityTransform,
  {
    files: [GLOB_NUXT_PAGE, GLOB_NUXT_LAYOUTS, 'app.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
