'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import BookingModal from '@/components/BookingModal'
import FloatingContact from '@/components/FloatingContact'
import ImageSlider from '@/components/ImageSlider'
import Footer from '@/components/Footer'
import GalleryCarousel from '@/components/GalleryCarousel'
import FeaturesCarousel from '@/components/FeaturesCarousel'
import { UserOutlined, HomeOutlined, GlobalOutlined } from '@ant-design/icons';

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

      {/* 3. SECTION "VỀ CHÚNG TÔI & ĐIỂM NỔI BẬT" */}
      <section id="about-us" className="py-14 sm:py-18 lg:py-20 relative overflow-hidden bg-[#FAF7F2]">
        {/* Left Botanical Wildflower / Dã Quỳ illustration */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 w-28 sm:w-44 pointer-events-none opacity-20 text-[#8D4427]">
          <svg viewBox="0 0 120 220" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M40,210 Q60,130 50,60" />
            <path d="M48,160 Q20,150 15,130 Q35,135 46,145" />
            <path d="M54,130 Q85,125 90,105 Q70,110 52,118" />
            <path d="M50,95 Q25,85 20,65 Q40,70 48,82" />
            <circle cx="50" cy="50" r="10" />
            <path d="M50,40 Q50,22 45,18 Q40,22 45,40" />
            <path d="M60,50 Q78,50 82,45 Q78,40 60,45" />
            <path d="M50,60 Q50,78 55,82 Q60,78 55,60" />
            <path d="M40,50 Q22,50 18,55 Q22,60 40,55" />
            <path d="M57,43 Q70,30 72,25 Q65,27 55,37" />
            <path d="M57,57 Q70,70 72,75 Q65,73 55,63" />
            <path d="M43,57 Q30,70 28,75 Q35,73 45,63" />
            <path d="M43,43 Q30,30 28,25 Q35,27 45,37" />
          </svg>
        </div>

        {/* Right Pine Cone & Needles illustration */}
        <div className="absolute right-0 top-2/3 -translate-y-1/2 w-32 sm:w-48 pointer-events-none opacity-20 text-[#6E645B]">
          <svg viewBox="0 0 140 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M140,20 Q80,25 20,50" />
            <path d="M90,24 Q60,5 30,12" />
            <path d="M90,24 Q70,10 45,2" />
            <path d="M110,22 Q95,5 75,0" />
            <path d="M60,35 Q30,25 10,40" />
            <path d="M60,35 Q40,48 20,60" />
            <path d="M70,30 L70,55" />
            <path d="M70,55 C50,65 45,95 55,120 C60,135 70,145 70,145 C70,145 80,135 85,120 C95,95 90,65 70,55 Z" />
            <path d="M58,72 Q70,82 82,72" />
            <path d="M52,88 Q70,100 88,88" />
            <path d="M50,104 Q70,118 90,104" />
            <path d="M56,120 Q70,132 84,120" />
            <path d="M64,134 Q70,140 76,134" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">

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
                Hệ thống booking homestay, khách sạn và villa cao cấp tại Đà Lạt, được tuyển chọn kỹ lưỡng từ các đối tác uy tín.
                Mang đến không gian lưu trú <strong className="text-[#2A2421] font-semibold"> an toàn – đẹp mắt – chuẩn nghỉ dưỡng </strong>, cho kỳ nghỉ riêng tư và đáng nhớ.
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

          {/* Phần: Điểm Nổi Bật Của Dịch Vụ */}
          <div className="pt-8 sm:pt-10">
            <FeaturesCarousel />
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
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

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
                  <UserOutlined />
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
                  <HomeOutlined />
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
                  <GlobalOutlined />
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
              <div className="grid grid-cols-3 gap-4 sm:gap-6 shrink-0 w-full lg:w-auto">
                <div className="text-center drop-shadow-md">
                  <span className="block text-xs sm:text-sm text-emerald-300 font-medium mb-1">Cặp đôi / Bạn bè</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">2 – 4</span>
                  <span className="block text-xs text-stone-200/90 mt-1 font-light">người / phòng</span>
                </div>
                <div className="text-center drop-shadow-md">
                  <span className="block text-xs sm:text-sm text-emerald-300 font-medium mb-1">Gia đình ấm cúng</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">4 – 8</span>
                  <span className="block text-xs text-stone-200/90 mt-1 font-light">người / phòng</span>
                </div>
                <div className="text-center drop-shadow-md">
                  <span className="block text-xs sm:text-sm text-emerald-300 font-medium mb-1">Nguyên căn / Villa</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">10 – 36</span>
                  <span className="block text-xs text-stone-200/90 mt-1 font-light">người / đoàn</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION "CÁC DẠNG VIEW PHÒNG ĐẶC TRƯNG" */}
      <section id="service" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5] relative overflow-hidden">
        {/* Left Rolling Valley Fog & Morning Mist illustration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-48 pointer-events-none opacity-20 text-[#8D4427]">
          <svg viewBox="0 0 140 220" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M10,30 A18,18 0 0,1 30,10" strokeDasharray="3 3" />
            <path d="M40,20 L55,10" />
            <path d="M25,40 L35,55" />
            <path d="M-10,70 C20,50 60,85 100,65 C120,55 135,70 145,65" />
            <path d="M-10,110 C30,90 70,125 110,105 C130,95 140,110 150,105" />
            <path d="M-10,150 C25,135 65,165 105,145 C125,135 135,150 150,140" />
            <path d="M-10,190 C35,175 75,205 115,185 C130,175 140,185 150,180" />
          </svg>
        </div>

        {/* Right Fern Fronds (Dương xỉ rừng sương) illustration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 sm:w-48 pointer-events-none opacity-20 text-[#6E645B]">
          <svg viewBox="0 0 130 240" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M110,230 Q70,150 50,20" />
            <path d="M98,205 Q70,195 55,202 Q75,185 92,192" />
            <path d="M90,175 Q58,165 42,172 Q64,155 83,162" />
            <path d="M80,145 Q48,135 32,142 Q54,125 73,132" />
            <path d="M72,115 Q40,105 25,112 Q45,95 64,102" />
            <path d="M64,85 Q35,75 22,82 Q40,68 57,74" />
            <path d="M57,58 Q32,48 22,54 Q38,42 52,48" />
            <path d="M52,35 Q35,28 28,32 Q40,24 49,28" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full mb-6 sm:mb-8 flex flex-row items-center justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal tracking-tight">
              Các dạng view phòng đặc trưng
            </h3>
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
      </section>

      {/* 5. SECTION "KHOẢNH KHẮC TẠI NGỦ ẤM" */}
      <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5] relative overflow-hidden">
        {/* Left Maple Leaf Branch illustration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-48 pointer-events-none opacity-20 text-[#8D4427]">
          <svg viewBox="0 0 140 220" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M10,210 Q40,150 70,60" />
            <path d="M45,140 Q80,130 100,140" />
            <path d="M60,90 Q90,75 110,80" />
            <path d="M70,60 L62,45 L50,48 L58,35 L48,25 L65,26 L70,10 L75,26 L92,25 L82,35 L90,48 L78,45 Z" />
            <path d="M100,140 L96,128 L86,132 L92,120 L84,112 L98,112 L102,98 L106,112 L120,112 L112,120 L118,132 L108,128 Z" />
            <path d="M110,80 L107,70 L98,73 L103,63 L96,56 L108,56 L111,44 L114,56 L126,56 L119,63 L124,73 L115,70 Z" />
          </svg>
        </div>

        {/* Right Retro Camera Viewfinder & Memory Frame illustration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-36 sm:w-52 pointer-events-none opacity-20 text-[#6E645B]">
          <svg viewBox="0 0 150 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M30,50 H50 M30,50 V70" strokeWidth="2" />
            <path d="M130,50 H110 M130,50 V70" strokeWidth="2" />
            <path d="M30,160 H50 M30,160 V140" strokeWidth="2" />
            <path d="M130,160 H110 M130,160 V140" strokeWidth="2" />
            <circle cx="80" cy="105" r="22" strokeDasharray="4 4" />
            <circle cx="80" cy="105" r="4" fill="currentColor" />
            <path d="M80,75 V79 M80,131 V135 M50,105 H54 M106,105 H110" />
            <path d="M110,25 L112,32 L119,34 L112,36 L110,43 L108,36 L101,34 L108,32 Z" />
            <path d="M45,20 L46,24 L50,25 L46,26 L45,30 L44,26 L40,25 L44,24 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* Section Heading Center */}
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
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
