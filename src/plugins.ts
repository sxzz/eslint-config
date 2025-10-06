/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck

import pluginAntfu from 'eslint-plugin-antfu'
import pluginSxzz from 'eslint-plugin-sxzz'
import pluginMarkdown from '@eslint/markdown'
import tseslint from 'typescript-eslint'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'
import pluginNode from 'eslint-plugin-n'
import pluginPerfectionist from 'eslint-plugin-perfectionist'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import pluginJsdoc from 'eslint-plugin-jsdoc'
import pluginIgnore from 'eslint-config-flat-gitignore'
import pluginDeMorgan from 'eslint-plugin-de-morgan'
import pluginPnpm from 'eslint-plugin-pnpm'

import pluginImport from 'eslint-plugin-import-x'
import pluginJsonc from 'eslint-plugin-jsonc'
import pluginYml from 'eslint-plugin-yml'

import configJs from '@eslint/js'
import configComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import configCommand from 'eslint-plugin-command/config'

import parserVue from 'vue-eslint-parser'
import parserYml from 'yaml-eslint-parser'
import parserJsonc from 'jsonc-eslint-parser'

export {
  configCommand,
  configComments,
  configJs,
  parserJsonc,
  parserVue,
  parserYml,
  pluginAntfu,
  pluginDeMorgan,
  pluginIgnore,
  pluginImport,
  pluginJsdoc,
  pluginJsonc,
  pluginMarkdown,
  pluginNode,
  pluginPerfectionist,
  pluginPnpm,
  pluginPrettier,
  pluginPrettierRecommended,
  pluginSxzz,
  pluginUnicorn,
  pluginUnusedImports,
  pluginVue,
  pluginYml,
  tseslint,
}
