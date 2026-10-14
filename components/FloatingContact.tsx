'use client'

import React from 'react'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-end">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0911942968"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat qua Zalo"
        className="group flex items-center gap-2 bg-[#0068FF] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        <span className="w-5 h-5 flex items-center justify-center font-bold text-xs bg-white text-[#0068FF] rounded-full">
          Z
        </span>
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          Chat Zalo
        </span>
      </a>

      {/* Hotline Button with Pulse */}
      <a
        href="tel:0911942968"
        aria-label="Gọi hotline 091 1942968"
        className="relative group flex items-center gap-2 bg-[#8D4427] hover:bg-[#78391F] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        {/* Pulsing ring effect */}
        <span className="absolute -inset-1 rounded-full bg-[#8D4427]/40 animate-ping opacity-75" />
        
        <svg
          className="w-5 h-5 relative z-10 animate-wiggle"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide relative z-10">
          091 1942968
        </span>
      </a>
    </div>
  )
}
