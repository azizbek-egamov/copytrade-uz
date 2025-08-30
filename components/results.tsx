"use client"

import { DollarSign, TrendingUp, AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export function Results() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: resultsRef, visibleItems: visibleResults } = useStaggeredAnimation(6, 200)
  const { ref: chartsRef, visibleItems: visibleCharts } = useStaggeredAnimation(5, 100)

  const results = [
    {
      image: "/images/trading-result-1.jpeg",
      deposit: "830.72$",
      duration: "XAUUSD savdolari",
      profit: "132.77$ - 71.72$ oralig'ida",
      risk: "O'rta risk, multiple positions",
    },
    {
      image: "/images/trading-result-2.jpeg",
      deposit: "123.47$",
      duration: "Tarix va balans",
      profit: "142.05$ umumiy foyda",
      risk: "GOLD savdolari tarixi",
    },
    {
      image: "/images/trading-result-3.jpeg",
      deposit: "99.42$",
      duration: "GOLD savdolari",
      profit: "0.57$ - 1.09$ oralig'ida",
      risk: "Past risk, kichik pozitsiyalar",
    },
    {
      image: "/images/trading-result-4.jpeg",
      deposit: "232.50$",
      duration: "XAUUSD savdolari",
      profit: "23.70$ - 67.10$ oralig'ida",
      risk: "O'rta risk, sell pozitsiyalari",
    },
    {
      image: "/images/trading-result-5.jpeg",
      deposit: "1,491.84$",
      duration: "XAUUSD savdolari",
      profit: "61.25$ - 70.91$ oralig'ida",
      risk: "Yuqori hajm, barqaror foyda",
    },
    {
      image: "/images/trading-result-6.jpeg",
      deposit: "291.74$",
      duration: "GOLD savdolari",
      profit: "2.97$ - 3.18$ oralig'ida",
      risk: "O'rta risk, sell strategiyasi",
    },
  ]

  const additionalCharts = [
    "/images/trading-chart-1.jpeg",
    "/images/trading-chart-2.jpeg",
    "/images/trading-chart-3.jpeg",
    "/images/trading-chart-4.jpeg",
    "/images/trading-chart-5.jpeg",
  ]

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 font-sans transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Aktual natijalar
        </h2>

        <div ref={resultsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {results.map((result, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border border-gray-200 p-4 md:p-6 space-y-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                visibleResults.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className="h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-all duration-300 group"
                onClick={() => setSelectedImage(result.image)}
              >
                <Image
                  src={result.image || "/placeholder.svg"}
                  alt={`Trading result ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 md:space-y-3">
                <div
                  className="flex items-center gap-2 md:gap-3 animate-fade-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-gray-600 flex-shrink-0" />
                  <span className="font-bold font-sans text-sm md:text-base">Balans:</span>
                  <span className="font-sans text-sm md:text-base truncate">
                    {result.deposit} | {result.duration}
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 md:gap-3 animate-fade-in-left"
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="font-bold font-sans text-sm md:text-base">Foyda:</span>
                  <span className="font-sans text-sm md:text-base">{result.profit}</span>
                </div>

                <div
                  className="flex items-start gap-2 md:gap-3 animate-fade-in-left"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="font-bold font-sans text-sm md:text-base">Strategiya:</span>
                  <span className="font-sans text-sm md:text-base leading-tight">{result.risk}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gray-300 mb-12 md:mb-16 animate-fade-in"></div>

        <div
          ref={chartsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mb-12 md:mb-16"
        >
          {additionalCharts.map((chart, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                visibleCharts.includes(index)
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "opacity-0 translate-y-5 rotate-2"
              }`}
              onClick={() => setSelectedImage(chart)}
            >
              <Image
                src={chart || "/placeholder.svg"}
                alt={`Trading chart ${index + 1}`}
                width={300}
                height={600}
                className="w-full h-auto object-contain rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
          <Button
            size="lg"
            className="bg-green-900 hover:bg-green-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-sans transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 animate-pulse"
            onClick={() => document.getElementById("contact-modal")?.click()}
          >
            COPYTRADEga Qo'shilmoqchiman!
          </Button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 hover:scale-110 transition-transform duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Trading result full view"
              width={800}
              height={1200}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
