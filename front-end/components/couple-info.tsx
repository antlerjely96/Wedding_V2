"use client"

import { useEffect, useRef, useState } from "react"

export default function CoupleInfo() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div
                        className={`text-center space-y-3 sm:space-y-4 transform transition-all duration-700 ${
                            isVisible ? "animate-slideInLeft" : "opacity-0 translate-x-8"
                        }`}
                    >
                        <h3 className="font-sans text-2xl sm:text-3xl text-black">Thu Trang</h3>
                        <div className="flex justify-center">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg hover-lift">
                                <img
                                    src="/bride-portrait.jpg"
                                    alt="Bride"
                                    className="w-full h-full object-cover smooth-transition hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`text-center space-y-3 sm:space-y-4 transform transition-all duration-700 delay-200 ${
                            isVisible ? "animate-slideInRight" : "opacity-0 -translate-x-8"
                        }`}
                    >
                        <h3 className="font-sans text-2xl sm:text-3xl text-black">Sơn Tùng</h3>
                        <div className="flex justify-center">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg hover-lift">
                                <img
                                    src="/groom-portrait.jpg"
                                    alt="Groom"
                                    className="w-full h-full object-cover smooth-transition hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
