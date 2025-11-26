export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-sans text-lg sm:text-xl mb-3 sm:mb-4">Sơn Tùng & Thu Trang</h3>
            <p className="text-xs sm:text-sm opacity-70">10 tháng 01 năm 2026</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">Liên hệ</h4>
            <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
              Trống Đồng Palace Cảnh Hồ
              <br />
              173B Trường Chinh, Thanh Xuân, Hà Nội
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">Xem đường</h4>
            <a
              href="https://maps.app.goo.gl/otbqPf6g9J3KJVCd9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:underline opacity-70 hover:opacity-100 inline-block"
            >
              📍 Chỉ đường đến venue
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
