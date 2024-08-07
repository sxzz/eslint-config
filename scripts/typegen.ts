import { writeFile } from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import pico from 'picocolors'
import { sxzz } from '../src/presets'

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

console.log(pico.green('Type definitions generated!'))
