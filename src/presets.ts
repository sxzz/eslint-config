import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
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

export const presetJavaScript = [
  ...ignores,
  ...javascript,
  ...comments,
  ...imports,
  ...unicorn,
]

export const presetLangsExtensions = [
  ...markdown,
  ...yml,
  ...jsonc,
  ...sortPackageJson,
  ...sortTsconfig,
]

export const basic = [
  ...presetJavaScript,
  ...typescript,
  ...presetLangsExtensions,
]
export { basic as presetBasic }

export const all = [...basic, ...sortKeys, ...vue, ...unocss, ...prettier]

export function sxzz(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    vue: enableVue = true,
    prettier: enablePrettier = true,
    markdown: enableMarkdown = true,
    sortKeys: enableSortKeys = true,
    unocss: enableUnocss = false,
  }: Partial<{
    vue: boolean
    prettier: boolean
    markdown: boolean
    unocss: boolean
    sortKeys: boolean
  }> = {}
): FlatESLintConfigItem[] {
  const configs = []
  configs.push(...basic)
  if (enableSortKeys) {
    configs.push(...sortKeys)
  }
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
