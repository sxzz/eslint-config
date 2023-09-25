# @frabbit/eslint-config [![npm](https://img.shields.io/npm/v/@frabbit/eslint-config.svg)](https://npmjs.com/package/@frabbit/eslint-config)

Flat ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.
based on https://github.com/sxzz/eslint-config

[Legacy Version](https://github.com/frabbit/eslint-config-legacy)

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue 2 and 3 out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Reasonable defaults, best practices, only one-line of config

## Install

```bash
npm i -D @frabbit/eslint-config
```

Require Node.js >= 16.14.

## Usage

```js
// eslint.config.js
import { all } from '@frabbit/eslint-config'

export default all
```

### Custom Config

```js
import { frabbit } from '@frabbit/eslint-config'
export default frabbit(
  [
    /* your custom config */
  ],
  { vue: true, prettier: true, markdown: true, unocss: false }
)
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```

## Comparing to [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

Most of the rules are the same, but there are some differences:

- Use Prettier instead of [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic).
- Support both Vue 2 and Vue 3.
- Support Vue Reactivity Transform.
- More stricter rules.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/frabbit/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/frabbit/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2021-PRESENT [三咲智子](https://github.com/frabbit)
