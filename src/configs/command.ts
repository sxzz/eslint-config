import { configCommand } from '../plugins'
import type { FlatESLintConfig } from 'eslint-define-config'

export const command: FlatESLintConfig[] = [configCommand() as any]
