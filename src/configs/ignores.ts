import { GLOB_EXCLUDE } from '../globs'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const ignores: FlatESLintConfigItem[] = [{ ignores: GLOB_EXCLUDE }]
