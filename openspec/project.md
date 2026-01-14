# Project Context

## Purpose
Ứng dụng quản lý công việc (todo-list) với giao diện hiện đại, hỗ trợ phân loại, xác nhận xóa, và các tính năng mở rộng theo đặc tả. Dùng để thực hành, thử nghiệm và trình diễn các kỹ thuật React hiện đại, tích hợp với Vite để tối ưu hiệu năng phát triển.

## Tech Stack
- React (JavaScript, JSX)
- Vite (bundler, dev server)
- ESLint (linting)
- (Tùy chọn) Material UI hoặc các thư viện UI hiện đại khác
- Node.js (cho môi trường phát triển)

## Project Conventions

### Code Style
- Sử dụng ESLint với cấu hình mặc định hoặc tùy chỉnh (xem eslint.config.js)
- Đặt tên biến, hàm, component theo camelCase (biến, hàm) và PascalCase (component)
- Sử dụng functional component, hook (useState, useEffect, ...)
- Ưu tiên destructuring, arrow function, và các cú pháp ES6+
- CSS module hoặc file CSS riêng cho từng component (App.css, index.css)

### Architecture Patterns
- Component-based architecture (chia nhỏ UI thành các component độc lập, tái sử dụng)
- State management chủ yếu qua hook nội bộ (useState, useReducer), có thể mở rộng sang context nếu cần
- Tách biệt rõ ràng giữa logic và UI
- Thư mục src/ chứa toàn bộ mã nguồn chính, assets/ cho tài nguyên tĩnh

### Testing Strategy
- (Chưa có test tự động, có thể bổ sung sau)
- Đề xuất sử dụng Jest + React Testing Library cho unit test và component test
- Kiểm thử thủ công qua giao diện người dùng

### Git Workflow
- Nhánh chính: main
- Tính năng mới, bugfix: tạo branch riêng (feature/..., fix/...)
- Commit message theo dạng: <type>(scope): <message> (ví dụ: feat(todo): thêm chức năng xóa)
- Pull request trước khi merge vào main

## Domain Context
Todo-list app với các tính năng: thêm, sửa, xóa, phân loại công việc, xác nhận khi xóa, popup xác nhận, checklist, v.v. Có thể mở rộng theo đặc tả trong thư mục specs/.

## Important Constraints
- Ưu tiên hiệu năng phát triển (hot reload, build nhanh)
- Không phụ thuộc backend, chỉ lưu trữ local (localStorage hoặc state)
- Code phải dễ đọc, dễ bảo trì, dễ mở rộng

## External Dependencies
- (Tùy chọn) Material UI hoặc các thư viện UI khác nếu cần giao diện nâng cao
- Không tích hợp API ngoài hoặc backend ở giai đoạn hiện tại
