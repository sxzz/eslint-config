import { pluginUnocss } from '../plugins'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const unocss: FlatESLintConfigItem[] = [pluginUnocss.configs.flat]
