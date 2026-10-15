'use client'

import React, { useState, useEffect, useRef } from 'react'

export interface FeatureItem {
  id: string
  icon: React.ReactNode
  title: string
  desc: string
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 'feature-1',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Đa dạng loại hình chỗ ở',
    desc: 'Homestay có gu, khách sạn trung tâm, villa biệt lập view rừng – phù hợp với từng nhu cầu khác nhau.',
  },
  {
    id: 'feature-2',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Hỗ trợ tư vấn 1:1',
    desc: 'Giúp bạn chọn được chỗ ở phù hợp nhất với lịch trình, số lượng người và phong cách nghỉ dưỡng riêng.',
  },
  {
    id: 'feature-3',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Thông tin rõ ràng',
    desc: 'Cam kết thông tin trung thực, hình ảnh chụp thực tế từng góc phòng, minh bạch chi phí không phụ phí ẩn.',
  },
  {
    id: 'feature-4',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Bảo mật – Hỗ trợ tận tâm',
    desc: 'Bảo mật tuyệt đối thông tin, luôn đồng hành và hỗ trợ khách hàng từ khi đặt chỗ đến lúc check-out.',
  },
  {
    id: 'feature-5',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Vị trí chọn lọc & Đắc địa',
    desc: 'Gần trung tâm chợ đêm hoặc view thung lũng đồi thông, thuận tiện khám phá và tận hưởng không khí Đà Lạt.',
  },
  {
    id: 'feature-6',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ưu đãi & Trải nghiệm trọn vẹn',
    desc: 'Báo giá nhanh chóng, chính sách giá tốt độc quyền cùng hỗ trợ gợi ý lịch trình và tiện ích BBQ riêng tư.',
  },
]

export default function FeaturesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(1200)

  // Double the list for seamless infinite loop
  const duplicatedFeatures = [...defaultFeatures, ...defaultFeatures]

  useEffect(() => {
    if (!containerRef.current) return

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  // Responsive: 3 items on desktop, 2 on tablet, 1 on mobile
  const gap = 20
  let visibleCount = 3
  if (containerWidth < 640) {
    visibleCount = 1
  } else if (containerWidth < 1024) {
    visibleCount = 2
  } else {
    visibleCount = 3
  }

  // Exact card width so that precisely visibleCount cards fit in the container
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - (visibleCount - 1) * gap) / visibleCount
      : 380

  // Total width to translate for 1 full set of items
  const totalScrollDistance = defaultFeatures.length * (cardWidth + gap)

  // Smooth pace: each card takes ~5s to scroll across
  const duration = defaultFeatures.length * 5.2

  return (
    <div
      ref={containerRef}
      className="features-carousel-wrap relative w-full overflow-hidden py-2 select-none"
    >
      <style>{`
        @keyframes features-marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalScrollDistance}px);
          }
        }
        .features-marquee-track {
          display: flex;
          width: max-content;
          animation: features-marquee-rtl ${duration}s linear infinite;
          will-change: transform;
        }
        .features-carousel-wrap:hover .features-marquee-track {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Subtle edge fade overlays for ultra-smooth entrance & exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

      {/* Continuous Marquee Track */}
      <div className="features-marquee-track">
        {duplicatedFeatures.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            style={{
              width: `${cardWidth}px`,
              marginRight: `${gap}px`,
            }}
            className="shrink-0"
          >
            <div className="bg-white rounded-2xl 2xl:rounded-3xl p-6 2xl:p-8 border border-[#EDE4D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group/card hover:-translate-y-1 h-full min-h-[210px] 2xl:min-h-[240px] cursor-pointer">
              <div>
                <div className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-xl 2xl:rounded-2xl bg-[#FAF4ED] text-[#8D4427] flex items-center justify-center mb-4 group-hover/card:bg-[#8D4427] group-hover/card:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-serif text-lg 2xl:text-xl font-medium text-[#2A2421] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm 2xl:text-base text-[#5C534E] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
