
# ReactJS Development Guidelines

## 1. Core Principles (Quy tắc cốt lõi)

* **Tech Stack:** React 18+, **TypeScript** (Bắt buộc).
* **Component Style:** 100% Functional Components & Hooks.
* **Strict Mode:** Luôn bật `React.StrictMode` trong môi trường dev.
* **Linting & Formatting:** Tuân thủ cấu hình ESLint & Prettier của dự án. Không commit nếu còn warning/error.

## 2. Project Structure & Naming (Tổ chức & Đặt tên)

* **Cấu trúc thư mục:** Phân chia theo hướng **Feature-based** hoặc **Domain-driven**.
```text
src/
├── components/  # Shared UI components (Button, Input...)
├── hooks/       # Custom hooks (useAuth, useDebounce...)
├── features/    # Modules chức năng (Auth, Todo, Dashboard...)
│   └── Todo/
│       ├── components/
│       ├── api/
│       └── TodoList.tsx
├── utils/       # Helper functions
└── assets/
```

* **Naming:**
  * Component/Files: `PascalCase` (e.g., `TodoList.tsx`).
  * Functions/Variables: `camelCase` (e.g., `handleSubmit`).
  * Constant: `UPPER_SNAKE_CASE` (e.g., `MAX_ITEMS`).

## 3. Coding Standards (Quy chuẩn code)

* **Type Safety:**
  * Không dùng `any`. Định nghĩa `interface` hoặc `type` rõ ràng cho Props và State.

* **State Management:**
  * Ưu tiên Local State (`useState`) cho UI logic.
  * Server State (API data) phải dùng **TanStack Query** (hoặc SWR), không tự quản lý bằng `useEffect`.
  * Global Client State dùng **Zustand** hoặc **Context API** (chỉ cho state ít thay đổi như Theme/Auth).

* **Styling:**
  * Sử dụng **CSS Modules** (`styles.module.css`) hoặc **TailwindCSS** để tránh xung đột class.
  * Không import file CSS global vào component trừ file `App.tsx` hoặc `index.tsx`.

## 4. Performance & Best Practices

* **Rendering:**
  * Tránh define function/object mới bên trong render body (gây re-render con). Dùng `useCallback`/`useMemo` khi truyền props xuống component con `memo`.
  * Virtualize danh sách dài (dùng `react-window` hoặc `virtuoso`) nếu > 50 items.

* **Code Splitting:** Sử dụng `React.lazy` và `Suspense` cho các Route hoặc Component nặng.
* **Metrics (Frontend):**
  * Time to Interactive (TTI) < 1.5s.
  * Lighthouse Performance Score > 90.

## 5. Testing

* **Unit Test:** Bắt buộc với các util functions và custom hooks phức tạp (Jest/Vitest).
* **Component Test:** Kiểm tra user interaction (React Testing Library).

## Example

```tsx
// src/features/todo/TodoList.tsx
import React, { memo } from 'react';
import styles from './TodoList.module.css';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  items: TodoItem[];
  onToggle: (id: string) => void;
}

/**
 * Hiển thị danh sách công việc
 * Sử dụng memo để tránh re-render không cần thiết
 */
export const TodoList = memo(({ items, onToggle }: TodoListProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} onClick={() => onToggle(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
});

TodoList.displayName = 'TodoList';
```

---
**Cập nhật file này khi có thay đổi quy tắc hoặc quy ước.**
