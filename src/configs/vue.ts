import { getPackageInfoSync } from 'local-pkg'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { GLOB_VUE } from '../globs'
import { parserVue, pluginVue } from '../plugins'
import { typescript } from './typescript'
import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

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

export const reactivityTransform: FlatESLintConfigItem[] = [
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

const vueCustomRules: Rules = {
  'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
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
  'vue/max-attributes-per-line': 'off',

  'vue/multi-word-component-names': 'off',
  'vue/no-constant-condition': 'warn',
  'vue/no-empty-pattern': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': 'error',

  'vue/no-v-html': 'off',
  'vue/object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'vue/one-component-per-file': 'off',
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/prefer-template': 'error',
  'vue/require-default-prop': 'off',
  'vue/require-prop-types': 'off',
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

export const vue: FlatESLintConfigItem[] = [
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
]
