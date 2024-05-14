import { pluginUnocss } from '../plugins'
import type { FlatESLintConfig } from 'eslint-define-config'

export const unocss: FlatESLintConfig[] = [pluginUnocss.configs.flat]
