import { configCommand } from '../plugins'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const command: FlatESLintConfigItem[] = [configCommand()]
