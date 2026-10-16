import React from 'react'
import { PhoneOutlined, FacebookOutlined, EnvironmentOutlined, TikTokOutlined } from '@ant-design/icons'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="overflow-x-clip bg-[#854427] text-[#FAF7F2] pt-16 pb-8 border-t border-[#73391F] selection:bg-[#FAF7F2] selection:text-[#1A3B2F]">
            <div className="max-w-7xl 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">

                    {/* Cột 1: Thương hiệu */}
                    <div data-reveal="left" className="md:col-span-4 space-y-4">
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
                                <div className="font-serif text-2xl font-bold tracking-tight text-white leading-none">Ngủ Ấm</div>
                                <div className="text-[10px] tracking-[0.25em] text-white/80 uppercase mt-0.5">Ở ĐÀ LẠT</div>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed max-w-sm font-light">
                            Không gian lưu trú ấm áp, gần gũi và đầy cảm hứng giữa lòng Đà Lạt.
                        </p>
                    </div>

                    {/* Cột 2: Điều hướng */}
                    <div data-reveal="up" data-reveal-delay="120" className="md:col-span-2 space-y-3">
                        <div className="text-xs font-semibold tracking-wider uppercase text-white/70">Điều hướng</div>
                        <ul className="space-y-2 text-xs sm:text-sm text-stone-200/90 font-light">
                            {[
                                { href: '#about-us', label: 'Về chúng tôi' },
                                { href: '#service', label: 'Dịch vụ' },
                                { href: '#contact-us', label: 'Liên hệ' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cột 3: Liên hệ */}
                    <div data-reveal="up" data-reveal-delay="240" className="md:col-span-3 space-y-3">
                        <div className="text-xs font-semibold tracking-wider uppercase text-white/70">Liên hệ</div>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200/90 font-light">
                            <li>
                                <a href="tel:0911942968" className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                                    <span><PhoneOutlined /></span>
                                    <span>091 1942968</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=61559001633103" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                                    <span><FacebookOutlined /></span>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@nguamodalat" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                                    <span><TikTokOutlined /></span>
                                    <span>Tiktok</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/search/+l,+%C4%90%C3%A0+L%E1%BA%A1t,+Vietnam,+66106/@11.928106,108.3977835,17070m/data=!3m2!1e3!4b1" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                                    <span><EnvironmentOutlined /></span>
                                    <span>Đà Lạt, Vietnam, 66106</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 4: "See you in Da Lat" */}
                    <div data-reveal="right" data-reveal-delay="360" className="md:col-span-3 flex flex-col items-start md:items-end justify-center space-y-2">
                        <div className="text-right">
                            <span className="font-serif italic text-3xl sm:text-4xl text-white/90 tracking-wide font-normal block">See you</span>
                            <span className="font-serif italic text-2xl sm:text-3xl text-white/90 tracking-wide font-normal block -mt-1">in Da Lat</span>
                        </div>
                        <div className="w-8 h-10 text-white/70 deco-float">
                            <svg viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20,5 L20,45" />
                                <path d="M20,10 L10,22 L20,20 L8,32 L20,30 L6,42 L34,42 L20,30 L32,32 L20,20 L30,22 Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Đường kẻ vẽ ra từ trái sang phải (thay cho border-b cũ) */}
                <div data-reveal="grow-x" data-reveal-delay="200" className="h-px bg-white/15" />

                {/* Dòng bản quyền + lên đầu trang */}
                <div
                    data-reveal="up"
                    data-reveal-delay="300"
                    className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-200/70 font-light gap-3"
                >
                    <div>© 2025 Ngủ Ấm Ở Đà Lạt. All rights reserved.</div>
                    <button
                        onClick={scrollToTop}
                        className="group hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">↑</span>
                        <span>Lên đầu trang</span>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer