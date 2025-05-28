"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Solutions", href: "#solutions" },
    { name: "Technology", href: "#technology" },
    { name: "Roadmap", href: "#roadmap" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="AIoTers Technology Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-background border-b shadow-lg">
                <nav className="container py-4">
                  <ul className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm font-medium transition-colors hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] hover:opacity-90 transition-opacity"
                      >
                        Contact Us
                      </Button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-[#2B3A67] via-[#8B5A8C] to-[#E17B47] hover:opacity-90 transition-opacity">
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
