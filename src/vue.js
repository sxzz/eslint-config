import { getPackageInfoSync } from 'local-pkg'
import vueParser from 'vue-eslint-parser'
import vuePlugin from 'eslint-plugin-vue'
import { GLOB_EXCLUDE } from './shared.js'
import { typescript } from './typescript.js'

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

/** @type {import('eslint-define-config').FlatESLintConfig[]} */
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

/** @type {import('eslint-define-config').FlatESLintConfig[]} */
export const vue = [
  {
    files: ['**/*.vue'],
    ignores: GLOB_EXCLUDE,
    plugins: {
      vue: vuePlugin,
      ...typescript[0].plugins,
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
      ...(getVueVersion() === 3 ? vue3Rules : vue2Rules),
      ...typescript[0].rules,
    },
  },
  ...reactivityTransform,
]
