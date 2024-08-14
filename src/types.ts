import type { Rules } from './typegen'
import type { Linter } from 'eslint'

export type Config = Linter.Config<Linter.RulesRecord & Rules>
