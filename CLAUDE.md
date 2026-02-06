# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run build          # Generate types then bundle (typegen + tsdown)
pnpm run build:typegen  # Regenerate src/typegen.ts from all presets
pnpm run lint           # Lint with zero warnings tolerance
pnpm run lint:fix       # Lint and auto-fix
pnpm run typecheck      # Type-check with tsgo
pnpm run dev            # Launch eslint-config-inspector for live testing
```

After modifying any config in `src/configs/`, run `pnpm run build` to regenerate `src/typegen.ts` (type definitions derived from all preset configs).

## Architecture

This is a composable ESLint flat config library. The main export is the `sxzz()` function which returns a `FlatConfigComposer` from `eslint-flat-config-utils`.

### Config modules (`src/configs/*.ts`)

Each file exports a function returning `Config[]`. Configs are named with the `sxzz/` prefix (e.g., `sxzz/typescript`). All configs are re-exported through `src/configs/index.ts`.

### Two-tier plugin model

- **Bundled plugins** (in `dependencies`): always available, statically imported in `src/plugins.ts` (e.g., `eslint-plugin-vue`, `typescript-eslint`)
- **Optional plugins** (in `peerDependencies` with `optional: true`): user must install themselves. These use **dynamic `import()`** in their config file (e.g., `src/configs/astro.ts`, `src/configs/unocss.ts`)

### Auto-detection (`src/env.ts`)

Uses `isPackageExists()` to detect frameworks (Vue, Astro, UnoCSS, TypeScript) and auto-enable their configs in `sxzz()`.

### Presets (`src/presets.ts`)

Composable preset functions build on each other: `presetJavaScript` → `presetBasic` → `presetAll`. The `sxzz()` function is the main entry point, accepting an `Options` object to toggle features.

### Type generation (`scripts/typegen.ts`)

Runs `presetAll()`, feeds all configs to `eslint-typegen`, and writes `src/typegen.ts`. This provides typed rule names and config names. The generated file is committed to the repo.

### Dependency versions (`pnpm-workspace.yaml`)

All plugin/parser/dev dependency versions are managed via pnpm catalogs (`catalog:plugins`, `catalog:parsers`, `catalog:dev`).

## Adding a new config

1. Create `src/configs/<name>.ts` exporting a function returning `Config[]`
2. For bundled plugins: add static import to `src/plugins.ts`, add dependency to `package.json` and catalog
3. For optional plugins: use dynamic `import()` in the config (see `unocss.ts` or `astro.ts` as examples), add as optional `peerDependency` and `devDependency`
4. Export from `src/configs/index.ts` (keep sorted)
5. If auto-detected: add detection to `src/env.ts`, wire into `src/presets.ts` Options + `sxzz()` function
6. Add to `presetAll()` if it should be included in the full preset
7. Run `pnpm run build` to regenerate types
