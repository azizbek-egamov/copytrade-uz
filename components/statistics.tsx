"use client"

import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export function Statistics() {
  const stats = [
    { number: "431", label: "MIJOZLARIMIZ", bg: "bg-green-700" },
    { number: "41", label: "MIJOZLAR HISOBLARI", bg: "bg-green-900" },
    { number: "4", label: "TREYDERLARIMIZ", bg: "bg-green-700" },
    { number: "2", label: "YURIDIK MIJOZLARIMIZ", bg: "bg-green-900" },
    { number: "15", label: "PROP HISOBLAR", bg: "bg-green-700" },
    { number: "70%-90%", label: "FOYDALILIK darajasi", bg: "bg-green-900" },
  ]

  const { ref: statsRef, visibleItems } = useStaggeredAnimation(stats.length, 150)

  return (
    <section className="py-12 md:py-20 bg-green-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bg} rounded-lg p-4 md:p-6 text-center transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0 rotate-0"
                    : "opacity-0 translate-y-8 rotate-3"
                }`}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 font-sans animate-pulse">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm opacity-90 font-sans leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans leading-tight animate-fade-in-up">
              XF - COPYTRADE raqamlarda . . .
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg opacity-90 font-sans leading-relaxed">
              <p className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                Copytrade loyihasi sizga, bizning hisoblarda qilinayotgan moliyaviy operatsiyalarni o'z hisobingizga
                nusxalash tizimini taqdim etadi.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                Biz sell ochsak, sizning hisobingizham avtomatik sell pozitsiyasini balansingizga nisbatan
                aktivlashtiradi va biz savdoni qachon to'xtatsak o'sha zahoti sizning ham orderingiz yopiladi va foyda
                bo'lgan holda u pul yechib olishingiz uchun brokerdagi sizning shaxsiy kabinetingizda tayyor turadi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
