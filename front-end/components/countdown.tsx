"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date("2026-01-10T18:00:00").getTime()
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    calculateCountdown()
    const interval = setInterval(calculateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-accent/5">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif text-center text-foreground mb-8 sm:mb-12">Countdown</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {[
            { label: "Ngày", value: time.days },
            { label: "Giờ", value: time.hours },
            { label: "Phút", value: time.minutes },
            { label: "Giây", value: time.seconds },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-background border-2 border-accent rounded-lg p-2 sm:p-4">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-accent">
                  {String(item.value).padStart(2, "0")}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-muted-foreground italic">Đếm ngược đến ngày hạnh phúc của chúng tôi</p>
        </div>
      </div>
    </section>
  )
}
