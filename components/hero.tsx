"use client"

import { CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 md:py-20 overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            ref={heroRef}
            className={`space-y-6 md:space-y-8 order-2 lg:order-1 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-poppins">
                <span className="bg-gradient-to-r from-green-800 via-green-600 to-green-700 bg-clip-text text-transparent">
                  COPYTRADE
                </span>{" "}
                <span className="text-gray-900">loyihasida siz hisob olasiz</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  biz savdo qilamiz!
                </span>
              </h1>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                "Bepul konsultatsiya, ro'yxatdan o'tib o'z nomingizga hisob ochib tayyorlab beramiz!",
                "Hisobingiz avtomatik tarzda boshqariladi!",
                "20 daqiqada hisobingiz ochilib to'ldiriladi va savdolar boshlanadi!",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 md:gap-4 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-green-100/50 shadow-sm hover:shadow-md transition-all duration-300 ${
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0 mt-1 drop-shadow-sm" />
                  <p className="text-sm md:text-base text-gray-700 font-inter leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageRef}
            className={`relative order-1 lg:order-2 transition-all duration-1000 ${
              imageVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"
            }`}
          >
            <div className="relative p-4 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl border border-green-100/50">
              <Image
                src="/images/trading-cards.png"
                alt="Trading Strategy Cards"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                priority
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg animate-bounce"></div>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 md:mt-16 text-center space-y-6 md:space-y-8 transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-green-100/50 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-poppins leading-relaxed">
              <span className="text-green-700">COPYTRADE</span> ga ulanish oldin pullik bo'lgan!
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Hozirda{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                ramazon oyi
              </span>{" "}
              munosabati bilan hisobingizni
              <br className="hidden sm:block" />
              <span className="text-green-600 font-bold">50$ dan yuqori mablag'ga</span> yoki istalgan prop hisob sotib
              olish evaziga <span className="text-blue-600 font-bold">bepul qo'shilaolasiz!</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-poppins font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 rounded-xl border border-green-600/20"
              onClick={() => document.getElementById("contact-modal")?.click()}
            >
              PROP hisob bilan qo'shilaman!
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-poppins font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 rounded-xl border border-blue-500/20"
              onClick={() => document.getElementById("contact-modal")?.click()}
            >
              REAL hisob bilan qo'shilaman!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
