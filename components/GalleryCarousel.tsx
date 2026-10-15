'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  title: string
  location: string
  desc: string
  image: string
  space: string
  temp: string
  rating: string
  badgeText: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Sân Vườn Bếp Lửa',
    location: 'Ngủ Ấm • Khuôn viên riêng tư',
    desc: 'Ngả lưng bên bếp lửa bập bùng giữa trời đêm se lạnh, nhâm nhi tách trà nóng ngắm sương mù giăng lối.',
    image: '/images/sanpham3.jpg',
    space: 'Sân vườn',
    temp: '15°C',
    rating: '5.0 ★',
    badgeText: 'Ấm áp bên lửa',
  },
  {
    id: 2,
    title: 'Chòi Gỗ BBQ',
    location: 'Ngủ Ấm • Không gian chung',
    desc: 'Bàn tiệc gỗ dài giăng dây đèn ấm cúng dưới mái ngói, nơi cả gia đình hay nhóm bạn quây quần trò chuyện.',
    image: '/images/sanpham5.jpg',
    space: 'Chòi gỗ',
    temp: '16°C',
    rating: '4.9 ★',
    badgeText: 'Tiệc nướng BBQ',
  },
  {
    id: 3,
    title: 'Phòng Nghỉ Netflix',
    location: 'Ngủ Ấm • Phòng nghỉ tiện nghi',
    desc: 'Phòng ốp gỗ ấm cúng trang bị màn chiếu xem phim cực chill, góc đọc sách ngập tràn ánh sáng tự nhiên.',
    image: '/images/sanpham1.jpg',
    space: 'Phòng riêng',
    temp: '20°C',
    rating: '5.0 ★',
    badgeText: 'Nghỉ dưỡng chill',
  },
  {
    id: 4,
    title: 'Bếp Ấm Gia Đình',
    location: 'Ngủ Ấm • Bếp nấu đầy đủ',
    desc: 'Bếp riêng có sẵn tủ lạnh, gia vị và bàn ăn tròn, cho bạn cảm giác thảnh thơi tự nấu như đang ở nhà.',
    image: '/images/sanpham2.jpg',
    space: 'Bếp tiện nghi',
    temp: '22°C',
    rating: '4.9 ★',
    badgeText: 'Tự tay nấu nướng',
  },
  {
    id: 5,
    title: 'Toàn Cảnh Sân Vườn',
    location: 'Ngủ Ấm • Khuôn viên hoa lá',
    desc: 'Khuôn viên xanh mát với cỏ cây hoa lá đặc trưng của Đà Lạt, đón trọn bầu không khí trong lành buổi sớm.',
    image: '/images/sanpham4.jpg',
    space: 'Khuôn viên',
    temp: '17°C',
    rating: '5.0 ★',
    badgeText: 'Gần gũi thiên nhiên',
  },
  {
    id: 6,
    title: 'Ban Công View Rừng',
    location: 'Ngủ Ấm • Tầm nhìn thung lũng',
    desc: 'Ban công ngắm trọn đại ngàn thông reo xanh mướt, đón từng đợt gió mát lành và mây sương bảng lảng.',
    image: '/images/viewrungthong.jpg',
    space: 'View rừng',
    temp: '14°C',
    rating: '5.0 ★',
    badgeText: 'Chữa lành phố sương',
  },
  {
    id: 7,
    title: 'Kinh Đô Ánh Sáng',
    location: 'Ngủ Ấm • View thung lũng hoa',
    desc: 'Chiêm ngưỡng hàng ngàn ánh đèn nhà lồng thắp sáng thung lũng khi đêm buông, đẹp tựa biển sao lấp lánh.',
    image: '/images/viewnhalong.jpg',
    space: 'View đêm',
    temp: '15°C',
    rating: '5.0 ★',
    badgeText: 'Lãng mạn về đêm',
  },
]

interface GalleryCarouselProps {
  onOpenBooking?: (roomName: string) => void
}

export default function GalleryCarousel({ onOpenBooking }: GalleryCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [windowWidth, setWindowWidth] = useState(1200)
  const touchX = useRef<number | null>(null)
  const total = galleryItems.length

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  // Phím mũi tên trái / phải
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Tính vị trí offset vòng tròn [-floor(total/2) ... +floor(total/2)]
  const getOffset = (index: number) => {
    let offset = (index - current) % total
    if (offset > Math.floor(total / 2)) offset -= total
    if (offset < -Math.floor(total / 2)) offset += total
    return offset
  }

  // Kiểu dáng 3D Coverflow cho từng card mở rộng chạm tới nút điều hướng
  const getCardStyle = (offset: number) => {
    const abs = Math.abs(offset)
    if (abs > 2) {
      return {
        transform: `translateX(calc(-50% + ${Math.sign(offset) * 800}px)) scale(0.65)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
      }
    }

    let primarySpacing = 370
    let secondarySpacing = 220

    if (windowWidth < 640) {
      primarySpacing = 135
      secondarySpacing = 95
    } else if (windowWidth < 768) {
      primarySpacing = 210
      secondarySpacing = 130
    } else if (windowWidth < 1024) {
      primarySpacing = 280
      secondarySpacing = 175
    } else if (windowWidth < 1280) {
      primarySpacing = 340
      secondarySpacing = 210
    } else if (windowWidth < 1536) {
      primarySpacing = 390
      secondarySpacing = 240
    } else if (windowWidth < 1920) {
      primarySpacing = 440
      secondarySpacing = 270
    } else {
      primarySpacing = 490
      secondarySpacing = 300
    }

    const x =
      abs === 0
        ? 0
        : abs === 1
          ? Math.sign(offset) * primarySpacing
          : Math.sign(offset) * (primarySpacing + secondarySpacing)

    const scale = abs === 0 ? 1 : abs === 1 ? 0.92 : 0.82
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.45
    const zIndex = 30 - abs * 10

    return {
      transform: `translateX(calc(-50% + ${x}px)) scale(${scale})`,
      opacity,
      zIndex,
      filter: abs === 0 ? 'none' : 'brightness(0.93)',
      pointerEvents: 'auto' as const,
    }
  }

  return (
    <div className="relative w-full overflow-hidden py-1 select-none">
      {/* Vùng Coverflow chứa các cards */}
      <div
        className="relative h-[400px] sm:h-[430px] md:h-[455px] lg:h-[475px] 2xl:h-[505px] [@media(min-width:1920px)]:h-[540px] w-full flex items-center justify-center"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) {
            if (dx < 0) nextSlide()
            else prevSlide()
          }
          touchX.current = null
        }}
      >
        {/* Nút Prev / Next dạng Floating hai bên */}
        <button
          onClick={prevSlide}
          aria-label="Ảnh trước"
          className="absolute left-1 sm:left-2 lg:left-3 2xl:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 2xl:w-14 2xl:h-14 rounded-full bg-white/95 backdrop-blur-md border border-[#EDE4D5] text-[#2A2421] hover:text-[#8D4427] hover:border-[#8D4427] shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Ảnh tiếp theo"
          className="absolute right-1 sm:right-2 lg:right-3 2xl:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 2xl:w-14 2xl:h-14 rounded-full bg-white/95 backdrop-blur-md border border-[#EDE4D5] text-[#2A2421] hover:text-[#8D4427] hover:border-[#8D4427] shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {galleryItems.map((item, index) => {
          const offset = getOffset(index)
          const style = getCardStyle(offset)
          const isCenter = offset === 0

          return (
            <div
              key={item.id}
              onClick={() => {
                if (!isCenter) {
                  setCurrent(index)
                } else {
                  onOpenBooking?.(`Tư vấn: ${item.title}`)
                }
              }}
              style={style}
              className={`absolute top-0 left-1/2 w-[275px] sm:w-[325px] md:w-[365px] lg:w-[395px] xl:w-[415px] 2xl:w-[440px] [@media(min-width:1920px)]:w-[470px] h-[385px] sm:h-[415px] md:h-[440px] lg:h-[460px] 2xl:h-[490px] [@media(min-width:1920px)]:h-[520px] bg-white rounded-[24px] 2xl:rounded-[28px] p-3 sm:p-4 2xl:p-5 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between border border-[#EDE4D5]/80 cursor-pointer ${isCenter
                ? 'shadow-2xl ring-2 ring-[#8D4427]/20 cursor-pointer'
                : 'hover:opacity-90'
                }`}
            >
              {/* Ảnh phía trên */}
              <div className="relative w-full h-48 sm:h-54 md:h-60 lg:h-64 2xl:h-72 [@media(min-width:1920px)]:h-76 rounded-[18px] 2xl:rounded-[22px] overflow-hidden shrink-0 group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, (max-width: 1536px) 440px, 490px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Nội dung chi tiết card */}
              <div className="flex-1 flex flex-col justify-between pt-2.5 2xl:pt-3.5 px-1 pb-0.5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-base sm:text-lg 2xl:text-xl font-bold text-[#2A2421] leading-snug truncate">
                      {item.title}
                    </h3>
                    <span className="text-[11px] 2xl:text-xs font-semibold text-amber-600 shrink-0">
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-[#8D4427] font-medium mt-0.5">
                    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="truncate">{item.location}</span>
                  </div>

                  <p className="text-xs text-[#5C534E] leading-relaxed line-clamp-2 mt-1.5 font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Dòng chân card */}
                <div className="pt-2 border-t border-[#F2ECE4] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8C827A] font-medium">
                    {item.badgeText}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pagination Dots tinh gọn */}
      <div className="mt-3.5 flex items-center justify-center gap-1.5">
        {galleryItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Đến ảnh ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? 'w-6 bg-[#8D4427]' : 'w-1.5 bg-[#D9CEC1] hover:bg-[#8D4427]/60'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
