'use client'

import React, { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialRoom?: string
}

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom = 'Phòng ấm áp',
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    room: initialRoom,
    checkIn: '',
    checkOut: '',
    guests: '2',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open Zalo with pre-filled message or hotline
    const msg = encodeURIComponent(
      `Chào Ngủ Ấm Ở Đà Lạt, tôi là ${formData.name || 'Khách hàng'} (SĐT: ${formData.phone}). Tôi muốn tìm hiểu đặt phòng: ${formData.room}, nhận phòng ngày: ${formData.checkIn || 'Sớm nhất'}, trả phòng: ${formData.checkOut || 'Dự kiến'}, số lượng: ${formData.guests} người. Ghi chú: ${formData.notes || 'Không có'}`
    )
    setSubmitted(true)
    setTimeout(() => {
      window.open(`https://zalo.me/0911942968?text=${msg}`, '_blank')
    }, 600)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E8DEC8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#8D4427] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/80 font-medium">Ngủ Ấm Ở Đà Lạt</div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5">Liên hệ đặt phòng</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#01796F]/10 text-[#01796F] rounded-full mx-auto flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-serif text-2xl text-[#2A2421]">Đang kết nối Zalo Ngủ Ấm...</h4>
            <p className="text-sm text-[#5C534E] max-w-sm mx-auto">
              Cảm ơn quý khách! Chúng tôi sẽ phản hồi và gửi thông tin chi tiết phòng sớm nhất. Bạn cũng có thể gọi hotline trực tiếp.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0911942968"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#8D4427] text-white text-sm font-medium hover:bg-[#78391F] transition-colors"
              >
                📞 Gọi Hotline 091 1942968
              </a>
              <button
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                className="px-6 py-2.5 rounded-full border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C534E] mb-1">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Quý khách vui lòng nhập tên"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8D4427]/40"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C534E] mb-1">
                  Số điện thoại / Zalo *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="091 1942968"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8D4427]/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C534E] mb-1">
                  Loại phòng quan tâm
                </label>
                <select
                  value={formData.room}
                  onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8D4427]/40"
                >
                  <option value="Phòng ấm áp">Phòng ấm áp (2 người)</option>
                  <option value="Phòng ánh sáng">Phòng ánh sáng (3 người)</option>
                  <option value="Phòng gia đình">Phòng gia đình (4 người)</option>
                  <option value="Phòng gác mái">Phòng gác mái (2 người)</option>
                  <option value="Toàn bộ không gian">Thuê nguyên căn / Sự kiện</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C534E] mb-1">
                  Số lượng khách
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8D4427]/40"
                >
                  <option value="1">1 người</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  <option value="4">4 người</option>
                  <option value="5+">Trên 5 người</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C534E] mb-1">
                  Ngày nhận phòng (Check-in)
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8D4427]/40"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C534E] mb-1">
                  Ngày trả phòng (Check-out)
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8D4427]/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C534E] mb-1">
                Yêu cầu đặc biệt / Ghi chú
              </label>
              <textarea
                rows={2}
                placeholder="Ví dụ: Check-in muộn, cần nôi em bé, hỗ trợ thuê xe máy..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8D4427]/40"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-6 rounded-full bg-[#8D4427] hover:bg-[#78391F] text-white font-medium text-sm transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Nhận tư vấn & Báo giá qua Zalo</span>
                <span>→</span>
              </button>
              <a
                href="tel:0911942968"
                className="w-full sm:w-auto py-3 px-5 rounded-full border border-[#8D4427] text-[#8D4427] hover:bg-[#8D4427]/10 font-medium text-sm transition-colors text-center"
              >
                📞 Gọi 091 1942968
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
