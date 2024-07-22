import {
  command,
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  prettier,
  sortKeys,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  unocss,
  vue,
  yml,
} from './configs'
import { hasUnocss, hasVue } from './env'
import type { Linter } from 'eslint'

/** Ignore common files and include javascript support */
export const presetJavaScript = [
  ...ignores,
  ...javascript,
  ...comments,
  ...imports,
  ...unicorn,
  ...node,
  ...jsdoc,
]
/** Includes basic json(c) file support and sorting json keys */
export const presetJsonc = [...jsonc, ...sortPackageJson, ...sortTsconfig]
/** Includes markdown, yaml + `presetJsonc` support */
export const presetLangsExtensions = [...markdown, ...yml, ...presetJsonc]
/** Includes `presetJavaScript` and typescript support */
export const presetBasic = [...presetJavaScript, ...typescript, ...sortKeys]
/**
 * Includes
 * - `presetBasic` (JS+TS) support
 * - `presetLangsExtensions` (markdown, yaml, jsonc) support
 * - Vue support
 * - UnoCSS support (`uno.config.ts` is required)
 * - Prettier support
 */
export const presetAll = [
  ...presetBasic,
  ...presetLangsExtensions,
  ...vue,
  ...unocss,
  ...prettier,
]
export { presetAll as all, presetBasic as basic }

/** `sxzz`'s preset. */
export function sxzz(
  config: Linter.FlatConfig | Linter.FlatConfig[] = [],
  {
    command: enableCommand = true,
    markdown: enableMarkdown = true,
    prettier: enablePrettier = true,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue,
  }: Partial<{
    /** Vue support. Auto-enable. */
    vue: boolean
    /** Prettier support. Default: true */
    prettier: boolean
    /** markdown support. Default: true */
    markdown: boolean
    /** UnoCSS support. Auto-enable. */
    unocss: boolean
    sortKeys: boolean
    command: boolean
  }> = {},
): Linter.FlatConfig[] {
  const configs = [...presetBasic, ...yml, ...presetJsonc]
  if (enableVue) {
    configs.push(...vue)
  }
  if (enableMarkdown) {
    configs.push(...markdown)
  }
  if (enableUnocss) {
    configs.push(...unocss)
  }
  if (enablePrettier) {
    configs.push(...prettier)
  }
  if (enableCommand) {
    configs.push(...command)
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
