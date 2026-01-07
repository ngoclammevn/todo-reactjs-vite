---
applyTo: "**/*.tsx, **/*.jsx"
---
# ReactJS Architecture & Style Guidelines

## 1. Core Principles
- **Functional Components Only:** Never use Class Components.
- **Hooks:** Use built-in hooks (`useState`, `useEffect`) and custom hooks. adhere strictly to the "Rules of Hooks".
- **Immutability:** Never mutate state directly. Use the spread operator `...` or libraries like `immer` if configured.
- **Strict TypeScript:** Use `React.FC<Props>` is discouraged in modern React; instead, type the props argument directly: `const MyComponent = ({ prop }: Props) => ...`.

## 2. Naming Conventions
- **Components:** `PascalCase` (e.g., `SubmitButton.tsx`). The filename must match the component name.
- **Hooks:** `camelCase` starting with `use` (e.g., `useFetchData.ts`).
- **Props:**
  - Boolean props should look like questions or states (e.g., `isLoading`, `hasError`, `canEdit`).
  - Handler props should use `on` prefix (e.g., `onClick`, `onSubmit`).
- **Constants within Components:** `UPPER_SNAKE_CASE` is generally avoided inside components; use `camelCase` for derived values.

## 3. Component Structure
- **Order of Operations:**
  1.  Hooks (State, Context, Refs, Custom Hooks).
  2.  Derived state/variables.
  3.  `useEffect` side effects.
  4.  Event Handlers (wrapped in `useCallback` if passed to children).
  5.  Render (return statement).
- **Early Returns:** Use guard clauses to return `null` or Loading/Error states early, reducing nesting in the main render.

## 4. Path-Specific Scope

### Files in `**/components/ui/` or `**/common/`
- **Role:** Pure "Presentational" components.
- **Constraints:**
  - No side effects (no API calls).
  - Receive data strictly via Props.
  - Must include proper accessibility attributes (ARIA roles) if interactive.
  - Styling: Use Tailwind utility classes or CSS Modules.

### Files in `**/features/**` or `**/pages/`
- **Role:** "Container" or "Smart" components.
- **Tasks:**
  - Fetch data (using React Query/SWR or `useEffect`).
  - Manage complex local state.
  - Compose UI components.
- **Constraints:** Keep JSX clean. Extract complex logic into custom hooks.

### Files in `**/hooks/`
- **Role:** Reusable logic extraction.
- **Constraints:**
  - MUST return a consistent interface (object or tuple).
  - MUST include strict dependency arrays for internal `useEffect`/`useCallback`.
  - Prefix file with `use`.

### Files in `**/context/`
- **Role:** Global state management.
- **Constraints:** always export a custom hook to consume the context (e.g., `useTheme()`) rather than exporting the Context object directly.

## 5. Performance & Best Practices
- **Dependency Arrays:** Be exhaustive. Never suppress `react-hooks/exhaustive-deps` warning without a documented reason.
- **Memoization:**
  - Use `useMemo` for expensive calculations.
  - Use `useCallback` for functions passed as props to memoized child components.
  - Do NOT optimize prematurely.
- **Inline Functions:** Avoid defining heavy inline functions inside JSX props.

## 6. Accessibility (A11y) - Mandatory
- Always use semantic HTML (`<button>` not `<div onClick>`).
- If a non-interactive element needs a click handler, ensure it has `role="button"` and `tabIndex`.
- Forms must have explicitly linked labels (`htmlFor` matches input `id`).