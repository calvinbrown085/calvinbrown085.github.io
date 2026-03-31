# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio and interactive game site for Calvin Brown, deployed to `calvinbrown.dev` via GitHub Pages. Single-page application (SPA) built with Lit web components and TypeScript, bundled with Vite. No backend — fully static.

## Technology Stack

- **Lit** (v3.x) — Web Components with reactive templating and decorators
- **TypeScript** (~5.x, strict mode)
- **Vite** — dev server and build tool
- **pnpm** — package manager (use `pnpm`, not `npm` or `yarn`)

## Development Commands

```bash
pnpm dev        # Start dev server with HMR
pnpm build      # Type-check + production build (tsc && vite build)
pnpm preview    # Serve dist/ locally
```

There is no test framework — `tsc` is the primary correctness check.

## Deployment

- **Branch:** `master` triggers GitHub Actions deployment
- **CI does NOT run `pnpm build`** — it uploads `dist/` directly
- **You must run `pnpm build` and commit `dist/`** before pushing to `master` for changes to go live

## Project Structure

```
src/
  my-element.ts        # Main SPA: routing, layout, hero, blog, games hub
  blog-posts.ts        # Blog post data
  *-game.ts            # One file per game (snake, solitaire, tic-tac-toe,
                       #   checkers, connect-four, flappy-bird, tetris)
  goodreads-shelf.ts   # Goodreads reading list
  index.css            # Minimal global styles (most CSS is component-scoped)
index.html             # Entry point
public/                # Static assets copied as-is to dist/
dist/                  # Build output — committed to repo
CNAME                  # calvinbrown.dev — do not modify
```

## Code Conventions

### Lit Components

- One component per file; file name matches purpose (`{feature}-game.ts`)
- Register with `@customElement('kebab-case-name')`
- `@state()` for internal reactive state; `@property()` for public inputs
- `static styles = css\`...\`` for scoped CSS
- `connectedCallback()` / `disconnectedCallback()` for setup/teardown (event listeners, timers, animation loops)

### Naming

- Classes: `PascalCase` — Methods/props: `camelCase` — Private methods: `_prefixedWithUnderscore`
- Constants: `SCREAMING_SNAKE_CASE`
- Custom element tags: `kebab-case` matching the file name

### TypeScript

- Strict mode + `noUnusedLocals` + `noUnusedParameters` — remove unused code rather than suppressing
- `experimentalDecorators` enabled (required for Lit)
- Define interfaces per-file for data shapes

### Canvas-based Games

Games that need smooth animation (e.g. Tetris, Flappy Bird) use a Canvas element rendered via `requestAnimationFrame`. The pattern is:
- Non-reactive private fields for game state (`_board`, `_activePiece`, etc.)
- `@state()` only for values that need to update the DOM panel (score, level, gameState)
- Resolve canvas refs via `this.renderRoot.querySelector(...)` in `updated()` or lazily in the rAF loop
- Stop rAF and intervals in `disconnectedCallback()`

### Routing

Hash-based navigation — all logic in `src/my-element.ts`:

| Hash | View |
|------|------|
| `#` | Home |
| `#games` | Games hub |
| `#games/snake` | Snake |
| `#games/solitaire` | Solitaire |
| `#games/tictactoe` | Tic Tac Toe |
| `#games/checkers` | Checkers |
| `#games/connectfour` | Connect Four |
| `#games/flappybird` | Flappy Bird |
| `#games/tetris` | Tetris |
| `#now` | Reading / Now page |
| `#blog` | Blog list |
| `#blog/{postId}` | Blog post |

### State Management

- Component-local state via `@state()` — no global store
- `localStorage` for cross-session persistence (high scores)
- URL hash for navigation state

### Styling

- Component CSS via `static styles = css\`...\``
- Dark mode via `prefers-color-scheme` media query in each component
- Responsive layouts with CSS Grid/Flexbox

## Adding a New Game

1. Create `src/{name}-game.ts` extending `LitElement`, register with `@customElement('{name}-game')`
2. Import it in `src/my-element.ts`
3. Add `'game-{name}'` to the `ViewType` union
4. Add a hash check block in `_checkUrlHash()` for `games/{name}`
5. Add a `case 'game-{name}'` in the `render()` switch
6. Add the element render inside `_renderGamePage()` (`${gameId === '{name}' ? html\`<{name}-game>\` : ''}`)
7. Add an entry to the `games` array for the hub card

## Adding a New Blog Post

Edit `src/blog-posts.ts`:

```ts
{
  id: 'unique-post-id',     // becomes URL hash #blog/unique-post-id
  title: 'Post Title',
  date: 'Month DD, YYYY',
  summary: 'One-line summary shown on the card',
  content: html`<p>Full HTML content...</p>`,
}
```
