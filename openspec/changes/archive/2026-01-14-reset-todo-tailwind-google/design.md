# Design reasoning: reset-todo-tailwind-google

## Kiến trúc đề xuất
- Sử dụng component-based, chia nhỏ UI thành các block Todo, Header, List, Item, v.v.
- TailwindCSS cho style, ưu tiên utility-first, dễ tuỳ biến.
- Lucide icon dùng cho các nút thao tác (thêm, xóa, hoàn thành, v.v.).
- UI lấy cảm hứng Google: spacing rộng, màu sáng, bo góc, shadow nhẹ, font sans-serif.

## Trade-off
- Tailwind giúp dev nhanh, nhưng cần chú ý tránh lạm dụng class trùng lặp.
- Lucide icon nhẹ, dễ dùng, nhưng cần chọn icon phù hợp với ngữ cảnh Todo.
- Reset codebase giúp sạch sẽ, nhưng cần backup nếu có dữ liệu cần giữ lại.
