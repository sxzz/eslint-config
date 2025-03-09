# @sxzz/eslint-config [![npm](https://img.shields.io/npm/v/@sxzz/eslint-config.svg)](https://npmjs.com/package/@sxzz/eslint-config)

A opinionated ESLint config preset for JavaScript, TypeScript, Vue,
and Prettier.

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Ignores common files like `dist`, `node_modules`, `coverage`, and files in `.gitignore`.
- Reasonable defaults, best practices, only one-line of config
- Reasonable strict, but with better code quality.

## Install

```bash
npm i -D @sxzz/eslint-config
```

Require Node.js >= 18.18, and ESLint >= 9.5.0.

## Usage

```js
import { sxzz } from '@sxzz/eslint-config'
export default sxzz(
  // Features: it'll detect installed dependency and enable necessary features automatically
  {
    prettier: true,
    markdown: true,
    vue: true, // auto detection
    unocss: false, // auto detection
  },
  [
    /* your custom config */
  ],
).removeRules('foo/bar') // see more in https://github.com/antfu/eslint-flat-config-utils
```

### Presets

```js
// eslint.config.js
import {
  presetJavaScript, // Ignore common files and include javascript support
  presetJsonc, // Includes basic json(c) file support and sorting json keys
  presetLangsExtensions, // Includes markdown, yaml + `presetJsonc` support
  presetBasic, // Includes `presetJavaScript` and typescript support

  // Includes
  // - `presetBasic` (JS+TS) support
  // - `presetLangsExtensions` (markdown, yaml, jsonc) support
  // - Vue support
  // - UnoCSS support (`uno.config.ts` is required)
  // - Prettier support
  presetAll,
} from '@sxzz/eslint-config'

export default presetAll
```

See [preset.ts](./src/presets.ts) for more details.

## Comparing to [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

Most of the rules are the same, but there are some differences:

- Use [Prettier](https://prettier.io/) instead of [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic).
- React and Svelte are not supported.
- Maybe stricter and simpler.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2021-PRESENT [三咲智子](https://github.com/sxzz)
