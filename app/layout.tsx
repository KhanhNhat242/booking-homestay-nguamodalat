import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Suspense } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ngủ Ấm Ở Đà Lạt | Một chốn nghỉ ấm áp giữa lòng Đà Lạt",
  description: "Ngủ Ấm Ở Đà Lạt - Không gian lưu trú ấm cúng, gần gũi và đầy cảm hứng giữa lòng Đà Lạt mộng mơ. Đặt phòng ngay qua Hotline/Zalo: 091 1942968.",
  openGraph: {
    title: "Ngủ Ấm Ở Đà Lạt - Homestay ấm cúng giữa lòng Đà Lạt",
    description: "Tạm rời nhịp sống vội vã, tận hưởng những ngày bình yên trong không gian lưu trú gần gũi và đầy cảm hứng tại Ngủ Ấm Ở Đà Lạt.",
    images: ["/images/sanpham.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF7F2] text-[#2A2421]">
        <Suspense fallback={null}>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </Suspense>
        <ScrollReveal />
      </body>
    </html>
  );
}
