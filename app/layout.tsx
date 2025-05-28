import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIoTers Technology | 智慧能源管理、AIoT、LLM、Agent、永續發展、碳中和、SaaS 解決方案",
  description: "AIoTers 提供以 AI、IoT、LLM 大語言模型、Agent 為核心的智慧能源管理、智慧水資源、節能減碳、ESG、能源轉型、智能控制與 SaaS 雲端解決方案，協助企業實現永續發展與能源優化。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
