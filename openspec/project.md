# Project Context

## Purpose
A simple, modern Todo application to manage tasks, built for learning and demonstration purposes.

## Tech Stack
- React (with JSX)
- Vite (build tool)
- JavaScript (ES6+)
- CSS (with modular styles)
- Node.js (for development tooling)

## Project Conventions

### Code Style
- Use Prettier and ESLint for formatting and linting
- 2-space indentation
- CamelCase for variables and functions
- PascalCase for React components
- Functional components and hooks preferred

### Architecture Patterns
- Component-based structure (React)
- State managed locally in components (no global state manager)
- CSS Modules for component styles

### Testing Strategy
- (If tests are present) Use Jest and React Testing Library
- Focus on unit and component tests
- Manual testing for UI/UX

### Git Workflow
- Feature branches from main
- Conventional commit messages (e.g., feat:, fix:, chore:)
- Pull requests for all changes

## Domain Context
- Task = { id, text, completed }
- Users can add, toggle, and remove todos

## Important Constraints
- No backend; all data is in-memory
- Must run in modern browsers
- Keep dependencies minimal

## External Dependencies
- None required for core app; only dev dependencies (Vite, ESLint, Prettier, etc.)
