# CLAUDE.md

This file provides context and conventions for AI assistants working on this codebase.

## Overview

This is a personal portfolio and interactive game site for Calvin Brown, deployed to `calvinbrown.dev` via GitHub Pages. It is a single-page application (SPA) built with Lit web components and TypeScript, bundled with Vite.

## Technology Stack

- **Lit** (v3.x) — Web Components framework with reactive templating and decorators
- **TypeScript** (~5.x, strict mode) — all source files are TypeScript
- **Vite** — dev server and build tool
- **pnpm** — package manager (use `pnpm`, not `npm` or `yarn`)
- No backend; the site is fully static and hosted on GitHub Pages

## Project Structure

```
src/
  my-element.ts        # Main SPA component: layout, routing, hero, blog
  blog-posts.ts        # Blog post data (add new posts here)
  snake-game.ts        # Snake game component
  solitaire-game.ts    # Solitaire card game component
  tic-tac-toe-game.ts  # Tic Tac Toe with AI opponent
  checkers-game.ts     # Checkers with AI opponent
  connect-four-game.ts # Connect Four with AI opponent
  flappy-bird-game.ts  # Flappy Bird game component
  goodreads-shelf.ts   # Goodreads reading list integration
  index.css            # Global styles (minimal; most styles are scoped)
  calvin-headshot.jpg  # Profile photo
index.html             # Entry point HTML
public/                # Static assets (copied as-is to dist/)
dist/                  # Build output — committed to repo (CI does NOT rebuild)
.github/workflows/static.yml  # GitHub Pages deployment workflow
```

## Development Commands

```bash
pnpm dev        # Start dev server with HMR (runs: vite)
pnpm build      # Type-check + production build (runs: tsc && vite build)
pnpm preview    # Serve the dist/ folder locally
```

## Deployment

- **Branch:** `master` triggers GitHub Actions deployment
- **CI step:** The workflow uploads `dist/` directly — it does **not** run `pnpm build`
- **Consequence:** You must run `pnpm build` locally and **commit the `dist/` folder** before pushing to `master` for changes to appear on the live site

## Code Conventions

### Lit Components

- One component per file, file name matches component purpose (`{feature}-game.ts`)
- Register components with `@customElement('kebab-case-name')`
- Use `@state()` for internal reactive state, `@property()` for inputs
- Use `static styles = css\`...\`` for scoped component CSS
- Lifecycle: `connectedCallback()` / `disconnectedCallback()` for setup/teardown

### Naming

- Classes: `PascalCase` (e.g., `SnakeGame`, `MyElement`)
- Methods and properties: `camelCase`
- Private methods: prefixed with underscore (`_handleKeydown`)
- Constants: `SCREAMING_SNAKE_CASE` (e.g., `GRID_SIZE`, `GAME_SPEED`)
- Custom element tags: `kebab-case` matching the file name

### TypeScript

- Strict mode is on: all types must be explicit, no unused locals/params
- Interfaces for data shapes are defined per-file
- `experimentalDecorators` is enabled (required for Lit decorators)
- `noUnusedLocals` and `noUnusedParameters` are enforced — remove unused code

### Routing

Navigation is hash-based (no server-side routing required):

| Hash | View |
|------|------|
| `#` | Home |
| `#games` | Games hub |
| `#games/snake` | Snake game |
| `#games/solitaire` | Solitaire |
| `#games/tictactoe` | Tic Tac Toe |
| `#games/checkers` | Checkers |
| `#games/connectfour` | Connect Four |
| `#games/flappybird` | Flappy Bird |
| `#now` | Reading / Now page |
| `#{postId}` | Individual blog post |

Routing logic lives in `src/my-element.ts`.

### State Management

- Component-local state via Lit `@state()` — no global store
- `localStorage` for persistence across sessions (high scores, game state)
- URL hash for navigation state

### Styling

- Most CSS is scoped inside each component via `static styles = css\`...\``
- Global styles in `src/index.css` are minimal
- Use CSS custom properties for theming
- Dark mode via `prefers-color-scheme` media query
- Responsive layouts use CSS Grid

## Adding Content

### New Blog Post

Edit `src/blog-posts.ts` and add an entry to the array:

```ts
{
  id: 'unique-post-id',          // Used as URL hash
  title: 'Post Title',
  date: 'Month DD, YYYY',
  summary: 'One-line summary for the card view',
  content: html`<p>Full HTML content here...</p>`,
}
```

### New Game

1. Create `src/{game-name}-game.ts` extending `LitElement`
2. Register with `@customElement('{game-name}-game')`
3. Add a route hash in the routing logic in `my-element.ts`
4. Add an entry card in the games hub view in `my-element.ts`
5. Import the new file in `index.html` or the main component

## Testing

There is currently no test framework. Manual testing via `pnpm dev` is the workflow. The TypeScript compiler (`tsc`) serves as the primary correctness check.

## Custom Domain

`CNAME` contains `calvinbrown.dev` — do not delete or modify this file.
