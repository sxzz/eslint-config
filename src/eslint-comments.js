import commentsPlugin from 'eslint-plugin-eslint-comments'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const eslintComments = [
  {
    plugins: {
      'eslint-comments': commentsPlugin,
    },
    rules: {
      ...commentsPlugin.configs.recommended.rules,
      'eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
    },
  },
]
