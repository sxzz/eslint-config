import { writeFile } from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import { sxzz } from '../src'

const dts = await flatConfigsToRulesDTS(
  sxzz(
    [
      {
        plugins: { '': { rules: Object.fromEntries(builtinRules.entries()) } },
      },
    ],
    { vue: true, unocss: true },
  ),
  { includeAugmentation: false, exportTypeName: 'Rules' },
)

await writeFile('src/typegen.ts', dts)
