# TÀI LIỆU YÊU CẦU DỰ ÁN (SPECIFICATION & REQUIREMENTS)
## DỰ ÁN WEBSITE: NGỦ ẤM Ở ĐÀ LẠT
**Mã hồ sơ**: `DN0029`  
**Ngày tiếp nhận**: 02/10/2026  
**Sale phụ trách**: Khánh Duy  
**Người liên hệ khách hàng**: Phạm Hồ Quỳnh Trang  
**Hotline / Zalo liên hệ**: `091 1942968`  
**Trạng thái**: Tiếp nhận yêu cầu & Triển khai Demo

---

## 1. THÔNG TIN DOANH NGHIỆP & TỔNG QUAN DỰ ÁN

| Thuộc tính | Chi tiết | Ghi chú |
| :--- | :--- | :--- |
| **Tên doanh nghiệp / Thương hiệu** | **Ngủ Ấm Ở Đà Lạt** | Tên chính thức hiển thị trên toàn bộ website, logo và văn bản |
| **Lĩnh vực hoạt động** | Du lịch / Lưu trú / Homestay | Cho thuê phòng nghỉ, homestay nghỉ dưỡng, dịch vụ lưu trú tại Đà Lạt |
| **Địa phương** | Đà Lạt, Lâm Đồng, Vietnam (Mã vùng: 66106) | Vị trí đắc địa tại thành phố ngàn hoa |
| **Website hiện tại** | *Chưa có* (Xây mới hoàn toàn từ đầu) | Xây dựng website hiện đại, tối ưu SEO và trải nghiệm đặt phòng |
| **Mục tiêu website** | Giới thiệu công ty, thương hiệu và dịch vụ lưu trú; Chuyển đổi khách đặt phòng trực tiếp qua Website, Zalo và Hotline | Tăng nhận diện thương hiệu, giảm phụ thuộc vào các kênh OTA tốn phí hoa hồng |
| **Khách hàng mục tiêu** | Du khách trong nước và quốc tế | Cặp đôi, gia đình nhỏ, nhóm bạn trẻ, người yêu sự yên bình và ấm áp của Đà Lạt |
| **Điểm mạnh khác biệt (USP)** | **Ở Đà Lạt** – Không gian lưu trú ấm cúng, thư thái, gần gũi thiên nhiên, giữ ấm trọn vẹn giấc ngủ giữa tiết trời se lạnh của cao nguyên | Cảm giác như trở về nhà, bình yên và thơ mộng đúng chất Đà Lạt |
| **Ngôn ngữ** | Tiếng Việt (Ưu tiên số 1), Cấu trúc sẵn sàng hỗ trợ Đa ngôn ngữ (Tiếng Anh) | Phù hợp cả khách nội địa và du khách nước ngoài |

---

## 2. TÀI NGUYÊN THƯƠNG HIỆU & HỆ THỐNG DESIGN SYSTEM

### 2.1. Kênh truyền thông & Tài nguyên Drive
- **Hotline / Zalo**: `091 1942968` (Link Zalo trực tiếp: `https://zalo.me/0911942968`)
- **Fanpage Facebook**: [Ngủ Ấm Ở Đà Lạt](https://www.facebook.com/profile.php?id=61559001633103)
- **Vị trí Google Maps**: [Xem bản đồ vị trí Đà Lạt](https://www.google.com/maps/search/+l,+%C4%90%C3%A0+L%E1%BA%A1t,+Vietnam,+66106/@11.928106,108.3977835,17070m/data=!3m2!1e3!4b1)
- **Kho lưu trữ Google Drive (Logo & Ảnh tư liệu)**: [Google Drive Folder](https://drive.google.com/drive/folders/17VTTdCJvSjI3dbHLsafRw2Rrh8PxYsrh)
- **Tài nguyên ảnh local hiện có**: Thư mục `/public/images/`:
  - Logo chính thức: `mainlogo-img1.jpg`
  - Hình ảnh phòng & không gian: `sanpham.jpg`, `sanpham1.jpg`, `sanpham2.jpg`, `sanpham3.jpg`, `sanpham4.jpg`, `sanpham5.jpg`

---

### 2.2. Bảng màu quy chuẩn (Brand Palette)
Phong cách thiết kế phải toát lên sự **ấm áp, mộc mạc, chữa lành, tinh tế và đậm chất thơ mộng của Đà Lạt**. Tuyệt đối không dùng các gam màu sặc sỡ, chói gắt hoặc lệch khỏi định vị thương hiệu.

```
+------------------------------------------------------------------------+
|                      BẢNG MÀU THƯƠNG HIỆU CHUẨN                        |
+-------------------+--------------------------------+-------------------+
|  Primary (Chủ đạo)|  Nâu Đất Ấm / Cam Gạch         |  #A85A32 / #B85D2E|
|  Background (Nền) |  Màu Be Nhạt / Linen Cream     |  #FAF7F2 / #F5EFEB|
|  Accent (Điểm nhấn|  Xanh Lá Thông (Pine Green)    |  #01796F / #1D5449|
|  Text / Heading   |  Nâu Đen Trầm (Deep Charcoal)  |  #2A2421          |
|  Text Body        |  Nâu Xám Đất (Muted Earth)     |  #5C534E          |
|  Surface Card     |  Trắng Sữa Tinh Khiết          |  #FFFFFF          |
+-------------------+--------------------------------+-------------------+
```

- **Màu chủ đạo (Primary Color)**: `Nâu Đất Ấm` hoặc `Cam Gạch` (`#A85A32` / `#B85D2E` / `#C26638`) – Đại diện cho hơi ấm gia đình, mái ngói cổ, lò sưởi và tách trà ấm giữa sương sớm Đà Lạt.
- **Màu nền chủ đạo (Background Color)**: `Màu Be Nhạt` (`#FAF7F2` / `#F7F4EE` / `#F5EFEB`) – Mang lại cảm giác mộc mạc, nhẹ nhàng, dịu mắt, sạch sẽ và ấm cúng.
- **Màu điểm nhấn (Accent Color)**: `Xanh Lá Thông` (`#01796F` / `#1D5449` / `#234E41`) – Đại diện cho những cánh rừng thông xanh ngát, đặc trưng biểu tượng của cao nguyên Đà Lạt.
- **Màu chữ & Viền**:
  - Tiêu đề (Headings): `#2A2421` (Đen nâu trầm, lịch lãm, dễ đọc hơn thuần đen #000000).
  - Nội dung thường (Body text): `#5C534E` (Xám tro ấm, tỷ lệ tương phản đạt chuẩn WCAG AAA).
  - Viền mờ (Borders): `#E8E2D8` (Viền be nhạt tinh tế).

---

### 2.3. Định hình Font chữ & Typography
- **Font tiêu đề chính (Heading)**: Phông chữ có chân nhẹ nhàng, thanh lịch hoặc Sans-serif hiện đại mang hơi thở lãng mạn (VD: `Playfair Display`, `Lora`, hoặc `Plus Jakarta Sans`).
- **Font nội dung (Body text)**: Phông chữ sans-serif hiện đại, độ thoáng cao, dễ đọc trên mọi thiết bị di động (VD: `Inter`, `Plus Jakarta Sans`, `Geist Sans`).
- **Khoảng cách & Bố cục**: Spacing rộng rãi, bố cục thở, hình ảnh bo góc mềm mại (`rounded-2xl` hoặc `rounded-3xl`), hiệu ứng đổ bóng mờ (`shadow-sm`, `shadow-md` màu ấm).

---

## 3. SẢN PHẨM & DỊCH VỤ CỐT LÕI

Mục tiêu kinh doanh tập trung vào 3-5 nhóm dịch vụ lưu trú và trải nghiệm chính:

1. **Cho thuê phòng lưu trú cao cấp & ấm cúng**:
   - Phòng Đơn / Phòng Đôi Tinh Tế (Dành cho cặp đôi, người đi du lịch một mình tìm khoảng lặng).
   - Phòng Ban Công View Rừng Thông / Thung Lũng Mộng Mơ (Đón bình minh, săn mây, ngắm hoàng hôn).
   - Phòng Gia Đình / Nhóm Bạn (Không gian rộng rãi, trang bị đầy đủ chăn đệm ấm áp, lò sưởi / quạt ấm).
2. **Tiện ích & Dịch vụ homestay trọn gói**:
   - Bếp sinh hoạt chung ấm cúng, trà và cà phê Đà Lạt miễn phí.
   - Sân vườn BBQ nướng ngắm sương mù buổi tối.
   - Dịch vụ cho thuê xe máy, hỗ trợ book tour săn mây, trekking, hái dâu.
   - Hỗ trợ check-in sớm / gửi hành lý an toàn, tư vấn lịch trình du lịch Đà Lạt bản địa.

---

## 4. KIẾN TRÚC THÔNG TIN & CẤU TRÚC TRANG (SITEMAP)

### 4.1. Trang chủ (`/`)
1. **Header / Navbar**:
   - Logo "Ngủ Ấm Ở Đà Lạt" (Ảnh `mainlogo-img1.jpg`).
   - Menu điều hướng: *Trang chủ*, *Về chúng tôi*, *Dịch vụ & Phòng*, *Góc trải nghiệm*, *Liên hệ*.
   - Nút CTA nổi bật: **"Đặt Phòng Ngay"** hoặc **"Hotline: 091 1942968"**.
   - Hỗ trợ Mobile Drawer / Hamburger Menu mượt mà.
2. **Hero Section (Ấn tượng đầu tiên)**:
   - Slogan gợi cảm xúc: *"Trở về giấc ngủ ấm giữa lòng Đà Lạt mộng mơ"*.
   - Khung tìm kiếm / Đặt phòng nhanh: Chọn ngày Check-in, Check-out, Số lượng khách, Loại phòng mong muốn, Nút **"Kiểm Tra Phòng Trống"**.
3. **Giới thiệu USP & Câu chuyện "Ngủ Ấm"**:
   - Vì sao lại là "Ngủ Ấm Ở Đà Lạt"? (Không gian bình yên, chăn ấm, trà thơm, gạt bỏ ồn ào phố thị).
   - 4 điểm chạm nổi bật: Vị trí thuận tiện, Không gian mộc mạc tinh tế, Tiện nghi ấm áp, Chủ nhà thân thiện mến khách.
4. **Bộ sưu tập Phòng nghỉ (Featured Rooms)**:
   - Card phòng trực quan, hiển thị ảnh sắc nét, diện tích, sức chứa, tiện nghi (Wifi, nước nóng, máy sấy, view đồi), giá tham khảo.
   - Nút hành động: "Xem chi tiết" và "Đặt phòng ngay".
5. **Tiện ích & Trải nghiệm homestay**:
   - Biểu tượng và hình ảnh: Bếp trà ấm, Khu BBQ sân vườn, Chỗ đậu xe, Không gian check-in thơ mộng.
6. **Thư viện hình ảnh (Gallery & Moments)**:
   - Khung hình grid sáng tạo các góc chụp ảnh đẹp, thực tế tại homestay.
7. **Đánh giá & Cảm nhận khách hàng (Testimonials)**:
   - Review chân thực của du khách trong và ngoài nước về độ ấm cúng và sự hài lòng.
8. **Chỉ đường & Bản đồ tương tác Google Maps**:
   - Khung bản đồ Google Maps định vị tại Đà Lạt.
   - Hướng dẫn đường đi chi tiết.
9. **Footer (Chân trang)**:
   - Thông tin doanh nghiệp: Ngủ Ấm Ở Đà Lạt.
   - Hotline / Zalo: `091 1942968`.
   - Link Facebook Fanpage, Google Maps.
   - Chính sách đặt & hủy phòng, giờ nhận/trả phòng (Check-in 14:00, Check-out 12:00).
   - Bản quyền & Hotline hỗ trợ 24/7.

---

### 4.2. Trang Về Chúng Tôi (`/about`)
- Câu chuyện ra đời thương hiệu Ngủ Ấm Ở Đà Lạt.
- Triết lý đón tiếp khách: Đón bạn như người thân trở về nhà.
- Không gian kiến trúc mộc mạc, gần gũi thiên nhiên.

### 4.3. Trang Dịch Vụ & Phòng Nghỉ (`/services` hoặc `/rooms`)
- Danh sách chi tiết toàn bộ các phòng lưu trú với đầy đủ thông số.
- Bảng giá minh bạch theo ngày thường / cuối tuần / dịp lễ tết.
- Các dịch vụ gia tăng: Cho thuê xe, set tiệc nướng BBQ, giặt ủi, cà phê sáng.
- Quy định nhận phòng và nội quy lưu trú.

### 4.4. Trang Liên Hệ & Đặt Phòng (`/contact`)
- Form liên hệ nhanh: Họ tên, Số điện thoại, Email, Số khách, Ngày dự kiến, Yêu cầu đặc biệt.
- Khối thông tin liên hệ trực tiếp: Hotline `091 1942968`, Chat Zalo trực tiếp, Nhắn tin Facebook.
- Khung bản đồ Google Maps phóng to tiện lợi.

---

## 5. TÍNH NĂNG KỸ THUẬT & TRẢI NGHIỆM NGƯỜI DÙNG (UX/UI)

1. **Floating Action Buttons (Nút liên hệ nhanh cố định)**:
   - Nút gọi điện nhanh: `tel:0911942968` với hiệu ứng rung nhẹ (pulse).
   - Nút chat Zalo trực tiếp: `https://zalo.me/0911942968` với icon Zalo chuẩn.
   - Nút Messenger kết nối Fanpage Facebook.
2. **Form Đặt phòng / Gửi yêu cầu thông minh**:
   - Validation dữ liệu (Số điện thoại Việt Nam chuẩn, ngày nhận/trả phòng hợp lệ).
   - Thông báo gửi thành công và điều hướng gợi ý kết nối Zalo để được duyệt phòng trong 5 phút.
3. **Bản đồ Google Maps nhúng chuẩn xác**:
   - Tích hợp Iframe hoặc link dẫn thẳng Google Maps dẫn đường chính xác.
4. **Tối ưu hiển thị Responsive 100%**:
   - Mobile First: Tối ưu hoàn hảo cho màn hình iPhone, Android (375px - 430px).
   - Tablet & Desktop: Bố cục lưới thoáng đãng, hình ảnh chất lượng cao, tải trang nhanh không giật lag.
5. **SEO Onpage Chuẩn Du lịch & Homestay Đà Lạt**:
   - Meta title, description giàu từ khóa: *Homestay Đà Lạt ấm cúng*, *Đặt phòng homestay Ngủ Ấm Ở Đà Lạt*, *Thuê phòng view đẹp Đà Lạt*.
   - Thẻ OpenGraph (OG Image, OG Title, OG Description) chuẩn khi chia sẻ lên Zalo/Facebook.
   - Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, đúng 1 thẻ `<h1>`).

---

## 6. CHECKLIST NGHIỆM THU DEMO CHO SALE & KHÁCH HÀNG

- [ ] **Thông tin**: Đúng 100% tên "Ngủ Ấm Ở Đà Lạt", SĐT `091 1942968`, link Facebook, Maps.
- [ ] **Màu sắc**: Chuẩn Nâu Đất Ấm (#A85A32), Nền Be Nhạt (#FAF7F2), Điểm nhấn Xanh Thông (#01796F).
- [ ] **Logo & Ảnh**: Hiển thị logo sắc nét, hình ảnh phòng thực tế từ tư liệu homestay.
- [ ] **Tương tác**: Nút gọi Hotline và nút mở Zalo hoạt động chính xác khi bấm trên điện thoại.
- [ ] **Giao diện**: Trực quan, ấm cúng, truyền cảm hứng du lịch Đà Lạt ngay từ cái nhìn đầu tiên.
