# AGENT RULES & PROJECT STANDARDS: NGỦ ẤM Ở ĐÀ LẠT

> **QUY TẮC BẮT BUỘC (CRITICAL DIRECTIVE)**:
> Mọi hành động lập trình, thiết kế giao diện, chỉnh sửa nội dung hoặc phát triển tính năng mới trong toàn bộ dự án này **PHẢI TUÂN THỦ TUYỆT ĐỐI** các quy chuẩn thương hiệu, màu sắc, thông tin và kiến trúc được quy định dưới đây và trong tài liệu [docs/naodl.md](file:///d:/source_dudi/naodl/docs/naodl.md).
> **KHÔNG ĐƯỢC TỰ Ý THAY ĐỔI** màu sắc thương hiệu, số điện thoại, tên doanh nghiệp hoặc cấu trúc thẩm mỹ cốt lõi.

---

## 1. NGUỒN CHÂN LÝ DUY NHẤT (SINGLE SOURCE OF TRUTH)
- **Tài liệu đặc tả yêu cầu**: [docs/naodl.md](file:///d:/source_dudi/naodl/docs/naodl.md) (Chuyển thể từ `docs/naodl.docx` mã hồ sơ `DN0029`).
- Trước khi thêm bất kỳ trang, component, hay tính năng mới nào, **BẮT BUỘC** phải đối chiếu với tài liệu `docs/naodl.md`.

---

## 2. QUY CHUẨN THƯƠNG HIỆU & THÔNG TIN DOANH NGHIỆP
Mọi nơi hiển thị thông tin trên website đều phải sử dụng chính xác các dữ liệu sau:
- **Tên thương hiệu**: `Ngủ Ấm Ở Đà Lạt` (Viết đúng chính tả tiếng Việt có dấu, không viết tắt trên giao diện khách hàng).
- **Lĩnh vực**: Du lịch / Lưu trú / Homestay tại Đà Lạt.
- **Slogan / Vibe**: *"Trở về giấc ngủ ấm giữa lòng Đà Lạt mộng mơ"* – Ấm áp, mộc mạc, bình yên, chữa lành, chuẩn gu Đà Lạt.
- **Hotline / SĐT / Zalo**: `091 1942968` (Clickable: `tel:0911942968` và link Zalo trực tiếp: `https://zalo.me/0911942968`).
- **Facebook Fanpage**: [Ngủ Ấm Ở Đà Lạt Fanpage](https://www.facebook.com/profile.php?id=61559001633103).
- **Google Maps**: Đà Lạt, Lâm Đồng, Vietnam (Mã vùng 66106) – Sử dụng link Maps và nhúng bản đồ từ tài liệu.
- **Logo chính thức**: File ảnh logo tại `/public/images/mainlogo-img1.jpg`.
- **Thư viện ảnh sản phẩm**: Khai thác các ảnh thực tế trong `/public/images/` (`sanpham.jpg`, `sanpham1.jpg` đến `sanpham5.jpg`).

---

## 3. BẢNG MÀU QUY CHUẨN (DESIGN PALETTE RULES)
Thiết kế website **BẮT BUỘC** phải tuân thủ nghiêm ngặt 3 gam màu chủ đạo sau, không sử dụng màu sắc tùy tiện:

| Vai trò màu | Tên màu | Mã màu gợi ý | Ứng dụng |
| :--- | :--- | :--- | :--- |
| **Primary (Chủ đạo)** | **Nâu Đất Ấm / Cam Gạch** | `#A85A32` / `#B85D2E` | Button CTA chính, icon nhấn mạnh, viền active, các chi tiết ấm cúng |
| **Background (Nền)** | **Màu Be Nhạt / Linen Cream**| `#FAF7F2` / `#F5EFEB` | Nền tổng thể trang web, nền section tạo cảm giác ấm áp, dịu mắt |
| **Accent (Điểm nhấn)**| **Xanh Lá Thông** | `#01796F` / `#1D5449` | Thanh gạch chân active menu, badge phòng, tag tiện ích thiên nhiên |
| **Headings (Tiêu đề)**| **Nâu Đen Trầm** | `#2A2421` | Tiêu đề H1, H2, H3, mang nét sang trọng, sâu lắng |
| **Body (Văn bản)** | **Nâu Xám Đất** | `#5C534E` | Nội dung mô tả, dễ đọc, tương phản êm dịu |
| **Surface (Thẻ/Card)**| **Trắng Sữa / Trắng Tinh** | `#FFFFFF` | Nền các thẻ phòng, modal, khối nội dung nổi trên nền be |

> 🚫 **ĐIỀU CẤM KỴ VỀ MÀU SẮC**:
> Tuyệt đối không dùng các gam màu sặc sỡ, chói gắt (xanh dương sáng rực, tím neon, hồng cánh sen, vàng chanh) làm phá vỡ không gian ấm áp, trầm tĩnh của homestay Đà Lạt.

---

## 4. QUY CHUẨN GIAO DIỆN & TRẢI NGHIỆM NGƯỜI DÙNG (UI/UX)
1. **Thiết kế Mobile-First**: Hơn 85% khách du lịch đặt phòng bằng điện thoại. Giao diện mobile phải hiển thị mượt mà, không vỡ layout, không tràn ngang.
2. **Nút Floating Action (CTA Cố định)**: Luôn có nút Hotline (`091 1942968`) và Zalo chat cố định ở góc dưới màn hình trên cả Mobile và Desktop để tối đa hóa tỷ lệ chuyển đổi đặt phòng.
3. **Bố cục thoáng đãng & Bo góc mềm mại**: Sử dụng `rounded-2xl` hoặc `rounded-3xl` cho card và nút bấm; đổ bóng nhẹ nhàng (`shadow-sm`, `shadow-md`).
4. **Header & Navigation**:
   - Logo căn giữa hoặc góc trái theo nhận diện chuẩn.
   - Menu điều hướng: *Trang chủ*, *Về chúng tôi*, *Dịch vụ & Phòng*, *Góc trải nghiệm*, *Liên hệ*.
   - Nút Hamburger trên Mobile phải mượt mà, trực quan.

---

## 5. QUY CHUẨN KỸ THUẬT & LẬP TRÌNH (CODE STANDARDS)
- **Tech Stack**: Next.js App Router, React 19, TypeScript, Tailwind CSS v4.
- **Cấu trúc thư mục**:
  - `app/`: Các trang theo App Router (`page.tsx`, `layout.tsx`, `globals.css`).
  - `components/`: Các UI components tái sử dụng (Header, Footer, RoomCard, BookingForm, FloatingContact, Gallery, Testimonials).
  - `public/images/`: Chứa logo và hình ảnh homestay thực tế.
- **Semantic HTML & SEO**:
  - Mỗi trang duy nhất 1 thẻ `<h1>`.
  - Cung cấp đầy đủ Metadata (title, description, openGraph) với từ khóa du lịch lưu trú Đà Lạt.
  - Thẻ `Image` của Next.js phải luôn có thuộc tính `alt`, `priority` (cho banner/logo) và xử lý responsive.
- **Không dùng placeholder hỏng**: Sử dụng ảnh thực tế có trong dự án hoặc SVG vector sạch sẽ, không để ảnh bị lỗi đường dẫn.

---

## 6. NGUYÊN TẮC KIỂM DUYỆT TRƯỚC KHI BÀN GIAO
Trước khi thông báo hoàn thành bất kỳ task nào, phải tự kiểm tra:
1. Thông tin liên hệ đã đúng `091 1942968`, Zalo và fanpage chưa?
2. Bảng màu có đúng bộ Nâu Đất Ấm - Be Nhạt - Xanh Lá Thông không?
3. Giao diện có hiển thị tốt trên Mobile không?
4. Đã có đầy đủ các section cần thiết theo tài liệu [docs/naodl.md](file:///d:/source_dudi/naodl/docs/naodl.md) chưa?
