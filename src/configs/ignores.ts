import { GLOB_EXCLUDE } from '../globs'
import type { Linter } from 'eslint'

export const ignores: Linter.FlatConfig[] = [{ ignores: GLOB_EXCLUDE }]
