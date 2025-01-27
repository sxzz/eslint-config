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
  regexp,
  sortImports,
  sortPackageJson,
  sortTsconfig,
  specialCases,
  typescript,
  unicorn,
  unocss,
  vue,
  yml,
} from './configs'
import { hasUnocss, hasVue } from './env'
import type { Config } from './types'

/** Ignore common files and include javascript support */
export const presetJavaScript = (): Config[] => [
  ...ignores(),
  ...javascript(),
  ...comments(),
  ...imports(),
  ...unicorn(),
  ...node(),
  ...jsdoc(),
  ...regexp(),
]
/** Includes basic json(c) file support and sorting json keys */
export const presetJsonc = (): Config[] => [
  ...jsonc(),
  ...sortPackageJson(),
  ...sortTsconfig(),
]
/** Includes markdown, yaml + `presetJsonc` support */
export const presetLangsExtensions = (): Config[] => [
  ...markdown(),
  ...yml(),
  ...presetJsonc(),
]
/** Includes `presetJavaScript` and typescript support */
export const presetBasic = (): Config[] => [
  ...presetJavaScript(),
  ...typescript(),
  ...sortImports(),
]
/**
 * Includes
 * - `presetBasic` (JS+TS) support
 * - `presetLangsExtensions` (markdown, yaml, jsonc) support
 * - Vue support
 * - UnoCSS support (`uno.config.ts` is required)
 * - Prettier support
 */
export const presetAll = async (): Promise<Config[]> => [
  ...presetBasic(),
  ...presetLangsExtensions(),
  ...vue(),
  ...(await unocss()),
  ...prettier(),
]

/** `@sxzz`'s preset. */
export async function sxzz(
  config: Config | Config[] = [],
  {
    command: enableCommand = true,
    markdown: enableMarkdown = true,
    prettier: enablePrettier = true,
    unocss: enableUnocss = hasUnocss,
    vue: enableVue = hasVue,
  }: Partial<{
    /** Vue support. Auto-enable if detected. */
    vue: boolean
    /** Prettier support. Default: true */
    prettier: boolean
    /** markdown support. Default: true */
    markdown: boolean
    /** UnoCSS support. Auto-enable if detected. */
    unocss: boolean
    sortKeys: boolean
    command: boolean
  }> = {},
): Promise<Config[]> {
  const configs: Config[] = [...presetBasic(), ...yml(), ...presetJsonc()]
  if (enableVue) {
    configs.push(...vue())
  }
  if (enableMarkdown) {
    configs.push(...markdown())
  }
  if (enableUnocss) {
    configs.push(...(await unocss()))
  }
  if (enablePrettier) {
    configs.push(...prettier())
  }
  if (enableCommand) {
    configs.push(...command())
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  configs.push(...specialCases())
  return configs
}
