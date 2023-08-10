import unocssPlugin from '@unocss/eslint-plugin'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const unocss = [
  {
    plugins: {
      '@unocss': unocssPlugin,
    },
    rules: {
      ...unocssPlugin.configs.recommended.rules,
    },
  },
]
