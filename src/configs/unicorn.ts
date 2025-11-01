import { type FlatESLintConfig } from 'eslint-define-config'

import { pluginUnicorn } from '../plugins'

export const unicorn: FlatESLintConfig[] = [
  {
    plugins: {
      unicorn: pluginUnicorn,
    },
    rules: {
      'unicorn/better-regex': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/custom-error-definition': 'off',
      // 'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/expiring-todo-comments': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [/^[A-Z]+\..*$/],
        },
      ],
      // 'unicorn/import-index': 'warn', // Removed in v44
      'unicorn/new-for-builtins': 'off',
      // 'unicorn/new-for-builtins': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-console-spaces': 'error',
      // 'unicorn/no-fn-reference-in-iterator': 'off', // Removed in v34, replaced by no-array-callback-reference
      'unicorn/no-for-loop': 'warn',
      // 'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'warn',
      // 'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-keyword-prefix': 'warn',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-nested-ternary': 'warn',
      'unicorn/no-new-array': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/no-null': 'warn',
      'unicorn/no-object-as-default-parameter': 'warn',
      'unicorn/no-process-exit': 'error',
      'unicorn/no-reduce': 'off',
      'unicorn/no-static-only-class': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/no-unreadable-array-destructuring': 'off',
      // 'unicorn/no-unsafe-regex': 'warn', // Removed in v47
      'unicorn/no-unused-properties': 'off',
      'unicorn/no-useless-undefined': 'warn',
      'unicorn/no-zero-fractions': 'warn',
      // 'unicorn/no-zero-fractions': `error`,
      'unicorn/number-literal-case': 'error',
      'unicorn/prefer-add-event-listener': 'warn',
      // 'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-array-find': 'error',
      // 'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      // 'unicorn/prefer-dataset': 'warn', // Removed
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      // 'unicorn/prefer-event-key': 'off', // Removed
      // 'unicorn/prefer-flat-map': 'error', // Removed, renamed to prefer-array-flat-map (already defined above)
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-keyboard-event-key': 'error',
      'unicorn/prefer-math-trunc': 'error',
      // 'unicorn/prefer-modern-dom-apis': 'warn', // Removed in v36
      // 'unicorn/prefer-modern-dom-apis': 'error', // Removed in v36
      'unicorn/prefer-modern-math-apis': 'error',
      'unicorn/prefer-negative-index': 'error',
      // 'unicorn/prefer-node-append': 'warn', // Removed in v36, use prefer-dom-node-append
      'unicorn/prefer-node-protocol': 'error',
      // 'unicorn/prefer-node-remove': 'warn', // Removed in v36, use prefer-dom-node-remove
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-optional-catch-binding': 'warn',
      // 'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      // 'unicorn/prefer-query-selector': 'warn', // Removed in v36
      // 'unicorn/prefer-query-selector': 'error', // Removed in v36
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      // 'unicorn/prefer-replace-all': 'warn', // Removed, use prefer-string-replace-all
      'unicorn/prefer-set-has': 'warn',
      'unicorn/prefer-spread': 'error',
      // 'unicorn/prefer-starts-ends-with': 'error', // Removed, use prefer-string-starts-ends-with
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/prefer-string-slice': 'warn',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-top-level-await': 'error',
      // 'unicorn/prefer-trim-start-end': 'error', // Removed, use prefer-string-trim-start-end
      'unicorn/prefer-type-error': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/string-content': 'off',
      'unicorn/throw-new-error': 'warn',
      // 'unicorn/throw-new-error': 'error',
      // 'unicorn/catch-error-name': 0,
    },
  },
]
