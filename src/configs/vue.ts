import { getPackageInfoSync } from 'local-pkg'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { type FlatESLintConfigItem, type Rules } from 'eslint-define-config'
import { GLOB_VUE } from '../globs'
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

export const reactivityTransform: FlatESLintConfigItem[] = [
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
      vue: pluginVue,
    },
    rules: {
      'vue/no-setup-props-reactivity-loss': 'off',
    },
  },
]

const vueCustomRules: Rules = {
  'vue/max-attributes-per-line': 'off',
  'vue/no-v-html': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/require-prop-types': 'off',
  'vue/require-default-prop': 'off',

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
  'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
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
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
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
