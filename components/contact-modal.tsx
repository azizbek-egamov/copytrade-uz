"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"

export function ContactModal() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    riskLevel: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sendToTelegram = async (data: typeof formData) => {
    const botToken = "8105645545:AAEQzQv7sgGiM8cq9wc_mg6I5h2ubuzBCmQ"
    const chatId = "-1002816696693"

    const message = `🆕 Yangi COPYTRADE so'rovi:

👤 Ism: ${data.name}
📞 Telefon: ${data.phone}
💰 Kapital: ${data.amount}
📊 Risk darajasi: ${data.riskLevel}

#yangi_mijoz #copytrade`

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      })

      if (!response.ok) {
        throw new Error("Telegram API error")
      }

      return true
    } catch (error) {
      console.error("Telegram send error:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const success = await sendToTelegram(formData)

      if (success) {
        setIsSubmitted(true)
        setFormData({ name: "", phone: "", amount: "", riskLevel: "" })
      } else {
        alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.")
      }
    } catch (error) {
      alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ name: "", phone: "", amount: "", riskLevel: "" })
  }

  return (
    <Dialog onOpenChange={(open) => !open && handleClose()}>
      <DialogTrigger asChild>
        <button id="contact-modal" className="hidden">
          Open Modal
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-w-[95vw] max-h-[90vh] overflow-y-auto bg-white border-2 border-gray-200 shadow-2xl rounded-2xl mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-center font-sans text-gray-900 text-lg sm:text-xl">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent font-bold">
              COPYTRADE
            </span>{" "}
            loyihasiga qo'shilish!
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-green-600 font-sans">Raxmat!</h3>
              <p className="text-gray-700 font-sans leading-relaxed">
                So'rovingiz muvaffaqiyatli jo'natildi!
                <br />
                Siz bilan tez orada aloqaga chiqamiz.
              </p>
            </div>
            <Button
              onClick={handleClose}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-sans px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Yopish
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-sans text-gray-700 font-medium text-sm">
                Ismingiz *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors placeholder:text-gray-400"
                placeholder="To'liq ismingizni kiriting"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-sans text-gray-700 font-medium text-sm">
                Telefon raqamingiz *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500 transition-colors placeholder:text-gray-400"
                placeholder="+998 90 123 45 67"
              />
            </div>

            <div className="space-y-3">
              <Label className="font-sans text-gray-700 font-medium text-sm">
                Qancha kapitallik prop almoqchisiz? *
              </Label>
              <RadioGroup
                value={formData.amount}
                onValueChange={(value) => setFormData({ ...formData, amount: value })}
                className="space-y-1"
              >
                {[
                  { value: "15000$", label: "15 000$" },
                  { value: "25000$", label: "25 000$" },
                  { value: "50000$", label: "50 000$" },
                  { value: "100000$", label: "100 000$" },
                  { value: "Real funded prop account", label: "Real funded prop alamani" },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="text-green-600" />
                    <Label htmlFor={option.value} className="font-sans text-gray-700 cursor-pointer flex-1 text-sm">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="font-sans text-gray-700 font-medium text-sm">Savdo stilini tanlang *</Label>
              <RadioGroup
                value={formData.riskLevel}
                onValueChange={(value) => setFormData({ ...formData, riskLevel: value })}
                className="space-y-1"
              >
                {[
                  { value: "Past risk bilan", label: "Past risk bilan", color: "text-green-600" },
                  { value: "O'rta risk bilan", label: "O'rta risk bilan", color: "text-yellow-600" },
                  { value: "Yuqori risk bilan", label: "Yuqori risk bilan", color: "text-red-600" },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="text-green-600" />
                    <Label htmlFor={option.value} className={`font-sans cursor-pointer flex-1 text-sm ${option.color}`}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.phone || !formData.amount || !formData.riskLevel}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 sm:py-4 font-sans text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  Jo'natilmoqda...
                </div>
              ) : (
                "COPY TRADE ga qo'shilaman!"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
