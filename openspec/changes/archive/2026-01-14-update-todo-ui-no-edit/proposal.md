# Đề xuất: Loại bỏ chức năng sửa todo, nâng cấp responsive UI và thay đổi nội dung popup xác nhận xóa

## Why
- Đơn giản hóa trải nghiệm người dùng, tránh thao tác ngoài ý muốn.
- Đáp ứng yêu cầu UI hiện đại, responsive tốt trên mọi thiết bị.
- Nội dung popup xác nhận rõ ràng, thân thiện hơn.

## What Changes
- Loại bỏ hoàn toàn chức năng sửa todo.
- Giao diện responsive, chiều rộng tối đa 900px trên PC.
- Thay đổi nội dung popup xác nhận xóa thành: "Bạn có chắc muốn xóa todo này không?"

## Mục tiêu
- Đảm bảo todo app chỉ cho phép thêm và xóa.
- UI đẹp, dễ dùng, phù hợp mobile/PC.
- Popup xác nhận xóa rõ ràng, đúng yêu cầu.

## Phạm vi
- Sửa component TodoApp và các thành phần liên quan.
- Cập nhật style responsive, max-width.
- Thay đổi logic và nội dung popup xác nhận xóa.

## Liên kết spec, task, design
- Xem tasks.md, design.md (nếu có), và spec delta trong specs/.