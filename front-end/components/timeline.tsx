"use client"

import { useEffect, useRef, useState } from "react"

export default function Timeline() {
  const sectionRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const items = document.querySelectorAll("[data-timeline-item]")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const timelineItems = [
    {
      title: "Gặp gỡ",
      description: "Nơi mọi chuyện bắt đầu, là lúc chúng tôi lần đầu gặp nhau",
      image: "/couple-first-meeting.jpg",
    },
    {
      title: "Yêu thương",
      description: "Những khoảnh khắc đầy tình cảm và niềm vui cùng nhau",
      image: "/couple-romantic-moment.jpg",
    },
    {
      title: "Hôn nhân",
      description: "Cuối cùng, ngày này đã đến - ngày chúng tôi trở thành một",
      image: "/wedding-celebration.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-foreground mb-12 md:mb-16 animate-fadeInUp">
          Chương Beautiful
        </h2>

        <div className="space-y-8 md:space-y-12">
          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              data-timeline-item
              data-index={idx}
              className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center transform transition-all duration-700 ${
                visibleItems.includes(idx)
                  ? idx % 2 === 0
                    ? "animate-slideInLeft"
                    : "animate-slideInRight"
                  : "opacity-0"
              }`}
              style={{
                transitionDelay: visibleItems.includes(idx) ? `${idx * 100}ms` : "0ms",
              }}
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2 hover-lift">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="rounded-lg shadow-lg w-full smooth-transition hover:shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-serif text-accent hover-scale cursor-pointer smooth-transition">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{item.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 text-center md:text-right order-2 md:order-1">
                    <h3 className="text-2xl sm:text-3xl font-serif text-accent hover-scale cursor-pointer smooth-transition">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="w-full md:w-1/2 hover-lift order-1 md:order-2">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="rounded-lg shadow-lg w-full smooth-transition hover:shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
