import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="AIoTers Technology Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              AIoTers: AI與IoT賦能能源管理新紀元。
              <br />
              AIoTers: Empowering a new era of energy management with AI and IoT.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-[#2B3A67] dark:text-gray-400 dark:hover:text-[#8B5A8C]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#2B3A67] dark:text-gray-400 dark:hover:text-[#8B5A8C]"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#2B3A67] dark:text-gray-400 dark:hover:text-[#8B5A8C]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#2B3A67] dark:text-gray-400 dark:hover:text-[#8B5A8C]"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">解決方案 / Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#solutions" className="hover:text-[#2B3A67] dark:hover:text-[#8B5A8C]">
                  AIoTers Insight
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-[#2B3A67] dark:hover:text-[#8B5A8C]">
                  AI 驅動的冷凍空調系統節能優化
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-[#2B3A67] dark:hover:text-[#8B5A8C]">
                  智能電力交易平台實踐
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">公司 / Company</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-500">
                  關於我們 / About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-500">
                  團隊 / Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-500">
                  新聞 / News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-500">
                  職涯 / Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">聯絡 / Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-500">
                  聯絡我們 / Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-500">
                  支援 / Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-500">
                  合作夥伴 / Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} AIoTers Technology Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
