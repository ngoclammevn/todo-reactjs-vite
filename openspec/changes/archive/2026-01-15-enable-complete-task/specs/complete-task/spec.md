## ADDED Requirements

### Requirement: Đánh dấu hoàn thành công việc
- Mỗi todo SHALL có thể được đánh dấu là hoàn thành bằng cách click vào checkbox hoặc vào toàn bộ item.
- Khi todo được đánh dấu hoàn thành, text SHALL hiển thị gạch ngang rõ ràng.
- Người dùng SHALL có thể bỏ đánh dấu để chuyển về trạng thái chưa hoàn thành bằng cách click lại vào checkbox hoặc item.

#### Scenario: Đánh dấu hoàn thành
- Khi người dùng click vào checkbox hoặc vào item, todo chuyển sang trạng thái completed, text gạch ngang.

#### Scenario: Bỏ hoàn thành
- Khi người dùng bỏ chọn checkbox hoặc click lại vào item, todo trở lại trạng thái bình thường, text không gạch ngang.

### Requirement: Lưu trạng thái completed
- Trạng thái completed SHALL được lưu trong state (và localStorage nếu có hỗ trợ).

#### Scenario: Reload trang
- Sau khi reload, trạng thái completed của todo vẫn được giữ nguyên nếu dùng localStorage.
