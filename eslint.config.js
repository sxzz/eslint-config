import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
require('sucrase/register')
const config = require('./src/index.ts')

export default config.all
