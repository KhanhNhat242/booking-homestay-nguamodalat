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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
            className="relative h-[88svh] min-h-[520px] w-full select-none overflow-hidden bg-neutral-950"
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
                        <div className="absolute bottom-[24%] left-[7%] right-[7%] max-w-xl text-white">
                            <Reveal show={play} delay={700}>
                                <span className="inline-block border-b border-white/70 pb-1.5 text-xs uppercase tracking-[0.3em] md:text-sm">
                                    {s.eyebrow}
                                </span>
                            </Reveal>

                            <div className="mt-5">
                                {s.title.map((line, k) => (
                                    <Reveal key={line} show={play} delay={850 + k * 150}>
                                        <h2 className={`${playfair.className} text-4xl font-extrabold italic uppercase leading-[1.1] drop-shadow-lg sm:text-5xl md:text-7xl`}>
                                            {line}
                                        </h2>
                                    </Reveal>
                                ))}
                            </div>

                            <Reveal show={play} delay={1150}>
                                <h3 className="mt-3 text-base font-medium italic uppercase tracking-[0.2em] text-amber-200 md:text-xl">
                                    {s.subtitle}
                                </h3>
                            </Reveal>

                            <Reveal show={play} delay={1300}>
                                <p className="mt-4 hidden max-w-md text-base leading-relaxed text-white/85 md:block">
                                    {s.desc}
                                </p>
                            </Reveal>

                            <Reveal show={play} delay={1450}>
                                <Link
                                    href={s.href}
                                    className="group mt-7 inline-flex items-center gap-3 rounded-full border border-white px-7 py-3 text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black md:text-sm"
                                >
                                    Xem thêm
                                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                                        →
                                    </span>
                                </Link>
                            </Reveal>
                        </div>
                    </article>
                )
            })}

            {/* Thanh điều khiển */}
            <div className="absolute inset-x-0 bottom-0 z-40 flex items-end justify-between gap-6 px-[7%] pb-7 md:pb-10">
                {/* Tab đánh số + progress */}
                <div className="flex max-w-2xl flex-1 gap-3 md:gap-6">
                    {slides.map((s, i) => {
                        const on = ready && i === current
                        return (
                            <button
                                key={s.src}
                                onClick={() => goTo(i)}
                                aria-label={`Đến slide ${i + 1}`}
                                className="group flex-1 text-left text-white"
                            >
                                <span
                                    className={`flex items-baseline gap-2 text-xs tracking-widest transition-opacity md:text-sm ${i === current ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'
                                        }`}
                                >
                                    <span>0{i + 1}</span>
                                    <span className="hidden truncate uppercase lg:block">{s.title.join(' ')}</span>
                                </span>
                                <span className="mt-3 block h-[2px] w-full overflow-hidden bg-white/30">
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
                <div className="hidden gap-3 md:flex">
                    {(['left', 'right'] as const).map((d) => (
                        <button
                            key={d}
                            onClick={d === 'left' ? prevSlide : next}
                            aria-label={d === 'left' ? 'Slide trước' : 'Slide sau'}
                            className="grid h-12 w-12 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
                        >
                            <Arrow dir={d} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}