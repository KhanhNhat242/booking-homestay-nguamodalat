'use client'

import { useEffect } from 'react'

/**
 * Reveal 2 chiều theo vị trí thực:
 * - Hiện khi phần tử đã vào màn hình sâu hơn TRIGGER.
 * - Ẩn lại chỉ khi đã ra HẲN ngoài màn hình → cuộn lên hay xuống đều có hiệu ứng.
 * Gắn một lần trong layout.
 */
export default function ScrollReveal() {
    useEffect(() => {
        const check = () => {
            const vh = window.innerHeight
            const trigger = Math.min(80, vh * 0.08)
            const atBottom =
                window.scrollY + vh >= document.documentElement.scrollHeight - 4

            document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
                const r = el.getBoundingClientRect()
                if (!r.width && !r.height) return // đang display:none

                const inView =
                    (r.top < vh - trigger && r.bottom > trigger) ||
                    // chạm đáy trang: hiện mọi thứ đang nằm trong màn hình
                    (atBottom && r.top < vh && r.bottom > 0)

                const revealed = el.classList.contains('is-revealed')

                if (inView) {
                    if (!revealed) {
                        const delay = el.getAttribute('data-reveal-delay')
                        if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
                        el.classList.add('is-revealed')
                    }
                } else if ((r.top > vh || r.bottom < 0) && revealed) {
                    // Chỉ gỡ khi đang có class, tránh sinh mutation thừa → vòng lặp vô hạn
                    el.classList.remove('is-revealed')
                }
            })
        }

        let frame = 0
        const schedule = () => {
            if (frame) return
            frame = requestAnimationFrame(() => {
                frame = 0
                check()
            })
        }

        // Kiểm tra ngay + vài nhịp sau (font/ảnh làm layout xê dịch)
        check()
        const timers = [80, 300, 800, 1600].map((ms) => setTimeout(check, ms))

        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule, { passive: true })
        window.addEventListener('load', schedule)

        // Phần tử render muộn, hoặc React ghi đè className làm mất "is-revealed"
        const mo = new MutationObserver((records) => {
            const need = records.some((r) => {
                if (r.type === 'childList') return r.addedNodes.length > 0
                const t = r.target as HTMLElement
                return t.hasAttribute?.('data-reveal') && !t.classList.contains('is-revealed')
            })
            if (need) check()
        })
        mo.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class'],
        })

        return () => {
            timers.forEach(clearTimeout)
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
            window.removeEventListener('load', schedule)
            mo.disconnect()
        }
    }, [])

    return null
}