"use client"

export default function WeddingDetails() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/5">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Ceremony Details */}
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground">Lễ thành hôn</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-accent">Ngày và giờ</h3>
              <p className="text-xl sm:text-2xl text-foreground font-serif">Thứ Bảy, 10.01.2026</p>
              <p className="text-xs sm:text-sm text-muted-foreground">(Tức ngày 22 tháng 11 năm Ất Tỵ)</p>
              <p className="text-base sm:text-lg text-foreground font-semibold pt-1 sm:pt-2">18:00</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-accent">Địa điểm</h3>
              <p className="text-base sm:text-lg text-foreground">Trống Đồng Palace Cảnh Hồ</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Sảnh tiệc Queen 1 - 173B Trường Chinh</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Thanh Xuân, Hà Nội</p>
              <a
                href="https://maps.app.goo.gl/otbqPf6g9J3KJVCd9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:underline mt-1 sm:mt-2 font-semibold text-sm sm:text-base"
              >
                📍 Xem chỉ đường
              </a>
            </div>
          </div>
        </div>

        {/* Reception Timeline */}
        <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif text-center text-foreground">Tiến độ lễ tiệc</h3>
          <div className="space-y-3 sm:space-y-4">
            {[
              { time: "17:30", event: "Đón khách" },
              { time: "18:00", event: "Lễ thành hôn" },
              { time: "18:30", event: "Khai tiệc" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 h-px bg-border"></div>
                <div className="text-center min-w-24 sm:min-w-32">
                  <p className="text-accent font-semibold text-sm sm:text-lg">{item.time}</p>
                  <p className="text-foreground text-xs sm:text-sm">{item.event}</p>
                </div>
                <div className="flex-1 h-px bg-border"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
