# Repository Guidelines

## Project Structure & Module Organization

This package publishes the `@sxzz/eslint-config` flat ESLint configuration. Source lives in `src/`: `index.ts` is the public entry point, `presets.ts` composes presets, and `configs/` contains focused configuration modules (for example, `typescript.ts`, `vue.ts`, and `jsonc.ts`). Shared helpers and types are in `utils.ts`, `globs.ts`, and `types.ts`. `src/typegen.ts` is generated; update it through the type-generation command rather than editing it directly. Build settings are in `tsdown.config.ts`; repository lint rules are in `eslint.config.ts`.

## Build, Test, and Development Commands

Use pnpm (the repository pins pnpm 12.5.0).

- `pnpm install` installs dependencies.
- `pnpm build` generates types and bundles `dist/` with tsdown.
- `pnpm build:typegen` regenerates `src/typegen.ts` after public API changes.
- `pnpm lint` runs ESLint with zero warnings allowed; `pnpm lint:fix` applies safe fixes.
- `pnpm typecheck` runs the native TypeScript checker without emitting files.
- `pnpm format` formats the repository with the shared Prettier configuration.
- `pnpm dev` launches the ESLint Config Inspector for manual configuration checks.

## Coding Style & Naming Conventions

Write strict ESM TypeScript using the existing project formatting: two-space indentation, single quotes, no semicolons, and trailing commas where Prettier applies them. Use lowercase kebab-free filenames that match the config subject, such as `src/configs/regexp.ts`. Keep configuration modules narrowly scoped and export named presets or helpers consistently with neighboring files. Do not hand-edit generated `src/typegen.ts`.

## Testing Guidelines

There is currently no automated test suite: `pnpm test` prints `Skip`. Validate changes with `pnpm lint`, `pnpm typecheck`, and `pnpm build`. For rule or preset changes, also use `pnpm dev` or the inspector build to verify representative JavaScript, TypeScript, Vue, Astro, and data-file behavior as applicable.

## Commit & Pull Request Guidelines

Follow the Conventional Commits style used in history: `feat: add ...`, `fix: disable ...`, `refactor: ...`, or `chore: upgrade deps`. Keep commits focused; use an imperative, concise subject and include an issue/PR reference when relevant (for example, `fix: correct rule default (#178)`).

Pull requests should explain the user-visible config or rule change, identify affected presets and optional integrations, and list validation commands run. Include before/after lint output or Inspector screenshots when a behavioral change is easiest to review visually.
