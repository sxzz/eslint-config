# @sxzz/eslint-config [![npm](https://img.shields.io/npm/v/@sxzz/eslint-config.svg)](https://npmjs.com/package/@sxzz/eslint-config)

Flat ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

[Legacy Version](https://github.com/sxzz/eslint-config-legacy)

## Features

- Support Vue 2 and 3 out-of-box.
- Select the required file types as needed.
- Support JSON(5), YAML, Markdown...

## Install

```bash
npm i -D @sxzz/eslint-config
```

## Usage

```js
// eslint.config.js
import { all } from '@sxzz/eslint-config'

export default all
```

### Custom Config

```js
import { sxzz } from '@sxzz/eslint-config'
export default sxzz(
  [
    /* your custom config */
  ],
  { vue: true, prettier: true, markdown: true }
)
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2021-PRESENT [三咲智子](https://github.com/sxzz)
