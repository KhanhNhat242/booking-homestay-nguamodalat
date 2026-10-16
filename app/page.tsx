'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import BookingModal from '@/components/BookingModal'
import ImageSlider from '@/components/ImageSlider'
import Footer from '@/components/Footer'
import AboutUs from '@/components/AboutUs'
import TypeOfCustomer from '@/components/TypeOfCustomer'
import Service from '@/components/Service'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('Phòng ấm áp')

  const openBookingFor = (roomName: string) => {
    setSelectedRoom(roomName)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A2421] selection:bg-[#8D4427]/20 selection:text-[#8D4427]">
      <Header onOpenBooking={() => openBookingFor('Tư vấn đặt phòng')} />

      <div id="home">
        <ImageSlider />
      </div>

      <AboutUs />
      <TypeOfCustomer />
      <Service />

      {/* 8. SECTION CTA BANNER ("Sẵn sàng cho một kỳ nghỉ tại Đà Lạt?") */}
      <section id="contact-us" className="relative bg-[#1A3B2F] text-white py-16 sm:py-20 overflow-hidden">

        {/* Cành thông bên trái: wrapper giữ opacity + bồng bềnh, svg bên trong lo phần trượt vào */}
        <div className="absolute left-0 top-0 bottom-0 w-36 sm:w-52 pointer-events-none opacity-25 text-emerald-200 deco-float">
          <svg data-reveal="left" data-reveal-delay="200" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M50,180 V20" />
            <path d="M50,160 Q20,150 10,135 Q35,130 50,145" />
            <path d="M50,140 Q80,130 90,115 Q65,110 50,125" />
            <path d="M50,110 Q20,100 10,85 Q35,80 50,95" />
            <path d="M50,90 Q80,80 90,65 Q65,60 50,75" />
            <path d="M50,60 Q25,50 15,38 Q35,35 50,48" />
            <path d="M50,40 Q75,30 85,20 Q65,18 50,28" />
          </svg>
        </div>

        {/* Dãy núi bên phải */}
        <div className="absolute right-0 bottom-0 top-0 w-64 sm:w-96 pointer-events-none opacity-20 text-white deco-float">
          <svg data-reveal="right" data-reveal-delay="300" viewBox="0 0 300 150" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
            <path d="M0,150 L80,80 L140,110 L220,50 L300,150" />
            <path d="M60,150 L120,95 L170,120 L240,75 L300,125" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2
            data-reveal="blur"
            className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight tracking-tight text-white"
          >
            Sẵn sàng cho một kỳ nghỉ tại Đà Lạt?
          </h2>

          <p
            data-reveal="up"
            data-reveal-delay="150"
            className="text-stone-200/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed"
          >
            Liên hệ với chúng tôi để tìm hiểu thông tin phòng nghỉ và lựa chọn phù hợp cho chuyến đi của bạn.
          </p>

          {/* Lớp ngoài lo reveal, nút bên trong giữ nguyên hover/active */}
          <div data-reveal="up" data-reveal-delay="300" className="pt-4">
            <span className="relative inline-flex">
              {/* Vòng sóng toả ra phía sau nút để thu hút chú ý */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-white/30 motion-safe:animate-ping [animation-duration:2.8s]"
              />
              <button
                type="button"
                onClick={() => openBookingFor('Đặt phòng từ CTA Banner')}
                className="relative inline-flex items-center gap-2.5 bg-white hover:bg-stone-100 text-[#1A3B2F] font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 text-[#1A3B2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Liên hệ đặt phòng</span>
              </button>
            </span>
          </div>
        </div>
      </section>

      {/* 9. SECTION FOOTER */}
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoom={selectedRoom}
      />
    </div>
  )
}
