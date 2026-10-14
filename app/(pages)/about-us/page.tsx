'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
    CalendarOutlined,
    ArrowRightOutlined,
    CompassOutlined,
    HeartOutlined,
    SafetyCertificateOutlined,
    PhoneOutlined,
} from '@ant-design/icons'

const coreValues = [
    {
        icon: CompassOutlined,
        step: '01',
        title: 'Không Gian Tĩnh Lặng & View Ôm Trọn Rừng Thông',
        description:
            'Tọa lạc giữa sườn đồi thơ mộng của Đà Lạt, từng căn phòng đều sở hữu ô kính panorama khoáng đạt, đón trọn ánh nắng mai và tiếng thông reo rì rào, mang lại sự chữa lành tự nhiên cho tâm hồn.',
    },
    {
        icon: HeartOutlined,
        step: '02',
        title: 'Trải Nghiệm Thân Thuộc & Tận Tâm Như Ở Nhà',
        description:
            'Chúng tôi không chỉ cung cấp một chỗ ngủ, mà trao gửi sự ấm áp từ ly trà nóng đón khách đến sự hỗ trợ chu đáo 24/7. Mọi chi tiết nhỏ đều được chăm chút để kỳ nghỉ của bạn diễn ra suôn sẻ nhất.',
    },
    {
        icon: SafetyCertificateOutlined,
        step: '03',
        title: 'Chất Lượng Thực Tế & Minh Bạch Tuyệt Đối',
        description:
            '100% hình ảnh và thông tin phòng đúng thực tế, không chi phí ẩn, cam kết mang đến giá trị nghỉ dưỡng xứng đáng và trọn vẹn nhất cho từng chuyến đi của bạn cùng gia đình hay người thương.',
    },
]

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white text-neutral-800 antialiased selection:bg-[#01796F] selection:text-white">
            {/* Header điều hướng */}
            <Header />

            <main className="flex-1">
                {/* ================= SECTION 1: HERO BANNER ================= */}
                {/* Ảnh nền relative, phủ dark overlay, content chữ trắng nổi bật */}
                <section className="relative w-full h-[60vh] min-h-[460px] md:h-[70vh] flex items-center justify-center overflow-hidden">
                    {/* Ảnh nền background */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="/images/view1.jpg"
                            alt="Không gian Ngựa Mơ Đà Lạt view rừng thông"
                            fill
                            priority
                            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
                        />
                        {/* Lớp overlay tối làm nổi bật text content phía trên */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
                    </div>

                    {/* Content nổi lên trên ảnh nền, chữ màu trắng */}
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase bg-white/15 backdrop-blur-md border border-white/20 mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                            Về Chúng Tôi
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-6 drop-shadow-md">
                            Chốn Dừng Chân Bình Yên Giữa Lòng Rừng Thông
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow">
                            Nơi mỗi sớm mai thức giấc trong sương mù phố núi, tận hưởng sự tĩnh lặng và tìm lại những phút giây an yên trọn vẹn nhất.
                        </p>
                    </div>
                </section>

                {/* ================= SECTION 2: DESCRIPTION (CÂU CHUYỆN THƯƠNG HIỆU) ================= */}
                <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-4xl mx-auto">
                        {/* Tag nhỏ mở đầu */}
                        <div className="space-y-6 text-neutral-700 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6">
                                Khởi nguồn từ tình yêu với sương mờ và những nốt nhạc thông reo
                            </h2>

                            <p className="text-justify md:text-left">
                                <span className="font-semibold text-neutral-900">Ngủ ấm ở Đà Lạt</span> được ấp ủ từ niềm say mê nét bình dị, trong trẻo và lãng mạn của xứ sở ngàn hoa. Giữa nhịp sống vội vã nơi phố thị hối hả, chúng tôi mong muốn tạo nên một chốn trú ẩn thực thụ — nơi bạn có thể chậm rãi ngắm nhìn ánh bình minh rọi qua kẽ lá, nhâm nhi tách trà thơm bên khung cửa sổ và lắng nghe hơi thở dịu êm của thiên nhiên.
                            </p>

                            <p className="text-justify md:text-left text-neutral-600">
                                Từng không gian tại nơi này được chăm chút tỉ mỉ từ vật liệu gỗ mộc ấm áp, ánh đèn vàng dịu mắt cho đến tầm nhìn rộng mở hướng về đồi thông xanh ngát. Dù bạn đi một mình để tìm kiếm nguồn cảm hứng mới, đi cùng người thương để đánh dấu những khoảnh khắc đáng nhớ, hay tụ họp cùng bạn bè và gia đình, Ngựa Mơ luôn mở rộng cửa đón bạn như một người thân trở về nhà.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ================= SECTION 3: 3 CỘT THẺ LI (GIÁ TRỊ CỐT LÕI) ================= */}
                <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50/70 border-y border-neutral-150">
                    <div className="max-w-6xl mx-auto">
                        {/* Header của Section 3 */}
                        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                            {/* <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-[#01796F] bg-[#01796F]/10 px-3.5 py-1.5 rounded-full mb-3">
                                Giá Trị Khác Biệt
                            </span> */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                                Giá Trị Khác Biệt
                            </h2>
                            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                                Chúng tôi mang lại trải nghiệm nghỉ dưỡng hoàn hảo nhất thông qua ba tiêu chí vàng được giữ gìn trọn vẹn qua từng ngày.
                            </p>
                        </div>

                        {/* Danh sách 3 cột tương ứng với 3 phần tử thẻ <li> */}
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
                            {coreValues.map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                    <li
                                        key={index}
                                        className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            {/* Header Card: Icon và Số thứ tự */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="w-14 h-14 rounded-2xl bg-[#01796F]/10 text-[#01796F] flex items-center justify-center text-2xl group-hover:bg-[#01796F] group-hover:text-white transition-colors duration-300">
                                                    <IconComponent />
                                                </div>
                                                <span className="text-2xl font-black text-neutral-200 group-hover:text-[#01796F]/30 transition-colors">
                                                    {item.step}
                                                </span>
                                            </div>

                                            {/* Tiêu đề cột */}
                                            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3.5 leading-snug group-hover:text-[#01796F] transition-colors">
                                                {item.title}
                                            </h3>

                                            {/* Nội dung mô tả */}
                                            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>

                {/* ================= SECTION 4: CALL TO ACTION (ĐẶT PHÒNG NGAY) ================= */}
                <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#004d46] via-[#01796F] to-[#028b7e] p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl">
                            {/* Vòng tròn hiệu ứng mờ nền */}
                            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                            <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-black/20 blur-3xl pointer-events-none" />

                            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                                    Sẵn Sàng Cho Chuyến Đi Đáng Nhớ Của Bạn?
                                </h2>

                                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl font-light">
                                    Hãy để chúng tôi đồng hành cùng bạn trên hành trình khám phá và tận hưởng vẻ đẹp thơ mộng của phố núi sương mù.
                                </p>

                                {/* Button Đặt phòng ngay */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                    <a
                                        href="tel:0911942968"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-base sm:text-lg font-bold text-[#01796F] bg-white hover:bg-neutral-100 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
                                    >
                                        <CalendarOutlined className="text-lg" />
                                        <span>Đặt phòng ngay</span>
                                        <ArrowRightOutlined className="text-sm transition-transform group-hover:translate-x-1" />
                                    </a>

                                    <Link
                                        href="/contact-us"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm transition-all duration-200"
                                    >
                                        <PhoneOutlined />
                                        <span>Liên hệ tư vấn</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer chân trang */}
            <Footer />
        </div>
    )
}

export default AboutUs
