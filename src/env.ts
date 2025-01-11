import process from 'node:process'
import { isPackageExists } from 'local-pkg'

export const isInEditor: boolean = !!(
  (process.env.VSCODE_PID ||
    process.env.VSCODE_CWD ||
    process.env.JETBRAINS_IDE ||
    process.env.VIM) &&
  !process.env.CI
)
export const hasTypeScript: boolean = isPackageExists('typescript')
export const hasVue: boolean =
  isPackageExists('vue') ||
  isPackageExists('nuxt') ||
  isPackageExists('vitepress') ||
  isPackageExists('@slidev/cli')
export const hasUnocss: boolean =
  isPackageExists('unocss') ||
  isPackageExists('@unocss/webpack') ||
  isPackageExists('@unocss/nuxt')
