'use client'

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'motion/react'
import FeaturesCarousel from './FeaturesCarousel'

// Cha điều phối, các con hiện lần lượt cách nhau 0.15s
const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const AboutUs = () => {
    return (
        <section id="about-us" className="py-14 sm:py-16 lg:py-20 relative overflow-hidden bg-[#FAF7F2]">
            {/* ... 2 khối SVG trang trí trái/phải giữ nguyên ... */}

            <div className="relative z-10 max-w-7xl 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* Cột trái: chữ hiện lần lượt khi cuộn tới */}
                    <motion.div
                        className="lg:col-span-7 space-y-6"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <motion.div
                            variants={fadeUp}
                            className="flex items-center gap-2 text-[#8D4427] text-xs font-semibold uppercase tracking-wider"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span>VỀ CHÚNG TÔI</span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-normal leading-tight tracking-tight"
                        >
                            Không chỉ là nơi nghỉ chân – Chuẩn gu nghỉ dưỡng tại Đà Lạt
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-[#5C534E] text-base sm:text-lg leading-relaxed font-light"
                        >
                            Hệ thống booking homestay, khách sạn và villa cao cấp tại Đà Lạt, được tuyển chọn kỹ lưỡng từ các đối tác uy tín.
                            Mang đến không gian lưu trú <strong className="text-[#2A2421] font-semibold"> an toàn – đẹp mắt – chuẩn nghỉ dưỡng </strong>, cho kỳ nghỉ riêng tư và đáng nhớ.
                        </motion.p>
                    </motion.div>

                    {/* Cột phải: ảnh zoom nhẹ khi cuộn tới */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EDE4D5] aspect-[4/3] w-full group"
                        >
                            <Image
                                src="/images/about-homestay.jpg"
                                alt="Không gian lưu trú chọn lọc tại Ngựa Mơ Đà Lạt"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* SVG trang trí giữ nguyên */}
                    </div>
                </div>

                {/* Điểm nổi bật */}
                <motion.div
                    className="pt-8 sm:pt-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <FeaturesCarousel />
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs