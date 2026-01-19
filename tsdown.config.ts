import { RequireCJS } from 'rolldown-plugin-require-cjs'
import { nodeLib } from 'tsdown-preset-sxzz'

export default nodeLib(
  {},
  {
    plugins: [RequireCJS()],
  },
)
