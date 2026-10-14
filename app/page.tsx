'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import BookingModal from '@/components/BookingModal'
import FloatingContact from '@/components/FloatingContact'
import ImageSlider from '@/components/ImageSlider'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('Phòng ấm áp')

  const openBookingFor = (roomName: string) => {
    setSelectedRoom(roomName)
    setIsBookingOpen(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const viewRoomCards = [
    {
      title: 'View Rừng Thông',
      tag: 'Hòa mình thiên nhiên',
      desc: 'Thức giấc giữa ngàn thông reo và đón làn sương sớm trong trẻo. Ban công thoáng đãng ôm trọn thung lũng xanh mướt, mang lại cảm giác bình yên và thư thái.',
      capacity: 'Linh động từ 2 – 36 người',
      highlights: [
        'Ban công ngắm trọn đại ngàn thông reo',
        'Không khí trong lành, sương mù lãng đãng',
        'Có sẵn bếp, bàn trà và sân nướng BBQ',
      ],
      image: '/images/viewrungthong.jpg',
    },
    {
      title: 'View Thành Phố',
      tag: 'Nhịp sống phố hoa',
      desc: 'Tầm nhìn bao quát toàn cảnh phố núi Đà Lạt thơ mộng, lấp lánh ánh đèn khi đêm xuống. Vị trí thuận tiện dạo phố, khám phá ẩm thực và các quán cafe trung tâm.',
      capacity: 'Linh động từ 2 – 36 người',
      highlights: [
        'Toàn cảnh phố núi nhộn nhịp & lãng mạn',
        'Thuận tiện di chuyển, gần chợ và trung tâm',
        'Trang bị hiện đại, không gian sáng thoáng',
      ],
      image: '/images/viewthanhpho.jpg',
    },
    {
      title: 'View Nhà Lồng',
      tag: 'Kinh đô ánh sáng',
      desc: 'Chiêm ngưỡng đặc sản thị giác nổi tiếng của Đà Lạt khi màn đêm buông xuống. Thung lũng nhà lồng hoa bừng sáng lung linh như biển sao ngay trước khung cửa sổ.',
      capacity: 'Linh động từ 2 – 36 người',
      highlights: [
        'Ngắm thung lũng đèn lồng rực sáng về đêm',
        'Không gian cực chill cho buổi tối lãng mạn',
        'Phù hợp săn ảnh đêm và sum vầy ấm cúng',
      ],
      image: '/images/viewnhalong.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A2421] selection:bg-[#8D4427]/20 selection:text-[#8D4427]">
      {/* 1. HEADER */}
      <Header onOpenBooking={() => openBookingFor('Tư vấn đặt phòng')} />

      {/* 2. HERO SECTION (100% Screen Height, Framed & Atmospheric) */}
      <div id="home">
        <ImageSlider />
      </div>

      {/* 3. SECTION "VỀ CHÚNG TÔI" */}
      <section id="about-us" className="py-20 lg:py-24 relative overflow-hidden bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Intro: Text & Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Intro Text */}
            <div className="lg:col-span-7 space-y-6">

              {/* Tag */}
              <div className="flex items-center gap-2 text-[#8D4427] text-xs font-semibold uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>VỀ CHÚNG TÔI</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-normal leading-tight tracking-tight">
                Không chỉ là nơi nghỉ chân – Chuẩn gu nghỉ dưỡng tại Đà Lạt
              </h2>

              {/* Main Content Paragraph */}
              <p className="text-[#5C534E] text-base sm:text-lg leading-relaxed">
                Là hệ thống đặt phòng ở Đà Lạt, chuyên cung cấp dịch vụ booking homestay, khách sạn và villa cao cấp – được chọn lọc kỹ lưỡng, đáp ứng nhu cầu nghỉ dưỡng từ cơ bản đến cao cấp. Với mạng lưới đối tác là những đơn vị vận hành chỗ ở uy tín, chúng tôi cam kết mang đến không gian lưu trú <strong className="text-[#2A2421] font-semibold">an toàn – đẹp mắt – chuẩn nghỉ dưỡng</strong>, giúp bạn tận hưởng Đà Lạt một cách riêng tư, trọn vẹn và đáng nhớ.
              </p>

              {/* Quick Trust Highlights */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DCD2C3] bg-white text-[#2A2421] text-xs sm:text-sm font-medium shadow-xs">
                  <span className="text-[#8D4427]">✨</span>
                  <span>Chỗ ở chọn lọc 100%</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DCD2C3] bg-white text-[#2A2421] text-xs sm:text-sm font-medium shadow-xs">
                  <span className="text-[#01796F]">🛡️</span>
                  <span>Uy tín & An toàn tuyệt đối</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DCD2C3] bg-white text-[#2A2421] text-xs sm:text-sm font-medium shadow-xs">
                  <span className="text-[#8D4427]">🌲</span>
                  <span>Trọn vẹn gu Đà Lạt</span>
                </div>
              </div>

            </div>

            {/* Right Column: Featured Image with Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EDE4D5] aspect-[4/3] w-full group">
                <Image
                  src="/images/about-homestay.jpg"
                  alt="Không gian lưu trú chọn lọc tại Ngủ Ấm Ở Đà Lạt"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/40 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8D4427]/10 text-[#8D4427] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#2A2421]">Đồng hành tận tâm</p>
                    <p className="text-[11px] text-[#5C534E]">Từ lúc chọn phòng đến khi check-out</p>
                  </div>
                </div>
              </div>

              {/* Decorative Botanical Art */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-32 pointer-events-none opacity-30 text-[#6E645B] hidden sm:block">
                <svg viewBox="0 0 80 160" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M40,150 Q40,80 50,10" />
                  <path d="M40,120 Q65,110 70,100 Q50,95 40,110" />
                  <path d="M42,95 Q15,85 10,75 Q30,70 43,85" />
                  <path d="M45,70 Q70,60 75,50 Q55,45 46,60" />
                  <path d="M47,45 Q25,35 20,25 Q38,22 48,36" />
                </svg>
              </div>
            </div>

          </div>

          {/* Section: Điểm Nổi Bật Của Dịch Vụ */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal tracking-tight">
                Điểm Nổi Bật Của Dịch Vụ
              </h3>
              <p className="text-sm text-[#5C534E] mt-2">
                Giá trị cốt lõi mang lại trải nghiệm lưu trú hoàn hảo và an tâm tuyệt đối
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-6 border border-[#EDE4D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4ED] text-[#8D4427] flex items-center justify-center mb-4 group-hover:bg-[#8D4427] group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#2A2421] mb-2">
                    Đa dạng loại hình chỗ ở
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                    Homestay có gu, khách sạn trung tâm, villa biệt lập view rừng – phù hợp với từng nhu cầu khác nhau.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 border border-[#EDE4D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4ED] text-[#8D4427] flex items-center justify-center mb-4 group-hover:bg-[#8D4427] group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#2A2421] mb-2">
                    Hỗ trợ tư vấn 1:1
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                    Giúp bạn chọn được chỗ ở phù hợp nhất với lịch trình, số lượng người và phong cách nghỉ dưỡng riêng.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-6 border border-[#EDE4D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4ED] text-[#8D4427] flex items-center justify-center mb-4 group-hover:bg-[#8D4427] group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#2A2421] mb-2">
                    Thông tin rõ ràng – Ảnh thực tế
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                    Cam kết thông tin trung thực, hình ảnh chụp thực tế từng góc phòng, minh bạch chi phí không phụ phí ẩn.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-6 border border-[#EDE4D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4ED] text-[#8D4427] flex items-center justify-center mb-4 group-hover:bg-[#8D4427] group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#2A2421] mb-2">
                    Bảo mật – Hỗ trợ tận tâm
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                    Bảo mật tuyệt đối thông tin, luôn đồng hành và hỗ trợ khách hàng từ khi đặt chỗ đến lúc check-out.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Section: Phù Hợp Với Ai? */}
          <div className="mt-14 sm:mt-16 bg-gradient-to-br from-[#FAF3EC] to-[#F5ECE2] border border-[#E8DACB] rounded-3xl p-7 sm:p-10 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-[#E8DACB] pb-6">
              <div>
                <span className="text-[#8D4427] text-xs font-semibold uppercase tracking-wider">ĐỐI TƯỢNG PHỤC VỤ</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal mt-1">
                  Phù hợp với ai?
                </h3>
              </div>
              <p className="text-sm text-[#5C534E] max-w-md">
                Dù bạn đến Đà Lạt để tìm kiếm sự bình yên, sum vầy cùng gia đình hay làm việc kết hợp nghỉ dưỡng, chúng tôi đều có không gian lý tưởng dành cho bạn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Target 1 */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-[#EDE4D5]/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8D4427]/10 text-[#8D4427] flex items-center justify-center shrink-0 mt-0.5 font-serif text-lg">
                  🍂
                </div>
                <div>
                  <h4 className="font-medium text-[#2A2421] text-base mb-1">
                    Du khách cá nhân & Cặp đôi
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                    Tìm kiếm trải nghiệm lãng mạn, yên tĩnh, chữa lành giữa không khí dịu mát của phố sương.
                  </p>
                </div>
              </div>

              {/* Target 2 */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-[#EDE4D5]/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#01796F]/10 text-[#01796F] flex items-center justify-center shrink-0 mt-0.5 font-serif text-lg">
                  🏡
                </div>
                <div>
                  <h4 className="font-medium text-[#2A2421] text-base mb-1">
                    Nhóm bạn & Gia đình
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                    Cần không gian riêng tư, ấm cúng, có sân vườn nướng BBQ và đầy đủ tiện nghi sinh hoạt chung.
                  </p>
                </div>
              </div>

              {/* Target 3 */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-[#EDE4D5]/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8D4427]/10 text-[#8D4427] flex items-center justify-center shrink-0 mt-0.5 font-serif text-lg">
                  💼
                </div>
                <div>
                  <h4 className="font-medium text-[#2A2421] text-base mb-1">
                    Doanh nhân & Tổ chức
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                    Cần đặt villa nghỉ dưỡng biệt lập kết hợp làm việc từ xa, team retreat và hội thảo riêng tư.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION "CÁC LOẠI PHÒNG & KHÔNG GIAN NGHỈ" */}
      <section id="service" className="py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Row (Giữ nguyên Title) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#8D4427] text-xs font-semibold uppercase tracking-wider mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>KHÔNG GIAN LƯU TRÚ</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-normal leading-tight tracking-tight">
                Các loại phòng & không gian nghỉ
              </h2>
            </div>

            <button
              onClick={() => openBookingFor('Tư vấn chọn view phòng')}
              className="text-xs sm:text-sm font-medium text-[#5C534E] hover:text-[#8D4427] transition-colors inline-flex items-center gap-1 group self-start sm:self-auto cursor-pointer"
            >
              <span>Tư vấn đặt phòng</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Sức Chứa Linh Động 2 - 36 Người Banner */}
          <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-xs hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8D4427]/10 text-[#8D4427] text-xs font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>SỨC CHỨA LINH ĐỘNG THEO NHU CẦU</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-medium">
                  Sức chứa linh động theo nhu cầu từ 2 – 36 người
                </h3>
                <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
                  Dù bạn đi một mình, đi cùng người thương, gia đình sum vầy hay nhóm bạn và công ty tổ chức đoàn đông – chúng tôi luôn có giải pháp phòng nghỉ lẻ hoặc thuê nguyên căn villa biệt lập từ 2 đến 36 người với đầy đủ bếp nấu, phòng sinh hoạt và sân BBQ riêng tư.
                </p>
              </div>

              {/* 3 Capacity Badges */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
                <div className="px-3 sm:px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D2] text-center">
                  <span className="block text-[11px] text-[#8D4427] font-semibold">Cặp đôi / Bạn bè</span>
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2A2421]">2 – 4</span>
                  <span className="block text-[10px] text-[#6E645B]">người / phòng</span>
                </div>
                <div className="px-3 sm:px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D2] text-center">
                  <span className="block text-[11px] text-[#01796F] font-semibold">Gia đình ấm cúng</span>
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2A2421]">4 – 8</span>
                  <span className="block text-[10px] text-[#6E645B]">người / phòng</span>
                </div>
                <div className="px-3 sm:px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D2] text-center">
                  <span className="block text-[11px] text-[#8D4427] font-semibold">Nguyên căn / Villa</span>
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2A2421]">10 – 36</span>
                  <span className="block text-[10px] text-[#6E645B]">người / đoàn</span>
                </div>
              </div>

            </div>
          </div>

          {/* Subheading View Cards */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal tracking-tight">
                Các dạng view phòng đặc trưng
              </h3>
              <p className="text-xs sm:text-sm text-[#5C534E] mt-1">
                Lựa chọn góc nhìn yêu thích cho kỳ nghỉ dưỡng trọn vẹn tại Đà Lạt
              </p>
            </div>
          </div>

          {/* 3 View Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {viewRoomCards.map((room) => (
              <div
                key={room.title}
                className="bg-white rounded-3xl overflow-hidden border border-[#E9E1D2] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Room Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Badge top */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#8D4427] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    {room.tag}
                  </span>

                  {/* Sức chứa badge bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-medium drop-shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {room.capacity}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl font-medium text-[#2A2421] group-hover:text-[#8D4427] transition-colors">
                      {room.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed line-clamp-3">
                      {room.desc}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F2EDE4]">
                    {room.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#5C534E]">
                        <svg className="w-3.5 h-3.5 text-[#01796F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openBookingFor(`Tư vấn ${room.title}`)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FAF4ED] hover:bg-[#8D4427] text-[#8D4427] hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Tư vấn phòng {room.title.toLowerCase()}</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION "TIỆN NGHI & KHÔNG GIAN CHUNG" */}
      <section id="experiences" className="py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Big Outdoor Porch Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#EDE4D5] aspect-[16/10] w-full group">
                <Image
                  src="/images/sanpham5.jpg"
                  alt="Khu vực bàn ăn ngoài trời lung linh tại Ngủ Ấm Ở Đà Lạt"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Content & 3 Amenities */}
            <div className="lg:col-span-6 space-y-6 relative">

              {/* Botanical Line Art top right */}
              <div className="absolute right-0 top-0 w-16 sm:w-20 h-28 pointer-events-none opacity-40 text-[#6E645B]">
                <svg viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10,90 Q30,50 50,10" />
                  <path d="M25,65 Q50,60 55,50 Q40,48 28,58" />
                  <path d="M35,40 Q10,35 5,25 Q20,25 36,33" />
                  <path d="M45,20 Q55,10 58,5 Q48,5 45,15" />
                </svg>
              </div>

              {/* Tag */}
              <div className="text-[#8D4427] text-xs font-semibold uppercase tracking-wider">
                TRẢI NGHIỆM TẠI ĐÂY
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-normal leading-tight tracking-tight">
                Tiện nghi & không gian chung
              </h2>

              {/* Description */}
              <p className="text-[#5C534E] text-sm sm:text-base leading-relaxed max-w-xl">
                Tận hưởng những khoảnh khắc thư giãn trong không gian được chăm chút tỉ mỉ, mang đậm hương vị Đà Lạt.
              </p>

              {/* 3 Circular Amenities */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-center">

                {/* Amenity 1 */}
                <div className="flex flex-col items-center space-y-2.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CBB8A3] text-white flex items-center justify-center shadow-xs">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#2A2421]">
                    Phòng ngủ <br className="hidden sm:inline" /> thoải mái
                  </span>
                </div>

                {/* Amenity 2 */}
                <div className="flex flex-col items-center space-y-2.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CBB8A3] text-white flex items-center justify-center shadow-xs">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#2A2421]">
                    Bếp & bàn ăn <br className="hidden sm:inline" /> tiện nghi
                  </span>
                </div>

                {/* Amenity 3 */}
                <div className="flex flex-col items-center space-y-2.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CBB8A3] text-white flex items-center justify-center shadow-xs">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v18m-7-5l7-7 7 7M7 11l5-5 5 5" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#2A2421]">
                    Sân vườn <br className="hidden sm:inline" /> thư giãn
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION "KHOẢNH KHẮC TẠI NGỦ ẤM" (GALLERY) */}
      <section id="gallery" className="py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-[#8D4427] text-xs font-semibold uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>THƯ VIỆN ẢNH</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-normal leading-tight tracking-tight">
                Khoảnh khắc tại Ngủ Ấm
              </h2>

              <p className="text-[#5C534E] text-sm sm:text-base leading-relaxed">
                Cùng nhìn ngắm những góc nhỏ xinh và không gian thực tế của chúng tôi qua những hình ảnh dưới đây.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => openBookingFor('Xem thêm thư viện ảnh')}
                  className="inline-flex items-center gap-2 bg-[#854427] hover:bg-[#70361E] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all shadow hover:shadow-md cursor-pointer"
                >
                  <span>Xem tất cả hình ảnh</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Photo Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-4">

              {/* Large Image on Left (Fire pit at twilight) */}
              <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] md:aspect-auto md:h-full min-h-[260px] group border border-[#EDE4D5]">
                <Image
                  src="/images/sanpham3.jpg"
                  alt="Khoảnh khắc lửa ấm buổi tối tại sân vườn Ngủ Ấm Ở Đà Lạt"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* 2x2 Small Grid on Right */}
              <div className="md:col-span-5 grid grid-cols-2 gap-3">

                {/* 1. Dining Table */}
                <div className="relative rounded-xl overflow-hidden shadow-xs aspect-square border border-[#EDE4D5] group">
                  <Image
                    src="/images/sanpham2.jpg"
                    alt="Bàn ăn tiện nghi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 2. Room Screen */}
                <div className="relative rounded-xl overflow-hidden shadow-xs aspect-square border border-[#EDE4D5] group">
                  <Image
                    src="/images/sanpham1.jpg"
                    alt="Phòng ánh sáng"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 3. Gazebo Top View */}
                <div className="relative rounded-xl overflow-hidden shadow-xs aspect-square border border-[#EDE4D5] group">
                  <Image
                    src="/images/sanpham4.jpg"
                    alt="Toàn cảnh sân vườn"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 4. Gazebo Porch Night */}
                <div className="relative rounded-xl overflow-hidden shadow-xs aspect-square border border-[#EDE4D5] group">
                  <Image
                    src="/images/sanpham5.jpg"
                    alt="Khu vực bàn tiệc tối"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION "DỪNG CHÂN TẠI ĐÀ LẠT, TẬN HƯỞNG NHỮNG NGÀY BÌNH YÊN" (VỊ TRÍ & BẢN ĐỒ) */}
      <section id="contact-us" className="py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Landscape Image */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#EDE4D5] aspect-[4/3] w-full group">
                <Image
                  src="/images/dalat-pine-hills.jpg"
                  alt="Đồi thông sương mù đón bình minh Đà Lạt"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Middle Column: Heading & Description */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-[#8D4427] text-xs font-semibold uppercase tracking-wider">
                ĐÀ LẠT & VỊ TRÍ
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-tight tracking-tight">
                Dừng chân tại Đà Lạt, <br className="hidden sm:inline" />
                tận hưởng những ngày bình yên
              </h2>
              <p className="text-[#5C534E] text-sm leading-relaxed">
                Khám phá vị trí lưu trú, những điểm đến xung quanh và những trải nghiệm thú vị trong hành trình của bạn.
              </p>
            </div>

            {/* Right Column: Combined Map Card & Nearby Attractions */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#E9E1D2] shadow-sm space-y-5">

              {/* Mini Map Snippet */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DEC8] h-32 bg-[#EAE5DC] flex items-center justify-center group">
                {/* Stylized Google Map Background */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8D4427_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Map roads simulation */}
                <svg className="absolute inset-0 w-full h-full text-stone-300" stroke="currentColor" strokeWidth="3" fill="none">
                  <path d="M-10,50 Q100,80 200,30 T400,90" />
                  <path d="M150,0 Q170,70 190,140" />
                </svg>

                {/* Red Pin Location Indicator */}
                <div className="relative z-10 flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-full shadow-md border border-stone-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 -ml-5" />
                  <span className="text-xs font-bold text-[#8D4427]">Ngủ Ấm Ở Đà Lạt</span>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-1 text-xs">
                <div className="text-[#8C8278] flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#8D4427]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Địa chỉ</span>
                </div>
                <p className="font-medium text-[#2A2421]">
                  l, Đà Lạt, Vietnam, 66106
                </p>
                <div className="pt-1">
                  <a
                    href="https://www.google.com/maps/search/+l,+%C4%90%C3%A0+L%E1%BA%A1t,+Vietnam,+66106/@11.928106,108.3977835,17070m/data=!3m2!1e3!4b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8D4427] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>Xem bản đồ</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Nearby Attractions ("Gần đây có") */}
              <div className="pt-3 border-t border-[#F2EDE4] space-y-2">
                <div className="text-[11px] font-semibold text-[#8C8278] uppercase tracking-wider">
                  Gần đây có
                </div>
                <div className="space-y-2 text-xs text-[#5C534E]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span>⛵</span>
                      <span>Hồ Xuân Hương</span>
                    </span>
                    <span className="text-stone-400 font-light">~ 7 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span>🛒</span>
                      <span>Chợ Đà Lạt</span>
                    </span>
                    <span className="text-stone-400 font-light">~ 8 km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span>🤍</span>
                      <span>Thung lũng Tình Yêu</span>
                    </span>
                    <span className="text-stone-400 font-light">~ 12 km</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. SECTION CTA BANNER ("Sẵn sàng cho một kỳ nghỉ tại Đà Lạt?") */}
      <section className="relative bg-[#1A3B2F] text-white py-16 sm:py-20 overflow-hidden">

        {/* Left Pine Branch Foliage illustration */}
        <div className="absolute left-0 top-0 bottom-0 w-36 sm:w-56 pointer-events-none opacity-25 text-emerald-200">
          <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M50,180 V20" />
            <path d="M50,160 Q20,150 10,135 Q35,130 50,145" />
            <path d="M50,140 Q80,130 90,115 Q65,110 50,125" />
            <path d="M50,110 Q20,100 10,85 Q35,80 50,95" />
            <path d="M50,90 Q80,80 90,65 Q65,60 50,75" />
            <path d="M50,60 Q25,50 15,38 Q35,35 50,48" />
            <path d="M50,40 Q75,30 85,20 Q65,18 50,28" />
          </svg>
        </div>

        {/* Right Gentle Mountain Outline illustration */}
        <div className="absolute right-0 bottom-0 top-0 w-64 sm:w-96 pointer-events-none opacity-20 text-white">
          <svg viewBox="0 0 300 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M0,150 L80,80 L140,110 L220,50 L300,150" />
            <path d="M60,150 L120,95 L170,120 L240,75 L300,125" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">

          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-200/80">
            NGỦ ẤM Ở ĐÀ LẠT
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight tracking-tight text-white">
            Sẵn sàng cho một kỳ nghỉ tại Đà Lạt?
          </h2>

          <p className="text-stone-200/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Liên hệ với chúng tôi để tìm hiểu thông tin phòng nghỉ và lựa chọn phù hợp cho chuyến đi của bạn.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => openBookingFor('Đặt phòng từ CTA Banner')}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-stone-100 text-[#1A3B2F] font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#1A3B2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Liên hệ đặt phòng</span>
            </button>
          </div>

        </div>
      </section>

      {/* 9. SECTION FOOTER */}
      <footer className="bg-[#854427] text-[#FAF7F2] pt-16 pb-8 border-t border-[#73391F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">

            {/* Column 1: Brand Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <path d="M4 22L24 6L44 22" />
                    <path d="M34 14V8H39V18" />
                    <path d="M9 20V42H39V20" />
                    <rect x="15" y="26" width="6" height="6" />
                    <rect x="27" y="26" width="6" height="6" />
                    <path d="M21 42V35H27V42" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                    Ngủ Ấm
                  </div>
                  <div className="text-[10px] tracking-[0.25em] text-white/80 uppercase mt-0.5">
                    Ở ĐÀ LẠT
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed max-w-sm font-light">
                Không gian lưu trú ấm áp, gần gũi và đầy cảm hứng giữa lòng Đà Lạt.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div className="md:col-span-2 space-y-3">
              <div className="text-xs font-semibold tracking-wider uppercase text-white/70">
                Điều hướng
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-200/90 font-light">
                <li><a href="#hero" className="hover:text-white transition-colors">Trang chủ</a></li>
                <li><a href="#rooms" className="hover:text-white transition-colors">Không gian lưu trú</a></li>
                <li><a href="#experiences" className="hover:text-white transition-colors">Trải nghiệm</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Thư viện ảnh</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            {/* Column 3: Contact details */}
            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-semibold tracking-wider uppercase text-white/70">
                Liên hệ
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200/90 font-light">
                <li>
                  <a href="tel:0911942968" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>📞</span>
                    <span>091 1942968</span>
                  </a>
                </li>
                <li>
                  <a href="https://zalo.me/0911942968" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>💬</span>
                    <span>Zalo</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61559001633103" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>🌐</span>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/search/+l,+%C4%90%C3%A0+L%E1%BA%A1t,+Vietnam,+66106/@11.928106,108.3977835,17070m/data=!3m2!1e3!4b1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>📍</span>
                    <span>l, Đà Lạt, Vietnam, 66106</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: "See you in Da Lat" calligraphy sketch */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center space-y-2">
              <div className="text-right">
                <span className="font-serif italic text-3xl sm:text-4xl text-white/90 tracking-wide font-normal block">
                  See you
                </span>
                <span className="font-serif italic text-2xl sm:text-3xl text-white/90 tracking-wide font-normal block -mt-1">
                  in Da Lat
                </span>
              </div>
              <div className="w-8 h-10 text-white/70">
                <svg viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20,5 L20,45" />
                  <path d="M20,10 L10,22 L20,20 L8,32 L20,30 L6,42 L34,42 L20,30 L32,32 L20,20 L30,22 Z" />
                </svg>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-200/70 font-light gap-3">
            <div>
              © 2025 Ngủ Ấm Ở Đà Lạt. All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>↑</span>
              <span>Lên đầu trang</span>
            </button>
          </div>

        </div>
      </footer>

      {/* Floating CTA Contact Buttons (Hotline & Zalo) */}
      {/* <FloatingContact /> */}

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoom={selectedRoom}
      />
    </div>
  )
}
