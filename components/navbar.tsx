"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/ai-transformation", label: "AI Transformation" },
  { href: "/ai-engineering", label: "AI Engineering" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/services/strategy-audit", label: "Strategy Audit" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-display font-bold text-xl text-gray-900">Centurion AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-gray-700 hover:text-brand-600 font-medium transition-colors ${
                  pathname === link.href ? "active text-brand-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-amber-500 hover:bg-amber-600 text-gray-900">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`animate-slide-down stagger-${index + 1} nav-link text-gray-700 hover:text-brand-600 font-medium transition-colors py-2 ${
                    pathname === link.href ? "active text-brand-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className={`animate-slide-down stagger-5 bg-amber-500 hover:bg-amber-600 text-gray-900 w-full`}
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
