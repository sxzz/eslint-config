import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const hasTypeScript = (): boolean => isPackageExists('typescript')
export const hasVue = (): boolean =>
  isPackageExists('vue') ||
  isPackageExists('nuxt') ||
  isPackageExists('vitepress') ||
  isPackageExists('@slidev/cli')
export const hasUnocss = (): boolean =>
  isPackageExists('unocss') ||
  isPackageExists('@unocss/webpack') ||
  isPackageExists('@unocss/nuxt') ||
  isPackageExists('@unocss/eslint-plugin')

export function isInEditorEnv(): boolean {
  if (process.env.CI) return false
  if (isInGitHooksOrLintStaged()) return false
  return !!(
    process.env.VSCODE_PID ||
    process.env.VSCODE_CWD ||
    process.env.JETBRAINS_IDE ||
    process.env.VIM ||
    process.env.NVIM
  )
}

export function isInGitHooksOrLintStaged(): boolean {
  return !!(
    process.env.GIT_PARAMS ||
    process.env.VSCODE_GIT_COMMAND ||
    process.env.npm_lifecycle_script?.startsWith('lint-staged')
  )
}
