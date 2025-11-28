import {
  FlatConfigComposer,
  type Arrayable,
  type Awaitable,
} from 'eslint-flat-config-utils'
import {
  baseline,
  command,
  comments,
  deMorgan,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  pnpm,
  prettier,
  regexp,
  sortImports,
  sortPackageJson,
  sortPnpmWorkspace,
  sortTsconfig,
  specialCases,
  typescript,
  unicorn,
  unocss,
  vue,
  yml,
  type BaselineOptions,
} from './configs'
import { hasUnocss, hasVue } from './env'
import type { ConfigNames } from './typegen'
import type { Config } from './types'
import type { Linter } from 'eslint'

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
  ...deMorgan(),
]
/** Includes basic json(c) file support and sorting json keys */
export const presetJsonc = (): Config[] => [
  ...jsonc(),
  ...sortPackageJson(),
  ...sortTsconfig(),
  ...sortPnpmWorkspace(),
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
  ...command(),
  ...(await pnpm()),
  ...baseline(),
  ...specialCases(),
]

/// keep-sorted
export interface Options {
  /** @default true */
  baseline?: boolean | BaselineOptions
  /** @default true */
  command?: boolean
  /** markdown support. @default true */
  markdown?: boolean
  /** @default false */
  pnpm?: boolean
  /** Prettier support. @default true */
  prettier?: boolean
  /** UnoCSS support. Auto-enable if detected. */
  unocss?: boolean
  /** Vue support. Auto-enable if detected. */
  vue?: boolean
}

/** `@sxzz`'s preset. */
export function sxzz(
  options: Options = {},
  ...userConfigs: Awaitable<
    Arrayable<Config> | FlatConfigComposer<any, any> | Linter.Config[]
  >[]
): FlatConfigComposer<Config, ConfigNames> {
  const {
    baseline: enableBaseline = true,
    command: enableCommand = true,
    markdown: enableMarkdown = true,
    pnpm: enablePnpm = false,
    prettier: enablePrettier = true,
    unocss: enableUnocss = hasUnocss(),
    vue: enableVue = hasVue(),
  } = options

  const configs: Awaitable<Config[]>[] = [presetBasic(), yml(), presetJsonc()]
  if (enableBaseline) {
    configs.push(
      baseline(typeof enableBaseline === 'object' ? enableBaseline : {}),
    )
  }
  if (enableVue) {
    configs.push(vue())
  }
  if (enableMarkdown) {
    configs.push(markdown())
  }
  if (enableUnocss) {
    configs.push(unocss())
  }
  if (enablePrettier) {
    configs.push(prettier())
  }
  if (enableCommand) {
    configs.push(command())
  }
  if (enablePnpm) {
    configs.push(pnpm())
  }
  configs.push(specialCases())

  const composer = new FlatConfigComposer<Config, ConfigNames>(
    ...configs,
    ...(userConfigs as any),
  )
  return composer
}
