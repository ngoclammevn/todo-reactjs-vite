# Copilot Instructions for todo-reactjs-vite

## Project Overview
- **Framework:** React 19 + Vite (using `rolldown-vite` as Vite engine)
- **Entry Point:** `src/main.jsx` renders `App` into `#root` in `index.html`.
- **UI Root:** All UI logic starts from `src/App.jsx`.
- **Assets:** Static assets are in `src/assets/` and referenced in components.

## Key Workflows
- **Development:**
  - Start dev server: `pnpm dev` (or `npm run dev`)
  - Hot Module Replacement (HMR) is enabled by default.
- **Build:**
  - Production build: `pnpm build`
  - Preview build: `pnpm preview`
- **Linting:**
  - Run ESLint: `pnpm lint`
  - ESLint config: see `eslint.config.js` (uses flat config, React Hooks, and React Refresh plugins)

## Project Structure & Conventions
- **All source code is in `src/`**. Main files:
  - `main.jsx`: React root, imports `App.jsx` and CSS.
  - `App.jsx`: Main component, demo logic (counter, logo links).
  - `App.css`, `index.css`: Styling for app and global styles.
- **No TypeScript or test setup by default.**
- **No custom folders for features or services**—expand as needed.
- **Use functional React components and hooks.**
- **Follow ESLint rules:**
  - Unused variables starting with uppercase or underscore are ignored (`varsIgnorePattern: '^[A-Z_]'`).

## Integration & Dependencies
- **React 19** and **React DOM 19**
- **Vite** (via `rolldown-vite` for improved performance)
- **ESLint** with React-specific plugins
- **No backend or API integration by default.**

## Examples & Patterns
- **Component Import:**
  ```js
  import MyComponent from './MyComponent'
  ```
- **Asset Import:**
  ```js
  import logo from './assets/logo.svg'
  ```
- **State Management:**
  ```js
  const [count, setCount] = useState(0)
  ```

## References
- See `README.md` for Vite/React plugin details and links.
- See `eslint.config.js` for linting rules and plugin usage.

---


## Liên kết các file hướng dẫn bổ sung

**Ví dụ:**
  - [react.instructions.md](../react.instructions.md): Quy tắc bắt buộc (functional component, hooks, lint, comment, performance phải đáp ứng 1000 user < 200ms, có file test hiệu năng), quy ước đặt tên, tổ chức thư mục, best practice và ví dụ chi tiết cho ReactJS. AI agent cần đọc kỹ file này để gen code đúng chuẩn và có thể tự động tạo file test hiệu năng khi cần.
  - [api.instructions.md](../api.instructions.md): Quy tắc tích hợp và sử dụng API nội bộ hoặc bên ngoài
**Luôn cập nhật mục này khi thêm hoặc thay đổi các file hướng dẫn bổ sung.**

---
**Update this file if you add new workflows, folder conventions, or major dependencies.**
