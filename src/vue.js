import { getPackageInfoSync } from 'local-pkg'
import vueParser from 'vue-eslint-parser'
import vuePlugin from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { typescript } from './typescript.js'
import { GLOB_VUE } from './shared.js'

export { vueParser, vuePlugin }

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

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const reactivityTransform = [
  {
    languageOptions: {
      globals: {
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $computed: 'readonly',
        $shallowRef: 'readonly',
        $toRef: 'readonly',
        $customRef: 'readonly',
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      'vue/no-setup-props-destructure': 'off',
    },
  },
]

/** @type {import('eslint-define-config').Rules} */
const vueBaseRules = {
  'vue/max-attributes-per-line': 'off',
  'vue/no-v-html': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/require-prop-types': 'off',

  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    },
  ],
  'vue/component-tags-order': [
    'error',
    { order: ['script', 'template', 'style'] },
  ],
  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/no-useless-v-bind': 'error',
  'vue/no-unused-refs': 'error',
  'vue/padding-line-between-blocks': ['error', 'always'],

  'vue/prefer-template': 'error',
  'vue/eqeqeq': ['error', 'smart'],
  'vue/no-constant-condition': 'warn',
  'vue/object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],
  'vue/no-loss-of-precision': 'error',
  'vue/no-empty-pattern': 'error',
}

/** @type {import('eslint-define-config').Rules} */
const vue3Rules = {
  ...vuePlugin.configs['base'].rules,
  ...vuePlugin.configs['vue3-essential'].rules,
  ...vuePlugin.configs['vue3-strongly-recommended'].rules,
  ...vuePlugin.configs['vue3-recommended'].rules,
  ...vueBaseRules,
}

/** @type {import('eslint-define-config').Rules} */
const vue2Rules = {
  ...vuePlugin.configs['base'].rules,
  ...vuePlugin.configs['essential'].rules,
  ...vuePlugin.configs['strongly-recommended'].rules,
  ...vuePlugin.configs['recommended'].rules,
  ...vueBaseRules,
}

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const vue = [
  {
    files: [GLOB_VUE],
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    processor: vuePlugin.processors['.vue'],
    rules: {
      ...typescript[0].rules,
    },
  },
  {
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...(isVue3 ? vue3Rules : vue2Rules),
    },
  },
  ...reactivityTransform,
]
