# Design reasoning: enable-todo-crud-confirm

## Kiến trúc đề xuất
- State todo quản lý bằng useState/useReducer.
- Mỗi todo là một object: { id, text, editing }.
- Sửa todo: click vào icon hoặc double click, chuyển sang input, lưu khi blur hoặc enter.
- Xóa todo: nhấn nút xóa, hiện popup xác nhận, chỉ xóa khi xác nhận.
- Modal xác nhận có thể dùng portal hoặc render inline, style theo Google/Material.

## Trade-off
- Đơn giản hóa logic, không dùng context/global state.
- Modal xác nhận chỉ cho xóa, không cho các thao tác khác.
