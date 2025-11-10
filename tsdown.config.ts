import { RequireCJS } from 'rolldown-plugin-require-cjs'
import { defineConfig } from 'tsdown'

export default defineConfig({
  plugins: [RequireCJS()],
  exports: true,
})
