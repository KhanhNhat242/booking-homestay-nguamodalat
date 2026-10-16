import Image from 'next/image'
import React, { useState } from 'react'
import GalleryCarousel from './GalleryCarousel'

const viewRoomCards = [
    {
        title: 'View Rừng Thông',
        tag: 'Hòa mình thiên nhiên',
        desc: 'Thức giấc giữa ngàn thông reo và đón làn sương sớm trong trẻo. Ban công thoáng đãng ôm trọn thung lũng xanh mướt, mang lại cảm giác bình yên và thư thái.',
        capacity: 'Linh động từ 2 – 36 người',
        highlights: [
            'Ban công ngắm trọn đại ngàn thông reo',
            'Không khí trong lành, sương mù lãng đãng',
            'Có sẵn bếp, bàn trà và sân nướng BBQ',
        ],
        image: '/images/viewrungthong.jpg',
    },
    {
        title: 'View Thành Phố',
        tag: 'Nhịp sống phố hoa',
        desc: 'Tầm nhìn bao quát toàn cảnh phố núi Đà Lạt thơ mộng, lấp lánh ánh đèn khi đêm xuống. Vị trí thuận tiện dạo phố, khám phá ẩm thực và các quán cafe trung tâm.',
        capacity: 'Linh động từ 2 – 36 người',
        highlights: [
            'Toàn cảnh phố núi nhộn nhịp & lãng mạn',
            'Thuận tiện di chuyển, gần chợ và trung tâm',
            'Trang bị hiện đại, không gian sáng thoáng',
        ],
        image: '/images/viewthanhpho.jpg',
    },
    {
        title: 'View Nhà Lồng',
        tag: 'Kinh đô ánh sáng',
        desc: 'Chiêm ngưỡng đặc sản thị giác nổi tiếng của Đà Lạt khi màn đêm buông xuống. Thung lũng nhà lồng hoa bừng sáng lung linh như biển sao ngay trước khung cửa sổ.',
        capacity: 'Linh động từ 2 – 36 người',
        highlights: [
            'Ngắm thung lũng đèn lồng rực sáng về đêm',
            'Không gian cực chill cho buổi tối lãng mạn',
            'Phù hợp săn ảnh đêm và sum vầy ấm cúng',
        ],
        image: '/images/viewnhalong.jpg',
    },
]

const Service = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState('Phòng ấm áp')

    const openBookingFor = (roomName: string) => {
        setSelectedRoom(roomName)
        setIsBookingOpen(true)
    }

    return (
        <div>
            <section id="service" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5] relative overflow-hidden">
                {/* Left Rolling Valley Fog & Morning Mist illustration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-44 pointer-events-none opacity-20 text-[#8D4427]">
                    <svg viewBox="0 0 140 220" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full deco-float">
                        <path d="M10,30 A18,18 0 0,1 30,10" strokeDasharray="3 3" />
                        <path d="M40,20 L55,10" />
                        <path d="M25,40 L35,55" />
                        <path d="M-10,70 C20,50 60,85 100,65 C120,55 135,70 145,65" />
                        <path d="M-10,110 C30,90 70,125 110,105 C130,95 140,110 150,105" />
                        <path d="M-10,150 C25,135 65,165 105,145 C125,135 135,150 150,140" />
                        <path d="M-10,190 C35,175 75,205 115,185 C130,175 140,185 150,180" />
                    </svg>
                </div>

                {/* Right Fern Fronds (Dương xỉ rừng sương) illustration */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 sm:w-44 pointer-events-none opacity-20 text-[#6E645B]">
                    <svg viewBox="0 0 130 240" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full deco-float">
                        <path d="M110,230 Q70,150 50,20" />
                        <path d="M98,205 Q70,195 55,202 Q75,185 92,192" />
                        <path d="M90,175 Q58,165 42,172 Q64,155 83,162" />
                        <path d="M80,145 Q48,135 32,142 Q54,125 73,132" />
                        <path d="M72,115 Q40,105 25,112 Q45,95 64,102" />
                        <path d="M64,85 Q35,75 22,82 Q40,68 57,74" />
                        <path d="M57,58 Q32,48 22,54 Q38,42 52,48" />
                        <path d="M52,35 Q35,28 28,32 Q40,24 49,28" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tiêu đề hiện trước, kèm đường kẻ vẽ ra từ giữa */}
                    <div className="w-full mb-8 sm:mb-10 flex flex-col items-center gap-3">
                        <h3
                            data-reveal="blur"
                            className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal tracking-tight text-center"
                        >
                            Các dạng view phòng đặc trưng
                        </h3>
                        <span
                            data-reveal="grow-c"
                            data-reveal-delay="200"
                            className="block h-[2px] w-16 rounded-full bg-[#8D4427]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {viewRoomCards.map((room, i) => (
                            // Lớp ngoài lo reveal, lớp trong lo hover → không còn xung đột
                            <div
                                key={room.title}
                                data-reveal="up"
                                data-reveal-delay={250 + i * 150}
                                className="h-full"
                            >
                                <div className="group h-full bg-white rounded-3xl overflow-hidden border border-[#E9E1D2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                                    {/* Ảnh */}
                                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                                        <div className="reveal-zoom absolute inset-0">
                                            <Image
                                                src={room.image}
                                                alt={room.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Nội dung */}
                                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                        <div className="space-y-2">
                                            <h4 className="font-serif text-xl font-medium text-[#2A2421] group-hover:text-[#8D4427] transition-colors">
                                                {room.title}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed line-clamp-3 font-light">
                                                {room.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5] relative overflow-hidden">
                {/* Left Maple Leaf Branch illustration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-44 pointer-events-none opacity-20 text-[#8D4427]">
                    <svg viewBox="0 0 140 220" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full deco-float">
                        <path d="M10,210 Q40,150 70,60" />
                        <path d="M45,140 Q80,130 100,140" />
                        <path d="M60,90 Q90,75 110,80" />
                        <path d="M70,60 L62,45 L50,48 L58,35 L48,25 L65,26 L70,10 L75,26 L92,25 L82,35 L90,48 L78,45 Z" />
                        <path d="M100,140 L96,128 L86,132 L92,120 L84,112 L98,112 L102,98 L106,112 L120,112 L112,120 L118,132 L108,128 Z" />
                        <path d="M110,80 L107,70 L98,73 L103,63 L96,56 L108,56 L111,44 L114,56 L126,56 L119,63 L124,73 L115,70 Z" />
                    </svg>
                </div>

                {/* Right Retro Camera Viewfinder & Memory Frame illustration */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-36 sm:w-48 pointer-events-none opacity-20 text-[#6E645B]">
                    <svg viewBox="0 0 150 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full deco-float">
                        <path d="M30,50 H50 M30,50 V70" strokeWidth="2" />
                        <path d="M130,50 H110 M130,50 V70" strokeWidth="2" />
                        <path d="M30,160 H50 M30,160 V140" strokeWidth="2" />
                        <path d="M130,160 H110 M130,160 V140" strokeWidth="2" />
                        <circle cx="80" cy="105" r="22" strokeDasharray="4 4" />
                        <circle cx="80" cy="105" r="4" fill="currentColor" />
                        <path d="M80,75 V79 M80,131 V135 M50,105 H54 M106,105 H110" />
                        <path d="M110,25 L112,32 L119,34 L112,36 L110,43 L108,36 L101,34 L108,32 Z" />
                        <path d="M45,20 L46,24 L50,25 L46,26 L45,30 L44,26 L40,25 L44,24 Z" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
                    {/* Section Heading Center */}
                    <div data-reveal="blur" className="text-center max-w-2xl mx-auto space-y-1.5">
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-tight tracking-tight">
                            Khoảnh khắc tại Ngủ Ấm
                        </h2>

                        <p className="text-[#5C534E] text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-light">
                            Cùng nhìn ngắm những góc nhỏ xinh và không gian thực tế của chúng tôi qua những hình ảnh dưới đây.
                        </p>
                    </div>

                    {/* 3D Coverflow Card Carousel */}
                    <GalleryCarousel onOpenBooking={openBookingFor} />
                </div>
            </section>
        </div>
    )
}

export default Service