'use client'

import React from 'react'
import { UserOutlined, HomeOutlined, GlobalOutlined } from '@ant-design/icons'

const targets = [
    {
        icon: UserOutlined,
        title: 'Du khách cá nhân & Cặp đôi',
        desc: 'Tìm kiếm trải nghiệm lãng mạn, yên tĩnh, chữa lành giữa không khí dịu mát của phố sương.',
    },
    {
        icon: HomeOutlined,
        title: 'Nhóm bạn & Gia đình',
        desc: 'Cần không gian riêng tư, ấm cúng, có sân vườn nướng BBQ và đầy đủ tiện nghi sinh hoạt chung.',
    },
    {
        icon: GlobalOutlined,
        title: 'Doanh nhân & Tổ chức',
        desc: 'Cần đặt villa nghỉ dưỡng biệt lập kết hợp làm việc từ xa, team retreat và hội thảo riêng tư.',
    },
]

const capacities = [
    { label: 'Cặp đôi / Bạn bè', range: '2 – 4', unit: 'người / phòng' },
    { label: 'Gia đình ấm cúng', range: '4 – 8', unit: 'người / phòng' },
    { label: 'Nguyên căn / Villa', range: '10 – 36', unit: 'người / đoàn' },
]

const TypeOfCustomer = () => {
    return (
        <section
            className="relative z-0 py-16 sm:py-20 lg:py-24 overflow-hidden bg-fixed bg-center bg-cover [clip-path:inset(0)]"
            style={{ backgroundImage: "url('/images/banner-img.jpg')" }}
        >
            <div
                className="fixed inset-0 pointer-events-none bg-center bg-cover -z-20"
                style={{ backgroundImage: "url('/images/banner-img.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/70 pointer-events-none -z-10" />

            <div className="relative z-10 max-w-7xl 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">

                {/* Phần 1: ĐỐI TƯỢNG PHỤC VỤ */}
                <div>
                    <div data-reveal="" className="mb-8">
                        <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                            ĐỐI TƯỢNG PHỤC VỤ
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                            Phù hợp với ai?
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {targets.map((t, i) => {
                            const Icon = t.icon
                            return (
                                <div
                                    key={t.title}
                                    data-reveal="flip"
                                    data-reveal-delay={120 + i * 120}
                                    className="h-full"
                                >
                                    <div className="h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex items-start gap-4 hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300">
                                        <div className="w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5 text-xl">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white text-base mb-1.5">{t.title}</h4>
                                            <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
                                                {t.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Divider vẽ ra từ trái sang phải */}
                <div data-reveal="grow-x" data-reveal-delay="200" className="border-t border-white/20" />

                {/* Phần 2: SỨC CHỨA LINH ĐỘNG */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div data-reveal="left" className="space-y-2.5 max-w-2xl">
                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                            Sức chứa linh động theo nhu cầu từ 2 – 36 người
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
                            Dù bạn đi một mình, đi cùng người thương, gia đình sum vầy hay nhóm bạn và công ty tổ chức đoàn đông – chúng tôi luôn có giải pháp phòng nghỉ lẻ hoặc thuê nguyên căn villa biệt lập từ 2 đến 36 người với đầy đủ bếp nấu, phòng sinh hoạt và sân BBQ riêng tư.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 sm:gap-6 shrink-0 w-full lg:w-auto">
                        {capacities.map((c, i) => (
                            <div
                                key={c.label}
                                data-reveal="up"
                                data-reveal-delay={250 + i * 130}
                                className="text-center drop-shadow-md"
                            >
                                <span className="block text-xs sm:text-sm text-emerald-300 font-medium mb-1">{c.label}</span>
                                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">{c.range}</span>
                                <span className="block text-xs text-stone-200/90 mt-1 font-light">{c.unit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TypeOfCustomer