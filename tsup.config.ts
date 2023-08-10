import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.js'],
  format: ['cjs'],
  outDir: '.',
  target: 'es2022',
})
