'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B3A67]/10 to-[#E17B47]/10 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="block bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] bg-clip-text text-transparent">
                AIoTers Technology
              </span>
              <span className="block text-2xl sm:text-3xl mt-2 text-gray-700 dark:text-gray-300">奧特智能科技</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              AIoTers: Empowering a new era of energy management with AI and IoT technologies.
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              我們專注於智慧能源管理系統、智慧節能方法與智慧電力交易三大領域。透過尖端技術，為企業打造高效能源管理解決方案。
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                onClick={scrollToContact}
                className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] px-8 text-sm font-medium text-white shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2B3A67] disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B3A67]/20 via-[#8B5A8C]/20 to-[#E17B47]/20 z-10" />
              <img
                src="/hero.png?height=400&width=600"
                alt="AIoTers Technology Smart Energy Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
