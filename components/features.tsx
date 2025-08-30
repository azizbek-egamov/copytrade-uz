"use client"

import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Features() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-white to-green-50 rounded-2xl shadow-xl p-6 md:p-8 border border-green-100 hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg md:text-xl font-bold text-green-900 font-sans leading-relaxed">
                So'rov yuboring va XORAZM FOREX akademiyasi menedjerlari barchasini sizga o'rnatib, tushuntirib
                copytrade clubimizga ulab berishadi!
              </p>
            </div>
            <Button
              className="bg-gradient-to-r from-green-800 to-green-900 hover:from-green-900 hover:to-green-800 text-white px-6 md:px-8 py-3 md:py-4 font-sans text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => document.getElementById("contact-modal")?.click()}
            >
              Qo'shilmoqchiman!
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-sans mb-2">Xavfsizlik</h3>
            <p className="text-gray-600 font-sans text-sm leading-relaxed">
              Sizning hisobingiz to'liq nazorat ostida va barcha operatsiyalar shaffof tarzda amalga oshiriladi.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-sans mb-2">Yuqori Foyda</h3>
            <p className="text-gray-600 font-sans text-sm leading-relaxed">
              Professional treyderlarimiz orqali 70%-90% foydalilik darajasiga erishish imkoniyati.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-sans mb-2">Professional Jamoa</h3>
            <p className="text-gray-600 font-sans text-sm leading-relaxed">
              Tajribali treyderlar va menejerlar sizning muvaffaqiyatingiz uchun 24/7 ishlaydi.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-400">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 font-sans mb-1">Muhim eslatma</h4>
              <p className="text-gray-700 font-sans text-sm md:text-base leading-relaxed">
                <strong>COPYTRADE</strong> ham har qanday biznesda bo'lgani kabi risklarni o'z ichiga oladi!
                Investitsiya qilishdan oldin barcha shartlar va risklar bilan tanishib chiqing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
