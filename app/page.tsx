'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import {
  HomeOutlined,
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  CalendarOutlined,
} from '@ant-design/icons'

const features = [
  {
    step: '01',
    icon: HomeOutlined,
    title: 'Đa dạng loại hình chỗ ở',
    description:
      'Homestay có gu, khách sạn trung tâm, villa biệt lập view rừng – phù hợp với từng nhu cầu và sở thích nghỉ dưỡng khác nhau.',
  },
  {
    step: '02',
    icon: CustomerServiceOutlined,
    title: 'Hỗ trợ tư vấn 1:1',
    description:
      'Đội ngũ chuyên nghiệp giúp bạn chọn được chỗ ở phù hợp nhất với lịch trình, số lượng người và ngân sách chuyến đi.',
  },
  {
    step: '03',
    icon: SafetyCertificateOutlined,
    title: 'Thông tin rõ ràng & thực tế',
    description:
      'Hình ảnh thực tế 100%, chi tiết phòng và bảng giá minh bạch, tuyệt đối không phát sinh phụ phí ẩn khi nhận phòng.',
  },
  {
    step: '04',
    icon: HeartOutlined,
    title: 'Bảo mật & Hỗ trợ tận tâm',
    description:
      'Bảo mật thông tin khách hàng tuyệt đối, luôn đồng hành và hỗ trợ chu đáo từ khi đặt chỗ cho đến lúc check-out.',
  },
]

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-neutral-800">
      <Header />

      <main className="flex-1">
        {/* Banner Carousel Slider */}
        <ImageSlider />

        {/* ================= SECTION 1: GIỚI THIỆU ================= */}
        <section className="relative w-full flex flex-row justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50/40 to-white">
          <div className="max-w-4xl text-center">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#01796F] bg-[#01796F]/10 mb-5">
              <span>Hệ Thống Nghỉ Dưỡng Đà Lạt</span>
            </div>

            {/* Title lớn */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              Booking Villa — Homestay — Hotel
            </h1>

            {/* Divider trang trí */}
            <div className="w-20 h-1 bg-[#01796F] rounded-full mx-auto my-6 sm:mt-4 sm:mb-8" />

            {/* Đoạn mô tả nhỏ */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-small max-w-3xl mx-auto font-normal">
              Là hệ thống đặt phòng ở Đà Lạt, chuyên cung cấp dịch vụ booking homestay, khách sạn và villa cao cấp – được chọn lọc kỹ lưỡng, đáp ứng nhu cầu nghỉ dưỡng từ cơ bản đến cao cấp của bạn và gia đình.
            </p>
          </div>
        </section>

        {/* ================= SECTION 2: 4 CỘT ĐIỂM NỔI BẬT ================= */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF0E6] border-y border-neutral-200/70">
          <div className="max-w-7xl mx-auto">
            {/* Header của Section */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2.5">
                Điểm Nổi Bật Của Dịch Vụ
              </h2>
              <div className="w-14 h-1 bg-[#01796F] rounded-full mx-auto mt-4" />
            </div>

            {/* 4 Cột bằng nhau tương ứng với 4 mục con */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.step}
                    className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Hàng trên: Icon & Số thứ tự */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#01796F]/10 text-[#01796F] flex items-center justify-center text-2xl group-hover:bg-[#01796F] group-hover:text-white transition-colors duration-300 shadow-inner">
                          <IconComponent />
                        </div>
                        <span className="text-2xl sm:text-3xl font-extrabold text-neutral-200 group-hover:text-[#01796F]/30 transition-colors font-mono">
                          {item.step}
                        </span>
                      </div>

                      {/* Tiêu đề mục */}
                      <h3 className="md:h-12 text-lg sm:text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#01796F] transition-colors">
                        {item.title}
                      </h3>

                      {/* Mô tả chi tiết */}
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CALL TO ACTION ĐẶT PHÒNG ================= */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#005f56] via-[#01796F] to-[#029688] p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl">
              {/* Vòng tròn decor trang trí nền mờ */}
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest bg-white/15 text-white backdrop-blur-sm mb-4">
                  Trải Nghiệm Trọn Vẹn Đà Lạt
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                  Sẵn Sàng Cho Kỳ Nghỉ Đáng Nhớ Của Bạn?
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
                  Liên hệ ngay với chúng tôi để nhận tư vấn lựa chọn chỗ ở phù hợp và giữ phòng với mức giá tốt nhất cho chuyến đi.
                </p>

                {/* Button Đặt phòng ngay */}
                <a
                  href="tel:0911942968"
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-base sm:text-lg font-bold text-[#01796F] bg-white hover:bg-neutral-50 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
                >
                  <CalendarOutlined className="text-lg" />
                  <span>Đặt phòng ngay bây giờ</span>
                  <ArrowRightOutlined className="text-sm transition-transform group-hover:translate-x-1" />
                </a>

                {/* Hotline phụ trợ bên dưới */}
                <p className="mt-5 text-xs sm:text-sm text-white/80 flex items-center gap-2">
                  <PhoneOutlined />
                  <span>Hotline hỗ trợ 24/7: <strong className="text-white underline underline-offset-4">0911 942 968</strong></span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
