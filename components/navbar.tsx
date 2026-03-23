"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/fundamentals", label: "Fundamentals" },
  { href: "/strategy", label: "Strategy" },
  { href: "/transformation", label: "Transformation" },
  { href: "/engineering", label: "Engineering" },
  { href: "/use-cases", label: "Use Cases" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(18,20,17,0.6)] backdrop-blur-[20px] border-b border-[rgba(66,73,62,0.15)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tighter text-[#bcf1ae] font-display">Verdant AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[#c2c9bb] hover:text-[#bcf1ae] font-medium transition-colors ${
                  pathname === link.href ? "active text-[#bcf1ae]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] hover:opacity-90">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-down bg-[rgba(18,20,17,0.98)]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`animate-slide-down stagger-${index + 1} nav-link text-[#c2c9bb] hover:text-[#bcf1ae] font-medium transition-colors py-2 ${
                    pathname === link.href ? "active text-[#bcf1ae]" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className={`animate-slide-down stagger-6 bg-gradient-to-br from-[#bcf1ae] to-[#a1d494] text-[#0b390a] hover:opacity-90 w-full`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
