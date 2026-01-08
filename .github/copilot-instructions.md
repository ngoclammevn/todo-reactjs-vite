# Copilot Instructions for todo-reactjs-vite

## Project Overview
This is a minimal React + Vite project for a todo application. The architecture is simple and modular, with all source code in the `src/` directory. The project uses Vite for fast development and builds, and ESLint for code quality.

## Key Files & Structure
- `src/App.jsx`: Main React component, entry point for UI logic.
- `src/main.jsx`: Application bootstrap, renders `App` to the DOM.
- `src/assets/`: Static assets (images, icons, etc.).
- `App.css`, `index.css`: Global and component styles.
- `vite.config.js`: Vite configuration (customize build/dev settings here).
- `eslint.config.js`: ESLint rules (extend for custom linting).

## Developer Workflows
- **Start Dev Server:** `npm run dev` (hot reload, Vite-powered)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint config)

## Patterns & Conventions
- Use functional React components and hooks (no class components).
- Keep UI logic in `App.jsx`; split into more components as app grows.
- Styles are managed via CSS files in `src/`.
- No TypeScript by default; add if needed and update configs.
- No backend/API integration in base template; add fetch logic in `src/` if needed.

## External Dependencies
- React, ReactDOM (see `package.json`)
- Vite (build/dev tooling)
- ESLint (linting)

## Tips for AI Agents
- When adding features, create new components in `src/` and import them in `App.jsx`.
- Follow the existing import and file organization patterns.
- Update `vite.config.js` for build or plugin changes.
- Reference `README.md` for official plugin usage and setup notes.
- Use `npm` scripts for all build/lint/dev tasks.

## Example: Adding a Todo Component
1. Create `src/Todo.jsx` with a functional component.
2. Import and use it in `App.jsx`.
3. Style with a new CSS file or reuse existing styles.

---
For more details, see the [Vite React documentation](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) and [React docs](https://react.dev/).
