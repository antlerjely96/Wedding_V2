"use client"
import { useState, useEffect } from "react"

interface QRDeclineModalProps {
  isOpen: boolean
  onClose: () => void
  side?: "bride" | "groom"
}

export default function QRDeclineModal({ isOpen, onClose, side = "bride" }: QRDeclineModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  if (!isOpen) return null

  const qrData = {
    bride: {
      message: "Không đi à, mình dỗi!!!",
    },
    groom: {
      message: "Không đi à, mình dỗi!!!",
    },
  }

  const current = qrData[side]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isVisible ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center p-4 pointer-events-none ${
          isVisible ? "pointer-events-auto" : ""
        }`}
      >
        <div
          className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full transform transition-all duration-300 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center space-y-6 animate-fadeInUp">
            {/* Message */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-serif text-foreground">DỖI!!!</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{current.message}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-accent text-accent-foreground rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
            >
              Chính thức dỗi!!!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
