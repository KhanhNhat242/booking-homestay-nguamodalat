'use client'

import React, { useState, useEffect, useRef } from 'react'

interface HeaderProps {
  onOpenBooking?: () => void
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const isManualScroll = useRef(false)
  const manualTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navLinks = [
    { label: 'Trang chủ', href: '/#home', id: 'home' },
    { label: 'Về chúng tôi', href: '/#about-us', id: 'about-us' },
    { label: 'Dịch vụ', href: '/#service', id: 'service' },
    { label: 'Liên hệ', href: '/#contact-us', id: 'contact-us' },
  ]

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll.current) return

      // Nếu cuộn gần chạm đáy trang hoặc footer xuất hiện trong tầm nhìn -> active 'contact-us'
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      const contactEl = document.getElementById('contact-us')
      if (isBottom || (contactEl && contactEl.getBoundingClientRect().top <= window.innerHeight * 0.75)) {
        setActiveSection('contact-us')
        return
      }

      const sectionIds = ['service', 'about-us', 'home']
      const scrollPosition = window.scrollY + 160
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + window.scrollY
          if (top <= scrollPosition) {
            setActiveSection(id)
            return
          }
        }
      }
      setActiveSection('home')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (manualTimeout.current) clearTimeout(manualTimeout.current)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault()
    setIsOpen(false)
    setActiveSection(id)

    // Khóa tạm handleScroll khi đang smooth scroll để tránh bị các section đi ngang qua ghi đè active
    isManualScroll.current = true
    if (manualTimeout.current) clearTimeout(manualTimeout.current)
    manualTimeout.current = setTimeout(() => {
      isManualScroll.current = false
    }, 1000)

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/#home')
      return
    }

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `/#${id}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EDE6DC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Brand: House Icon + Text "Ngủ Ấm Ở ĐÀ LẠT" */}
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, '/#home', 'home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#8D4427] transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                {/* House roof and chimney */}
                <path d="M4 22L24 6L44 22" />
                <path d="M34 14V8H39V18" />
                <path d="M9 20V42H39V20" />
                {/* Windows & Door line */}
                <rect x="15" y="26" width="6" height="6" />
                <rect x="27" y="26" width="6" height="6" />
                <path d="M21 42V35H27V42" />
                {/* Pine tree silhouettes on side */}
                <path d="M41 42V30M41 33L37 36M41 30L38 33M41 36L44 38" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2A2421] group-hover:text-[#8D4427] transition-colors leading-none">
                Ngủ Ấm
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-[#8D4427] uppercase mt-1 leading-none">
                Ở ĐÀ LẠT
              </span>
            </div>
          </a>

          {/* Center Navigation Links Desktop */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${isActive
                    ? 'text-[#8D4427] font-semibold'
                    : 'text-[#4A423D] hover:text-[#8D4427]'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8D4427] rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action Button Desktop: "Liên hệ đặt phòng" */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-2 bg-[#7F3C22] hover:bg-[#6C311A] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Liên hệ đặt phòng</span>
            </button>
          </div>

          {/* Hamburger Button Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="md:hidden p-2 rounded-lg text-[#2A2421] hover:text-[#8D4427] hover:bg-black/5 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EDE6DC] px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors cursor-pointer ${isActive
                  ? 'text-[#8D4427] bg-[#8D4427]/10 font-semibold'
                  : 'text-[#4A423D] hover:text-[#8D4427] hover:bg-black/5'
                  }`}
              >
                {link.label}
              </a>
            )
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false)
                onOpenBooking?.()
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#7F3C22] hover:bg-[#6C311A] text-white py-3 rounded-full font-medium text-sm shadow transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Liên hệ đặt phòng</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}