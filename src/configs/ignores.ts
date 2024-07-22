import { GLOB_EXCLUDE } from '../globs'
import type { Linter } from 'eslint'

export const ignores: Linter.Config[] = [{ ignores: GLOB_EXCLUDE }]
