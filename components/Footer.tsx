'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    PhoneOutlined,
    MailOutlined,
    InstagramOutlined,
    EnvironmentOutlined,
    ArrowRightOutlined
} from '@ant-design/icons'

const Footer = () => {
    const googleMapUrl =
        'https://www.google.com/maps/search/+l,+%C4%90%C3%A0+L%E1%BA%A1t,+Vietnam,+66106/@11.9280975,108.3977834,27341m/data=!3m2!1e3!4b1!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D'

    return (
        <footer className="w-full bg-[#fbfbfa] text-neutral-800 border-t border-neutral-200/80 pt-12 md:pt-16 pb-8 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 3 Cột bằng nhau trên Desktop / Tablet ngang */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
                    {/* Cột 1: Logo lớn bên trái */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <Link
                            href="/"
                            className="inline-block transition-transform hover:opacity-95 active:scale-98"
                        >
                            <Image
                                src="/images/footer-img.jpg"
                                alt="Ngựa Mơ Đà Lạt Logo"
                                width={150}
                                height={80}
                                priority
                                className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto object-contain rounded-lg"
                            />
                        </Link>
                    </div>

                    {/* Cột 2: Thông tin liên hệ ở giữa */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-wide mb-5 relative inline-block">
                            Thông tin liên hệ
                            <span className="block h-[2.5px] w-12 bg-[#01796F] rounded-full mt-2 mx-auto md:mx-0" />
                        </h3>

                        <ul className="space-y-4 text-sm sm:text-base w-full max-w-sm">
                            {/* Hotline */}
                            <li>
                                <a
                                    href="tel:0911942968"
                                    className="group flex items-center justify-center md:justify-start gap-3 text-neutral-700 hover:text-[#01796F] transition-colors p-2 rounded-lg hover:bg-neutral-100/70"
                                >
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01796F]/10 text-[#01796F] group-hover:bg-[#01796F] group-hover:text-white transition-all duration-200 shrink-0">
                                        <PhoneOutlined className="text-lg" />
                                    </span>
                                    <div className="flex flex-col text-left">
                                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Hotline</span>
                                        <span className="font-semibold text-neutral-800 group-hover:text-[#01796F]">
                                            0911 942 968
                                        </span>
                                    </div>
                                </a>
                            </li>

                            {/* Email */}
                            <li>
                                <a
                                    href="mailto:nguamodalat49@gmail.com"
                                    className="group flex items-center justify-center md:justify-start gap-3 text-neutral-700 hover:text-[#01796F] transition-colors p-2 rounded-lg hover:bg-neutral-100/70"
                                >
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01796F]/10 text-[#01796F] group-hover:bg-[#01796F] group-hover:text-white transition-all duration-200 shrink-0">
                                        <MailOutlined className="text-lg" />
                                    </span>
                                    <div className="flex flex-col text-left">
                                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</span>
                                        <span className="font-semibold text-neutral-800 group-hover:text-[#01796F] break-all">
                                            nguamodalat49@gmail.com
                                        </span>
                                    </div>
                                </a>
                            </li>

                            {/* Instagram */}
                            <li>
                                <a
                                    href="https://www.instagram.com/nguamodalat/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center md:justify-start gap-3 text-neutral-700 hover:text-[#01796F] transition-colors p-2 rounded-lg hover:bg-neutral-100/70"
                                >
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01796F]/10 text-[#01796F] group-hover:bg-[#01796F] group-hover:text-white transition-all duration-200 shrink-0">
                                        <InstagramOutlined className="text-lg" />
                                    </span>
                                    <div className="flex flex-col text-left">
                                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Instagram</span>
                                        <span className="font-semibold text-neutral-800 group-hover:text-[#01796F]">
                                            @nguamodalat
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 3: Thông tin địa chỉ & Bản đồ Google Maps nhúng link */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-wide mb-5 relative inline-block">
                            Địa chỉ
                            <span className="block h-[2.5px] w-12 bg-[#01796F] rounded-full mt-2 mx-auto md:mx-0" />
                        </h3>

                        {/* Text tiêu đề địa chỉ */}
                        <div className="flex items-start gap-2 text-neutral-700 text-sm sm:text-base mb-3">
                            <EnvironmentOutlined className="text-[#01796F] text-lg mt-0.5 shrink-0" />
                            <span className="font-medium">
                                Đà Lạt, Lâm Đồng, Việt Nam
                            </span>
                        </div>

                        {/* Hình ảnh bản đồ nhúng link Google Map */}
                        <a
                            href={googleMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block w-full max-w-sm rounded-xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#01796F]/40"
                            title="Bấm để xem vị trí trên Google Maps"
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                                <Image
                                    src="/images/map-location.jpg"
                                    alt="Bản đồ Ngựa Mơ Đà Lạt"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                                />
                                {/* Overlay mờ nhẹ khi hover */}
                                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/25 transition-colors duration-300" />

                                {/* Badge nút bấm xem bản đồ */}
                                <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-neutral-800 text-xs font-semibold shadow-md backdrop-blur-sm group-hover:bg-[#01796F] group-hover:text-white transition-colors duration-200">
                                    <span>Xem bản đồ</span>
                                    <ArrowRightOutlined className="text-[10px] transition-transform group-hover:translate-x-0.5" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Dòng bản quyền phía dưới */}
                <div className="mt-12 pt-6 border-t border-neutral-200/70 text-center text-xs sm:text-sm text-neutral-500">
                    <p>
                        © {new Date().getFullYear()} Ngựa Mơ Đà Lạt Homestay. Tất cả các quyền được bảo lưu.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
