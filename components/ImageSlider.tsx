'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
    subsets: ['latin', 'vietnamese'], // bắt buộc có 'vietnamese'
    style: ['italic'],
    weight: ['700', '800'],
    display: 'swap',
})

const AUTOPLAY_MS = 6000

const slides = [
    {
        // sanpham5 – chòi gỗ, bàn dài, dây đèn vàng
        src: '/images/sanpham5.jpg',
        eyebrow: 'Không gian chung',
        title: ['Chòi gỗ', 'Đêm Đà Lạt'],
        subtitle: 'Tiệc nướng cùng bạn bè',
        desc: 'Chòi gỗ mái ngói giăng đèn vàng ấm áp, có bàn dài và khu nướng BBQ để cả nhóm quây quần trò chuyện giữa không khí se lạnh của Đà Lạt.',
        href: '/',
    },
    {
        // sanpham3 – sân vườn, bếp lửa, ghế gỗ
        src: '/images/sanpham3.jpg',
        eyebrow: 'Sân vườn riêng',
        title: ['Sân vườn', 'Bếp lửa'],
        subtitle: 'Đêm se lạnh, lửa bập bùng',
        desc: 'Ngả lưng trên ghế gỗ bên bếp lửa, xung quanh là vườn hoa và ánh đèn lồng dịu nhẹ. Khoảng sân nhỏ chỉ dành cho bạn và những người thân yêu.',
        href: '/',
    },
    {
        // sanpham2 – bếp + bàn ăn
        src: '/images/sanpham2.jpg',
        eyebrow: 'Tiện nghi đầy đủ',
        title: ['Bếp riêng', 'Như ở nhà'],
        subtitle: 'Tự tay nấu bữa cơm gia đình',
        desc: 'Bếp rộng rãi có sẵn tủ lạnh, nồi cơm và bàn ăn tròn cho cả nhóm. Tự nấu những món yêu thích sau một ngày khám phá Đà Lạt.',
        href: '/',
    },
    {
        // sanpham1 – phòng ngủ, Netflix, ghế thư giãn
        src: '/images/sanpham1.jpg',
        eyebrow: 'Phòng nghỉ',
        title: ['Phòng ngủ', 'Thư giãn'],
        subtitle: 'Chill cùng Netflix',
        desc: 'Phòng ốp gỗ ấm cúng với màn chiếu Netflix và góc đọc sách bên cửa sổ. Ngủ nướng, xem phim, nghỉ ngơi trọn vẹn.',
        href: '/',
    },
]

const TOTAL = slides.length

/** Hiện nội dung bằng cách trồi lên từ sau lớp mặt nạ overflow-hidden */
function Reveal({
    show,
    delay = 0,
    children,
}: {
    show: boolean
    delay?: number
    children: React.ReactNode
}) {
    return (
        <div className="overflow-hidden py-1">
            <div
                className={`transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                style={{ transitionDelay: show ? `${delay}ms` : '0ms' }}
            >
                {children}
            </div>
        </div>
    )
}

const Arrow = ({ dir }: { dir: 'left' | 'right' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6">
        <path
            d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default function ImageSlider() {
    const [{ current, prev }, setPos] = useState({ current: 0, prev: -1 })
    const [ready, setReady] = useState(false)
    const touchX = useRef<number | null>(null)

    const goTo = useCallback(
        (i: number) => setPos((p) => (p.current === i ? p : { current: i, prev: p.current })),
        []
    )
    const next = useCallback(
        () => setPos((p) => ({ current: (p.current + 1) % TOTAL, prev: p.current })),
        []
    )
    const prevSlide = useCallback(
        () => setPos((p) => ({ current: (p.current - 1 + TOTAL) % TOTAL, prev: p.current })),
        []
    )

    // Kích hoạt hiệu ứng intro sau lần render đầu
    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true))
        return () => cancelAnimationFrame(id)
    }, [])

    // Autoplay: mỗi lần đổi slide (kể cả bấm tay) sẽ tính lại từ đầu
    useEffect(() => {
        if (!ready) return
        const t = setTimeout(next, AUTOPLAY_MS)
        return () => clearTimeout(t)
    }, [current, ready, next])

    // Phím mũi tên
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') next()
            if (e.key === 'ArrowLeft') prevSlide()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [next, prevSlide])

    return (
        <section
            aria-roledescription="carousel"
            className="relative h-[88svh] 2xl:h-[90svh] [@media(min-width:1920px)]:h-[92svh] min-h-[520px] 2xl:min-h-[700px] [@media(min-width:1920px)]:min-h-[820px] [@media(min-width:2560px)]:min-h-[960px] w-full select-none overflow-hidden bg-neutral-950"
            onTouchStart={(e) => {
                touchX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
                if (touchX.current === null) return
                const dx = e.changedTouches[0].clientX - touchX.current
                if (Math.abs(dx) > 50) (dx < 0 ? next : prevSlide)()
                touchX.current = null
            }}
        >
            {slides.map((s, i) => {
                const active = i === current
                const leaving = i === prev
                const play = ready && active

                return (
                    <article
                        key={s.src}
                        aria-hidden={!active}
                        className={
                            active
                                ? 'absolute inset-0 z-20 transition-[clip-path] duration-[1400ms] ease-[cubic-bezier(0.77,0,0.18,1)] [clip-path:inset(0_0_0_0)]'
                                : leaving
                                    ? 'absolute inset-0 z-10 [clip-path:inset(0_0_0_0)]'
                                    : 'absolute inset-0 z-0 [clip-path:inset(0_0_0_100%)]'
                        }
                    >
                        {/* Ảnh nền + Ken Burns */}
                        <Image
                            src={s.src}
                            alt={s.title.join(' ')}
                            fill
                            sizes="100vw"
                            priority={i === 0}
                            className={`object-cover ${play || leaving
                                ? 'scale-100 transition-transform duration-[8000ms] ease-out'
                                : 'scale-[1.15]'
                                }`}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Nội dung */}
                        <div className="absolute bottom-[36%] sm:bottom-[38%] 2xl:bottom-[35%] [@media(min-width:1920px)]:bottom-[34%] left-[7%] right-[7%] 2xl:left-[8%] 2xl:right-[8%] max-w-xl 2xl:max-w-3xl [@media(min-width:1920px)]:max-w-4xl [@media(min-width:2560px)]:max-w-5xl text-white">
                            <div className="mt-5 2xl:mt-7">
                                {s.title.map((line, k) => (
                                    <Reveal key={line} show={play} delay={850 + k * 150}>
                                        <h2 className={`${playfair.className} text-4xl font-extrabold italic uppercase leading-[1.1] 2xl:leading-[1.05] drop-shadow-lg sm:text-5xl md:text-7xl 2xl:text-8xl [@media(min-width:1920px)]:text-[96px] [@media(min-width:2560px)]:text-[112px]`}>
                                            {line}
                                        </h2>
                                    </Reveal>
                                ))}
                            </div>

                            <Reveal show={play} delay={1150}>
                                <h3 className="mt-3 2xl:mt-5 text-base font-medium italic uppercase tracking-[0.2em] 2xl:tracking-[0.25em] text-amber-200 md:text-xl 2xl:text-2xl [@media(min-width:1920px)]:text-3xl">
                                    {s.subtitle}
                                </h3>
                            </Reveal>

                            <Reveal show={play} delay={1300}>
                                <p className="mt-3 2xl:mt-5 text-xs sm:text-sm md:text-base 2xl:text-xl [@media(min-width:1920px)]:text-2xl text-stone-200/90 font-light max-w-lg 2xl:max-w-2xl [@media(min-width:1920px)]:max-w-3xl leading-relaxed drop-shadow line-clamp-2 sm:line-clamp-none">
                                    {s.desc}
                                </p>
                            </Reveal>
                        </div>
                    </article>
                )
            })}

            {/* Thanh điều khiển */}
            <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-6 2xl:gap-12 px-[7%] 2xl:px-[8%] pb-7 md:pb-10 2xl:pb-14 [@media(min-width:1920px)]:pb-16">
                {/* Tab đánh số + progress */}
                <div className="flex max-w-2xl 2xl:max-w-4xl [@media(min-width:1920px)]:max-w-5xl flex-1 gap-3 md:gap-6 2xl:gap-8">
                    {slides.map((s, i) => {
                        const on = ready && i === current
                        return (
                            <button
                                key={s.src}
                                onClick={() => goTo(i)}
                                aria-label={`Đến slide ${i + 1}`}
                                className="group flex-1 text-left text-white cursor-pointer"
                            >
                                <span
                                    className={`flex items-baseline gap-2 text-xs tracking-widest transition-opacity md:text-sm 2xl:text-base [@media(min-width:1920px)]:text-lg ${i === current ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'
                                        }`}
                                >
                                    <span>0{i + 1}</span>
                                    <span className="hidden truncate uppercase lg:block">{s.title.join(' ')}</span>
                                </span>
                                <span className="mt-3 2xl:mt-4 block h-[2px] 2xl:h-[3px] w-full overflow-hidden bg-white/30 rounded-full">
                                    <span
                                        className={`block h-full origin-left bg-white ${on
                                            ? 'scale-x-100 transition-transform ease-linear'
                                            : 'scale-x-0'
                                            }`}
                                        style={on ? { transitionDuration: `${AUTOPLAY_MS}ms` } : undefined}
                                    />
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Nút điều hướng */}
                <div className="hidden gap-3 2xl:gap-4 md:flex">
                    {(['left', 'right'] as const).map((d) => (
                        <button
                            key={d}
                            onClick={d === 'left' ? prevSlide : next}
                            aria-label={d === 'left' ? 'Slide trước' : 'Slide sau'}
                            className="grid h-12 w-12 2xl:h-16 2xl:w-16 [@media(min-width:1920px)]:h-18 [@media(min-width:1920px)]:w-18 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black cursor-pointer shadow-lg"
                        >
                            <Arrow dir={d} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}