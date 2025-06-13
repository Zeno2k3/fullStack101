# 🚀 BÀI TẬP THỰC HÀNH HTML5: XÂY DỰNG TRANG WEB PROFILE CÁ NHÂN

> 🎯 Mục tiêu: Vận dụng kiến thức HTML5 để tạo một trang web giới thiệu bản thân, có cấu trúc hợp lý, hỗ trợ truy cập và tối ưu cơ bản cho công cụ tìm kiếm.

---

## 📌 Yêu Cầu Tổng Quan

- Tạo **một file HTML duy nhất** (ví dụ: `index.html`)
- Trang phải có đầy đủ phần **đầu trang, nội dung chính, chân trang**
- Sử dụng **các thẻ semantic** phù hợp
- Có phần **biểu mẫu liên hệ**
- Bổ sung **hình ảnh**, **liên kết ngoài**, và **nội dung mô tả cá nhân**

---

## I. 📂 CẤU TRÚC CƠ BẢN

1. Tạo cấu trúc HTML5 chuẩn, bao gồm:
   - Khai báo doctype
   - Thiết lập ngôn ngữ phù hợp
   - Bộ mã ký tự và khung nhìn phù hợp trên thiết bị di động

📌 *Câu hỏi gợi ý*:
- Làm thế nào để đảm bảo trang web hiển thị tốt trên điện thoại?
- Vì sao phải dùng `<!DOCTYPE html>`?

---

## II. 🧱 THẺ NGỮ NGHĨA (SEMANTIC)

2. Chia bố cục website thành các khu vực:
   - Khu vực điều hướng
   - Nội dung giới thiệu bản thân
   - Danh sách dự án hoặc sản phẩm
   - Thông tin kỹ năng / sở thích
   - Phần liên hệ và chân trang

📌 *Thử thách*:
- Không dùng `<div>` cho toàn bộ cấu trúc.
- Lựa chọn đúng **thẻ semantic** phù hợp với từng phần.

---

## III. ✉️ FORM LIÊN HỆ

3. Tạo một **form liên hệ** với các trường:
   - Họ tên
   - Email
   - Số điện thoại
   - Nội dung tin nhắn
   - Nút gửi

🎯 Yêu cầu:
- Mỗi trường phải đi kèm `<label>`
- Có xác thực dữ liệu bằng thuộc tính HTML
- Áp dụng tối thiểu 2 thuộc tính ARIA phù hợp

📌 *Câu hỏi thêm*:
- Trường nào nên bắt buộc nhập (`required`)?
- Khi nào cần dùng `aria-label` thay vì `<label>`?

---

## IV. 🔗 LIÊN KẾT VÀ TÀI LIỆU

4. Chèn các liên kết sau:
   - Liên kết đến một trang mạng xã hội
   - Nút tải xuống CV
   - Gắn favicon

📌 *Thử thách*:
- Làm sao để mở liên kết ngoài mà vẫn đảm bảo bảo mật?
- Bạn có thể thêm thuộc tính gì để liên kết hoạt động thân thiện hơn?

---

## V. 🧩 THUỘC TÍNH TOÀN CỤC

5. Sử dụng hợp lý:
   - `id`, `class`, `title`, `lang`, `data-*`

📌 *Yêu cầu*:
- Mỗi phần chính phải có một `id` duy nhất
- Ít nhất một phần tử có sử dụng `data-*` để chứa dữ liệu tùy chỉnh

---

## VI. 🎥 NỘI DUNG ĐA PHƯƠNG TIỆN

6. Thêm:
   - Một ảnh đại diện
   - Một video giới thiệu bản thân (nếu có)

📌 *Gợi ý suy luận*:
- Nếu ảnh không hiển thị thì nội dung gì sẽ được đọc?
- Nên dùng thuộc tính gì để video hiển thị đẹp hơn?

---

## VII. 🔍 SEO CƠ BẢN

7. Thêm các thẻ meta:
   - Mô tả ngắn về bản thân
   - Tên tác giả

📌 *Tư duy mở rộng*:
- Thẻ meta nào hỗ trợ mô tả nội dung?
- Thẻ `alt` có tác dụng gì ngoài SEO?

---

## VIII. ♿ TRUY CẬP (ACCESSIBILITY)

8. Đảm bảo:
   - Người dùng sử dụng bàn phím vẫn có thể truy cập được nội dung
   - Có hỗ trợ thông báo lỗi khi điền sai form

📌 *Thử thách cuối*:
- Thêm `role="alert"` ở đâu khi cần hiển thị lỗi?
- Dùng thuộc tính nào để mô tả hướng dẫn chi tiết cho input?

---

Chúc bạn hoàn thành bài tập một cách sáng tạo và chuẩn HTML5 nhất! 🚀
