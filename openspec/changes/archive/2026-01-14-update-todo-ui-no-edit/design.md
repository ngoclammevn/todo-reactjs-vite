# Design reasoning: update-todo-ui-no-edit

## Kiến trúc đề xuất
- Không còn state hoặc UI liên quan đến sửa todo.
- Sử dụng TailwindCSS để responsive, max-w-3xl hoặc max-w-[900px] cho main container.
- Popup xác nhận xóa chỉ hiển thị nội dung mới, không thay đổi logic xác nhận.

## Trade-off
- Đơn giản hóa code, giảm bug liên quan edit.
- Responsive tốt hơn, dễ mở rộng UI về sau.
