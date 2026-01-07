# Copilot Instructions for Todo React+Vite Codebase

## Project Overview
- Single-page Todo app built with React (JSX), Vite, and Tailwind CSS.
- All UI and logic are in `src/TodoApp.jsx` and `src/App.jsx`.
- Styling uses Tailwind utility classes only; no custom CSS except for Tailwind config.
- Lucide-react is used for icons (see `src/TodoApp.jsx`).
- Confirm-delete popup implemented as a modal overlay in `src/TodoApp.jsx`.

## Architecture & Patterns
- Flat component structure: `TodoApp` is the main logic/UI, imported by `App.jsx`.
- State managed via React hooks (`useState`).
- No context, Redux, or external state libraries.
- All todos are stored in local component state.
- Modal overlays use Tailwind for centering and background.
- Accessibility: Buttons have `aria-label`, modals use `role="dialog"` and `aria-modal="true"`.

## OpenSpec-Driven Workflow
- All major changes (features, UI, architecture) require an OpenSpec proposal:
  - Create under `openspec/changes/<change-id>/` with `proposal.md`, `tasks.md`, and `specs/<capability>/spec.md`.
  - Use delta headers (`## ADDED|MODIFIED|REMOVED Requirements`) and at least one `#### Scenario:` per requirement.
  - Validate with `openspec validate <change-id> --strict` before implementation.
- Minor fixes (typos, formatting, bugfixes) do not require proposals.

## Developer Workflows
- Install: `npm install`
- Run dev server: `npm run dev` (Vite, port 5173)
- Lint: `npm run lint` (ESLint config in `eslint.config.js`)
- No test suite present; manual validation only.
- All code changes should be documented in OpenSpec and reflected in `CHANGELOG.md`.

## Conventions & Integration
- Use Tailwind classes for all layout, spacing, colors, and responsiveness.
- Use Lucide icons for UI actions (import from `lucide-react`).
- Confirm-delete modal message is spec-driven; update only via OpenSpec change.
- All new features/components must be spec'd before coding.
- Reference `openspec/AGENTS.md` for authoritative spec and proposal format.

## Key Files & Directories
- `src/TodoApp.jsx`: Main app logic, UI, modal, icons
- `src/App.jsx`: App wrapper, layout
- `src/index.css`: Tailwind import only
- `openspec/AGENTS.md`: Spec-driven workflow instructions
- `openspec/changes/`: All proposals, tasks, and spec deltas
- `CHANGELOG.md`: Summary of all OpenSpec-driven changes

## Example Patterns
- Modal overlay:
  ```jsx
  {confirmId !== null && (
    <div className="fixed inset-0 ..." role="dialog" aria-modal="true">...</div>
  )}
  ```
- Icon usage:
  ```jsx
  import { Trash2 } from "lucide-react";
  <Trash2 size={20} />
  ```
- Tailwind for layout:
  ```jsx
  <div className="flex items-center justify-center ...">...</div>
  ```

## References
- For planning/spec: See `openspec/AGENTS.md` and proposal/task/spec examples in `openspec/changes/`
- For build/dev: See `README.md` for commands and setup
- For UI conventions: See `src/TodoApp.jsx` and Tailwind docs
