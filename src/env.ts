import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const cwd = process.cwd()
function isPackageExists(name: string): boolean {
  try {
    require.resolve(name, { paths: [cwd] })
    return true
  } catch {
    return false
  }
}

export const hasTypeScript = (): boolean => isPackageExists('typescript')
export const hasVue = (): boolean =>
  isPackageExists('vue') ||
  isPackageExists('nuxt') ||
  isPackageExists('vitepress') ||
  isPackageExists('@slidev/cli')
export const hasAstro = (): boolean => isPackageExists('astro')
export const hasUnocss = (): boolean =>
  isPackageExists('unocss') ||
  isPackageExists('@unocss/webpack') ||
  isPackageExists('@unocss/nuxt') ||
  isPackageExists('@unocss/eslint-plugin')

const RE_CATALOGS = /^catalogs?:/m

export function findPnpmWorkspace(): string | undefined {
  let dir = cwd
  while (true) {
    const file = path.join(dir, 'pnpm-workspace.yaml')
    if (existsSync(file)) return file
    const parent = path.dirname(dir)
    if (parent === dir) return
    dir = parent
  }
}

export const hasPnpmWorkspace = (): boolean => !!findPnpmWorkspace()

export function hasPnpmCatalogs(): boolean {
  const file = findPnpmWorkspace()
  if (!file) return false
  const content = readFileSync(file, 'utf8')
  return RE_CATALOGS.test(content)
}
