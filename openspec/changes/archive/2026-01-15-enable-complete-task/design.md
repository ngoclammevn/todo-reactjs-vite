# Design reasoning: enable-complete-task

## Kiến trúc đề xuất
- Thêm thuộc tính `completed` (boolean) vào mỗi todo trong state.
- Checkbox ở đầu mỗi todo sẽ toggle giá trị này.
- Khi completed=true, áp dụng class gạch ngang (line-through) cho text.
- (Tùy chọn) Sử dụng useEffect để đồng bộ todos với localStorage.

## Trade-off
- Đơn giản, không ảnh hưởng logic thêm/xóa hiện tại.
- Có thể mở rộng cho filter (hiện/ẩn completed) về sau.
- Nếu không dùng localStorage, trạng thái sẽ mất khi reload.

## UI/UX
- Checkbox rõ ràng, dễ bấm, đồng nhất style.
- Gạch ngang text dùng Tailwind (`line-through`).
