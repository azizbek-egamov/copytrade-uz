import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "COPYTRADE.UZ - Treydingga copytrade orqali sarmoya kiriting",
  description:
    "Professional copy trading service in Uzbekistan. Join our copy trading platform and let professional traders manage your account.",
  keywords: "copy trading, forex, trading, uzbekistan, investment, prop trading",
  authors: [{ name: "COPYTRADE.UZ" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
