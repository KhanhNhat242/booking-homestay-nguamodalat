import React from 'react'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
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
                            <li><a href="#about-us" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                            <li><a href="#service" className="hover:text-white transition-colors">Dịch vụ</a></li>
                            <li><a href="#contact-us" className="hover:text-white transition-colors">Liên hệ</a></li>
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
    )
}

export default Footer