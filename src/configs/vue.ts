import process from 'node:process'
import { getPackageInfoSync } from 'local-pkg'
import { GLOB_VUE } from '../globs'
import { parserVue, pluginVue, tseslint } from '../plugins'
import type { Rules } from '../typegen'
import type { Config } from '../types'
import { typescriptCore } from './typescript'
import type { ESLint } from 'eslint'

export function getVueVersion(): number {
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

export const reactivityTransform = (): Config[] => [
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
    name: 'sxzz/vue/reactivity-transform',
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
        void: 'any',
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

delete vue2Rules['vue/component-tags-order']
delete vue3Rules['vue/component-tags-order']

const vueTs: Config[] = typescriptCore
  .filter((config) => config.name !== 'typescript-eslint/base')
  .map((config) => {
    return {
      ...config,
      files: [GLOB_VUE],
      name: `sxzz/vue/${config.name?.replace('sxzz/', '') || 'anonymous'}`,
    }
  })

export const vue = (): Config[] => [
  ...vueTs,
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
    name: 'sxzz/vue',
    plugins: {
      '@typescript-eslint': tseslint.plugin as ESLint.Plugin,
      vue: pluginVue,
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...(isVue3 ? vue3Rules : vue2Rules),
      ...vueCustomRules,
    },
  },
  ...reactivityTransform(),
]
