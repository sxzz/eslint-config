import { GLOB_EXCLUDE } from '../globs'
import type { FlatESLintConfig } from 'eslint-define-config'

export const ignores: FlatESLintConfig[] = [{ ignores: GLOB_EXCLUDE }]
