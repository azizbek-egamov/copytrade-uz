export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-8 md:py-12 mt-12 md:mt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <div className="relative">
                <img
                  src="/images/copytrade-logo.png"
                  alt="COPYTRADE.UZ"
                  className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-30 animate-pulse"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                COPYTRADE.UZ
              </span>
            </div>
            <p className="text-gray-300 text-sm md:text-base font-medium">Professional copy trading xizmati</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-xs md:text-sm">24/7 Professional Support</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-gray-200 text-sm md:text-base mb-2 font-medium">Aloqa uchun:</p>
              <p className="text-green-300 font-semibold text-base md:text-lg">info@copytrade.uz</p>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">© 2024 COPYTRADE.UZ. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400 text-xs">
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              <span>Ishonchli hamkor</span>
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              <span>Professional xizmat</span>
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
