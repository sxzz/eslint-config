/* eslint-disable import/first */

export type InteropDefault<T> = T extends { default: infer U } ? U : T

/* #__NO_SIDE_EFFECTS__ */
function interopDefault<T>(m: T): InteropDefault<T> {
  return (m as any).default || m
}

import * as _pluginAntfu from 'eslint-plugin-antfu'
export const pluginAntfu: typeof import('eslint-plugin-antfu').default =
  interopDefault(_pluginAntfu)

// @ts-expect-error missing types
import * as _pluginComments from 'eslint-plugin-eslint-comments'
export const pluginComments = interopDefault(_pluginComments)

// @ts-expect-error missing types
import * as _pluginMarkdown from 'eslint-plugin-markdown'
export const pluginMarkdown = interopDefault(_pluginMarkdown)

import * as _pluginTypeScript from '@typescript-eslint/eslint-plugin'
export const pluginTypeScript = interopDefault(_pluginTypeScript)

// @ts-expect-error missing types
import * as _pluginUnicorn from 'eslint-plugin-unicorn'
export const pluginUnicorn = interopDefault(_pluginUnicorn)

// @ts-expect-error missing types
import * as _pluginVue from 'eslint-plugin-vue'
export const pluginVue = interopDefault(_pluginVue)

import * as _pluginUnocss from '@unocss/eslint-plugin'
export const pluginUnocss = interopDefault(_pluginUnocss)

import * as _pluginPrettier from 'eslint-plugin-prettier'
export const pluginPrettier = interopDefault(_pluginPrettier)

// @ts-expect-error missing types
import * as _configPrettier from 'eslint-config-prettier'
export const configPrettier = interopDefault(_configPrettier)

// @ts-expect-error missing types
export * as pluginImport from 'eslint-plugin-i'
export * as pluginJsonc from 'eslint-plugin-jsonc'
// @ts-expect-error missing types
export * as pluginUnusedImports from 'eslint-plugin-unused-imports'
// @ts-expect-error missing types
export * as pluginYml from 'eslint-plugin-yml'
// @ts-expect-error missing types
export * as pluginSortKeys from 'eslint-plugin-sort-keys'

export * as parserTypeScript from '@typescript-eslint/parser'
export * as parserVue from 'vue-eslint-parser'
export * as parserYml from 'yaml-eslint-parser'
export * as parserJsonc from 'jsonc-eslint-parser'
