# Bài Tập: Xây Dựng Trang "Hồ Sơ Cá Nhân Tối Giản" Với HTML5

## 🎯 Mục tiêu
Tạo một trang web hồ sơ cá nhân đơn giản nhưng có cấu trúc rõ ràng và sử dụng các thẻ ngữ nghĩa (semantic tags) của HTML5, cùng với một số tính năng đa phương tiện và biểu mẫu cơ bản.

## 📋 Yêu cầu chi tiết

### 1. Cấu trúc chung của trang
- ✅ Sử dụng thẻ `<!DOCTYPE html>` để khai báo HTML5
- ✅ Phần `<head>` phải có `charset` và `title`
- ✅ Phần `<body>` sẽ chứa toàn bộ nội dung hiển thị

### 2. Phần đầu trang (Header)
- ✅ Sử dụng thẻ `<header>`
- ✅ Bên trong header, có một tiêu đề chính giới thiệu về bạn
  - Ví dụ: `<h1>Tên Của Bạn - Hồ Sơ Cá Nhân</h1>`
- ✅ Có một đoạn văn giới thiệu ngắn gọn (sử dụng `<p>`)

### 3. Thanh điều hướng (Navigation)
- ✅ Sử dụng thẻ `<nav>`
- ✅ Bên trong nav, tạo một danh sách không có thứ tự (`<ul>`) với các mục điều hướng:
  - "Về tôi"
  - "Kỹ năng" 
  - "Dự án"
  - "Liên hệ"
- ✅ Sử dụng thẻ `<a>` cho các liên kết và trỏ đến các ID tương ứng trong trang
  - Ví dụ: `<a href="#ve-toi">Về tôi</a>`

### 4. Các phần nội dung chính (Sections)

#### 4.1 Phần "Về tôi"
- ✅ Sử dụng thẻ `<section>` với `id="ve-toi"`
- ✅ Có một tiêu đề cấp 2: `<h2>Về tôi</h2>`
- ✅ Một đoạn văn giới thiệu chi tiết hơn về bản thân, sở thích, mục tiêu
- ✅ Sử dụng thẻ `<blockquote>` để trích dẫn một câu nói yêu thích

#### 4.2 Phần "Kỹ năng"
- ✅ Sử dụng thẻ `<section>` với `id="ky-nang"`
- ✅ Có một tiêu đề cấp 2: `<h2>Kỹ năng</h2>`
- ✅ Liệt kê các kỹ năng dưới dạng danh sách không có thứ tự (`<ul>`) hoặc có thứ tự (`<ol>`)
- ✅ Ví dụ: "HTML5", "CSS3", "JavaScript", "Python", v.v.

#### 4.3 Phần "Dự án" (Sử dụng `<article>`)
- ✅ Sử dụng thẻ `<section>` với `id="du-an"`
- ✅ Có một tiêu đề cấp 2: `<h2>Dự án</h2>`
- ✅ Bên trong phần này, tạo ít nhất 2 `<article>` riêng biệt
- ✅ Mỗi `<article>` phải có:
  - Tiêu đề dự án (`<h3>`)
  - Mô tả ngắn gọn về dự án (`<p>`)
  - Một liên kết đến dự án (nếu có) hoặc hình ảnh đại diện (sử dụng `<a>` và `<img>`)

#### 4.4 Phần "Liên hệ"
- ✅ Sử dụng thẻ `<section>` với `id="lien-he"`
- ✅ Có một tiêu đề cấp 2: `<h2>Liên hệ</h2>`
- ✅ Tạo một biểu mẫu liên hệ đơn giản (`<form>`) với các trường:
  - Tên (`<label>` và `<input type="text">`)
  - Email (`<label>` và `<input type="email">`)
  - Tin nhắn (`<label>` và `<textarea>`)
  - Một nút gửi (`<input type="submit">`)
- ✅ Thêm thuộc tính HTML5 cho input:
  - `placeholder`
  - `required` cho Email

### 5. Phần chân trang (Footer)
- ✅ Sử dụng thẻ `<footer>`
- ✅ Bên trong footer, có thông tin bản quyền hoặc liên hệ cơ bản
  - Ví dụ: `&copy; 2025 Tên Của Bạn`
- ✅ Sử dụng `<small>` để hiển thị văn bản bản quyền nhỏ hơn

### 6. Sử dụng đa phương tiện (Media)
- ✅ **Video**: Trong phần "Về tôi" hoặc một phần mới, nhúng một video ngắn (có thể là video mẫu) sử dụng thẻ `<video>`
  - Đặt thuộc tính `controls` để hiển thị điều khiển phát lại
- ✅ **Audio**: Trong phần "Kỹ năng" hoặc một phần mới, nhúng một đoạn âm thanh ngắn (có thể là âm thanh mẫu) sử dụng thẻ `<audio>`
  - Đặt thuộc tính `controls`

## 🔧 Công nghệ sử dụng
- HTML5
- Semantic Tags
- Forms
- Media Elements (Video, Audio)

## 📂 Cấu trúc file
```
project/
├── index.html
├── media/
│   ├── video-sample.mp4
│   └── audio-sample.mp3
└── images/
    └── project-screenshots/
```

## 🚀 Hướng dẫn thực hiện
1. Tạo file `index.html`
2. Thiết lập cấu trúc HTML5 cơ bản
3. Thêm từng phần theo thứ tự yêu cầu
4. Kiểm tra tính hợp lệ của HTML
5. Test các chức năng form và media

## ✨ Điểm cần lưu ý
- Sử dụng đúng semantic tags để tăng tính accessibility
- Đảm bảo form validation hoạt động
- Kiểm tra media files có thể phát được
- Sử dụng ID và href phù hợp cho navigation
- Đảm bảo cấu trúc HTML hợp lệ

## 🎓 Kỹ năng học được
- HTML5 semantic structure
- Form handling và validation
- Media embedding
- Navigation với anchor links
- Accessibility best practices