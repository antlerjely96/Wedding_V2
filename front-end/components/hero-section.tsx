"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      <div className="w-full h-full absolute inset-0 opacity-20" />

      <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-20 max-w-xl sm:max-w-2xl">
        <div
          className={`mb-6 sm:mb-8 transform transition-all duration-700 ${isVisible ? "animate-scaleIn" : "opacity-0"}`}
        >
          <img
            src="/couple-wedding-photo-elegant.jpg"
            alt="Happy couple"
            className="w-full max-w-sm mx-auto rounded-lg shadow-xl hover-lift"
            loading="lazy"
          />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h1
            className={`text-3xl sm:text-5xl md:text-7xl font-serif text-foreground italic transform transition-all duration-700 delay-100 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            We're getting married
          </h1>

          <div
            className={`flex items-center justify-center gap-3 sm:gap-4 transform transition-all duration-700 delay-200 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="h-px w-8 sm:w-12 bg-accent"></div>
            <span className="text-accent text-base sm:text-lg">&</span>
            <div className="h-px w-8 sm:w-12 bg-accent"></div>
          </div>

          <div
            className={`space-y-1 sm:space-y-2 transform transition-all duration-700 delay-300 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-accent hover-scale cursor-pointer">Sơn Tùng</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl text-accent hover-scale cursor-pointer">Thu Trang</h2>
          </div>

          <p
            className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-md mx-auto leading-relaxed transform transition-all duration-700 delay-400 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            Chúng mình sắp về chung một nhà! Rất mong bạn cùng đến chung vui trong ngày đặc biệt này. Sự hiện diện của
            bạn sẽ làm ngày vui thêm trọn vẹn.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
