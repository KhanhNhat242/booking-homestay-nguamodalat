'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import BookingModal from '@/components/BookingModal'
import FloatingContact from '@/components/FloatingContact'
import ImageSlider from '@/components/ImageSlider'
import Footer from '@/components/Footer'
import GalleryCarousel from '@/components/GalleryCarousel'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('Phòng ấm áp')

  const openBookingFor = (roomName: string) => {
    setSelectedRoom(roomName)
    setIsBookingOpen(true)
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
                    Thông tin rõ ràng
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
        </div>
      </section>

      {/* SECTION "ĐỐI TƯỢNG PHỤC VỤ & SỨC CHỨA LINH ĐỘNG" (Parallax Banner Background) */}
      <section
        className="relative z-0 py-16 sm:py-20 lg:py-24 overflow-hidden bg-fixed bg-center bg-cover [clip-path:inset(0)]"
        style={{ backgroundImage: "url('/images/banner-img.jpg')" }}
      >
        {/* Fixed parallax backdrop bounded strictly within this section */}
        <div
          className="fixed inset-0 pointer-events-none bg-center bg-cover -z-20"
          style={{ backgroundImage: "url('/images/banner-img.jpg')" }}
        />

        {/* Dark overlay for contrast & cozy evening glow */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          {/* Phần 1: ĐỐI TƯỢNG PHỤC VỤ */}
          <div>
            <div className="mb-8">
              <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                ĐỐI TƯỢNG PHỤC VỤ
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                Phù hợp với ai?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Target 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex items-start gap-4 hover:bg-white/15 transition-all">
                <div className="w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5 font-serif text-xl">
                  🍂
                </div>
                <div>
                  <h4 className="font-medium text-white text-base mb-1.5">
                    Du khách cá nhân & Cặp đôi
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
                    Tìm kiếm trải nghiệm lãng mạn, yên tĩnh, chữa lành giữa không khí dịu mát của phố sương.
                  </p>
                </div>
              </div>

              {/* Target 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex items-start gap-4 hover:bg-white/15 transition-all">
                <div className="w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5 font-serif text-xl">
                  🏡
                </div>
                <div>
                  <h4 className="font-medium text-white text-base mb-1.5">
                    Nhóm bạn & Gia đình
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
                    Cần không gian riêng tư, ấm cúng, có sân vườn nướng BBQ và đầy đủ tiện nghi sinh hoạt chung.
                  </p>
                </div>
              </div>

              {/* Target 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex items-start gap-4 hover:bg-white/15 transition-all">
                <div className="w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5 font-serif text-xl">
                  💼
                </div>
                <div>
                  <h4 className="font-medium text-white text-base mb-1.5">
                    Doanh nhân & Tổ chức
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
                    Cần đặt villa nghỉ dưỡng biệt lập kết hợp làm việc từ xa, team retreat và hội thảo riêng tư.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Phần 2: SỨC CHỨA LINH ĐỘNG */}
          <div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-2.5 max-w-2xl">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Sức chứa linh động theo nhu cầu từ 2 – 36 người
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
                  Dù bạn đi một mình, đi cùng người thương, gia đình sum vầy hay nhóm bạn và công ty tổ chức đoàn đông – chúng tôi luôn có giải pháp phòng nghỉ lẻ hoặc thuê nguyên căn villa biệt lập từ 2 đến 36 người với đầy đủ bếp nấu, phòng sinh hoạt và sân BBQ riêng tư.
                </p>
              </div>

              {/* 3 Capacity Badges */}
              <div className="grid grid-cols-3 gap-3 shrink-0 w-full lg:w-auto">
                <div className="px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/15 transition-all shadow-lg">
                  <span className="block text-[11px] text-emerald-300 font-semibold mb-1">Cặp đôi / Bạn bè</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white block">2 – 4</span>
                  <span className="block text-[11px] text-stone-300/80 mt-0.5 font-light">người / phòng</span>
                </div>
                <div className="px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/15 transition-all shadow-lg">
                  <span className="block text-[11px] text-emerald-300 font-semibold mb-1">Gia đình ấm cúng</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white block">4 – 8</span>
                  <span className="block text-[11px] text-stone-300/80 mt-0.5 font-light">người / phòng</span>
                </div>
                <div className="px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:bg-white/15 transition-all shadow-lg">
                  <span className="block text-[11px] text-emerald-300 font-semibold mb-1">Nguyên căn / Villa</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white block">10 – 36</span>
                  <span className="block text-[11px] text-stone-300/80 mt-0.5 font-light">người / đoàn</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION "CÁC LOẠI PHÒNG & KHOẢNH KHẮC TẠI NGỦ ẤM" */}
      <section id="service" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

          {/* Phần 1: Các dạng view phòng đặc trưng */}
          <div>
            <div className="mb-6 sm:mb-8 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal tracking-tight">
                  Các dạng view phòng đặc trưng
                </h3>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phần 2: Khoảnh khắc tại Ngủ Ấm (Gallery Carousel) */}
          <div id="gallery" className="pt-10 sm:pt-14 border-t border-[#EDE4D5]">
            {/* Section Heading Center */}
            <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1.5">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-tight tracking-tight">
                Khoảnh khắc tại Ngủ Ấm
              </h2>

              <p className="text-[#5C534E] text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-light">
                Cùng nhìn ngắm những góc nhỏ xinh và không gian thực tế của chúng tôi qua những hình ảnh dưới đây.
              </p>
            </div>

            {/* 3D Coverflow Card Carousel */}
            <GalleryCarousel onOpenBooking={openBookingFor} />
          </div>

        </div>
      </section>

      {/* 8. SECTION CTA BANNER ("Sẵn sàng cho một kỳ nghỉ tại Đà Lạt?") */}
      <section id='contact-us' className="relative bg-[#1A3B2F] text-white py-16 sm:py-20 overflow-hidden">

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
      <Footer />

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
