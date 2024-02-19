import { hasUnocss, hasVue } from './env'
import {
  comments,
  ignores,
  imports,
  javascript,
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
import type { FlatESLintConfigItem } from 'eslint-define-config'

/** Ignore common files and include javascript support */
export const presetJavaScript = [
  ...ignores,
  ...javascript,
  ...comments,
  ...imports,
  ...unicorn,
  ...node,
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
export { presetBasic as basic, presetAll as all }

/**
 *
 * @param config
 * @param features
 * @returns
 */
export function sxzz(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    vue: enableVue = hasVue,
    prettier: enablePrettier = true,
    markdown: enableMarkdown = true,
    unocss: enableUnocss = hasUnocss,
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
  }> = {},
): FlatESLintConfigItem[] {
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
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
