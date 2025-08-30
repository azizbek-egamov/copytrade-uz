"use client"

import Image from "next/image"
import { Menu, X, Mail } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md py-3 md:py-5 sticky top-0 z-40 border-b border-green-100/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-green-200/50 shadow-lg">
              <Image
                src="/images/copytrade-logo.png"
                alt="COPYTRADE.UZ Logo"
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg md:text-xl font-bold text-gray-900 font-poppins truncate bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                COPYTRADE.UZ
              </h1>
              <p className="text-xs md:text-sm text-green-700 font-inter hidden sm:block">
                Treydingga copytrade orqali sarmoya kiriting!
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-50 to-green-100 px-4 py-2 rounded-full border border-green-200/50">
            <Mail className="w-4 h-4 text-green-600" />
            <p className="text-base lg:text-lg font-semibold text-green-800 font-poppins">info@copytrade.uz</p>
          </div>

          <button
            className="md:hidden p-2 text-gray-900 hover:text-green-900 transition-colors rounded-lg hover:bg-green-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-green-200 bg-green-50/50 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-green-600" />
              <p className="text-base font-semibold text-green-800 font-poppins">info@copytrade.uz</p>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
