"use client"

import type React from "react"
import { useState } from "react"
import QRDeclineModal from "./qr-decline-modal"

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    side: "bride",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [showQRModal, setShowQRModal] = useState(false)

  const handleAttendingChange = (value: string) => {
    setFormData({ ...formData, attending: value })
    if (value === "no") {
      setShowQRModal(true)
    }
  }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Nếu không tham dự → mở QR modal, không gọi API
        if (formData.attending === "no") {
            setShowQRModal(true);
            return;
        }

        try {
            setSubmitted(true);

            const response = await fetch(
                process.env.NEXT_PUBLIC_RSVP_API_URL as string,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                alert("API error:" + response.status);
                alert("Có lỗi xảy ra khi gửi, vui lòng thử lại!");
                setSubmitted(false);
                return;
            }

            // Reset form
            setFormData({
                name: "",
                attending: "yes",
                guests: "1",
                side: "bride",
                message: "",
            });

            // Animation nút gửi
            setTimeout(() => setSubmitted(false), 2000);

        } catch (error) {
            console.error("Lỗi kết nối API:", error);
            alert("Không thể kết nối API. Kiểm tra lại URL Vercel!");
            setSubmitted(false);
        }
    };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/5 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-foreground mb-3 sm:mb-4">
              Xác nhận tham dự
            </h2>
            <p className="text-center text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-2">
              Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8 bg-white p-4 sm:p-8 md:p-12 rounded-2xl shadow-xl animate-scaleIn"
          >
            {/* Name */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 transition-colors duration-300 group-focus-within:text-accent">
                Tên của bạn
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-border rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 focus:border-accent focus:shadow-lg hover:border-accent/50 bg-white text-foreground placeholder-muted-foreground text-sm sm:text-base"
                placeholder="Nhập tên của bạn"
              />
            </div>

            {/* Side */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 transition-colors duration-300">
                Bạn là khách mời của ai?
              </label>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { value: "bride", label: "Khách mời Thu Trang" },
                  { value: "groom", label: "Khách mời Sơn Tùng" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 sm:gap-4 cursor-pointer p-2 sm:p-3 rounded-lg transition-all duration-300 hover:bg-secondary/50 group/radio"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="side"
                        value={option.value}
                        checked={formData.side === option.value}
                        onChange={(e) => setFormData({ ...formData, side: e.target.value })}
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-accent cursor-pointer"
                      />
                    </div>
                    <span className="text-sm sm:text-base text-foreground transition-all duration-300 group-hover/radio:text-accent">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Attending */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 transition-colors duration-300">
                Bạn sẽ đến chứ?
              </label>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { value: "yes", label: "Mình chắc chắn sẽ đến" },
                  { value: "maybe", label: "Mình chưa chắc" },
                  { value: "no", label: "Xin lỗi mình bận rồi!" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 sm:gap-4 cursor-pointer p-2 sm:p-3 rounded-lg transition-all duration-300 hover:bg-secondary/50 group/radio"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="attending"
                        value={option.value}
                        checked={formData.attending === option.value}
                        onChange={(e) => handleAttendingChange(e.target.value)}
                        className="w-4 h-4 sm:w-5 sm:h-5 accent-accent cursor-pointer"
                      />
                    </div>
                    <span className="text-sm sm:text-base text-foreground transition-all duration-300 group-hover/radio:text-accent">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Number of Guests */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 transition-colors duration-300 group-focus-within:text-accent">
                Bạn tham dự cùng ai?
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                onFocus={() => setFocusedField("guests")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-border rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 focus:border-accent focus:shadow-lg hover:border-accent/50 bg-white text-foreground cursor-pointer appearance-none text-sm sm:text-base"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="1">1 người</option>
                <option value="2">2 người</option>
                <option value="3">3 người</option>
                <option value="4">4 người</option>
              </select>
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 transition-colors duration-300 group-focus-within:text-accent">
                Lời nhắn cho Sơn Tùng và Thu Trang
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-border rounded-xl transition-all duration-300 focus:outline-none focus:ring-0 focus:border-accent focus:shadow-lg hover:border-accent/50 bg-white text-foreground placeholder-muted-foreground resize-none text-sm sm:text-base"
                placeholder="Viết lời chúc mừng của bạn..."
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-500 ease-out transform ${
                submitted
                  ? "bg-green-500 text-white scale-95"
                  : "bg-accent text-accent-foreground hover:shadow-xl hover:-translate-y-1 active:scale-95"
              }`}
            >
              {submitted ? "Đã gửi thành công!" : "Gửi xác nhận"}
            </button>
          </form>
        </div>
      </section>

      <QRDeclineModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} side={formData.side} />
    </>
  )
}
