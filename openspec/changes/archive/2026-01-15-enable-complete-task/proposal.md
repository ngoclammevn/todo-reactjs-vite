# Đề xuất: Thêm tính năng hoàn thành công việc (complete task)

## Why
- Người dùng cần đánh dấu công việc đã hoàn thành để dễ quản lý.
- Trực quan hóa trạng thái hoàn thành bằng checkbox và gạch ngang text giúp trải nghiệm tốt hơn.

## What Changes
- Thêm checkbox ở đầu mỗi todo để đánh dấu hoàn thành.
- Khi todo được đánh dấu complete, text sẽ có hiệu ứng gạch ngang.
- Trạng thái complete được lưu trong state (và localStorage nếu có).

## Mục tiêu
- Đơn giản, dễ dùng, không ảnh hưởng các tính năng khác.
- UI rõ ràng, hiện đại, đồng nhất với style hiện tại.

## Phạm vi
- Sửa component TodoApp và các thành phần liên quan.
- Cập nhật spec, test, và tài liệu nếu cần.
