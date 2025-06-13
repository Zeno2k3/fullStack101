# 🌐 Yêu Cầu Xây Dựng Trang Web Profile Cá Nhân (Chuẩn HTML5)

## ✅ I. Cấu Trúc Cơ Bản (HTML5)

- Sử dụng `<!DOCTYPE html>` để khai báo tài liệu HTML5
- Thẻ `<html lang="vi">`: đặt ngôn ngữ trang là tiếng Việt
- Phần `<head>` gồm:
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - `<title>`, `<link rel="stylesheet">`
- Phần `<body>`: chứa toàn bộ nội dung hiển thị

## ✅ II. Thẻ Ngữ Nghĩa (Semantic Tags)

| Nội dung            | Thẻ nên dùng           |
| ------------------- | ---------------------- |
| Tiêu đề, điều hướng | `<header>`, `<nav>`    |
| Giới thiệu          | `<main>`, `<section>`  |
| Dự án               | `<article>`            |
| Kỹ năng, liên hệ    | `<section>`, `<aside>` |
| Chân trang          | `<footer>`             |

### ⚠️ Lưu ý:

- Chỉ sử dụng **1 thẻ `<main>`**
- Mỗi `<section>` và `<article>` nên có tiêu đề (`<h1>` - `<h6>`)

## ✅ III. Biểu Mẫu (Forms)

### Trường thông tin phổ biến:

- Họ tên: `<input type="text">`
- Email: `<input type="email">`
- SĐT: `<input type="tel">`
- Tin nhắn: `<textarea>`
- Nút gửi: `<input type="submit">`

### Kèm theo:

- Dùng `<label>` tương ứng với mỗi input
- Áp dụng validation: `required`, `pattern`, `minlength`, `maxlength`, ...
- Sử dụng các thuộc tính ARIA: `aria-label`, `aria-required`, `aria-invalid`, ...

## ✅ IV. Liên Kết Và Tài Liệu

- Liên kết ngoài:  
  `<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>`
- Tải xuống file:  
  `<a href="cv.pdf" download>Download CV</a>`
- Favicon:  
  `<link rel="icon" href="favicon.ico">`

## ✅ V. Thuộc Tính Toàn Cục

- `id`, `class`, `title`, `tabindex`, `lang`, `data-*`
- Dùng `id` duy nhất, `class` để nhóm & tạo style

## ✅ VI. Thêm Nội Dung Đa Phương Tiện

- Ảnh đại diện:  
  `<img src="avatar.jpg" alt="Ảnh đại diện">`
- Video giới thiệu (nếu có):  
  `<video src="intro.mp4" controls poster="thumb.jpg"></video>`

## ✅ VII. SEO Cơ Bản

- `<meta name="description" content="Giới thiệu cá nhân">`
- `<meta name="author" content="Tên của bạn">`
- Alt text cho hình ảnh

## ✅ VIII. Hỗ Trợ Truy Cập (Accessibility - ARIA)

- Gắn `aria-label` nếu thiếu `<label>`
- Dùng `aria-describedby` để mô tả hướng dẫn
- Dùng `aria-invalid`, `role="alert"` khi có lỗi

---

**🎯 Gợi ý:** Bạn có thể sử dụng công cụ Lighthouse, axe DevTools, NVDA để kiểm tra tính truy cập và chuẩn HTML.
