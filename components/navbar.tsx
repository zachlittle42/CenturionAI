"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/tech-basics", label: "Tech Basics" },
  { href: "/strategy-audit", label: "Strategy Audit" },
  { href: "/ai-transformation", label: "AI Transformation" },
  { href: "/ai-engineering", label: "AI Engineering" },
  { href: "/openclaw-ai-agents", label: "OpenClaw AI Agents" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15,23,42,0.95)] backdrop-blur-md border-b border-[rgba(148,163,184,0.1)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-display font-bold text-xl text-white">Centurion AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-slate-400 hover:text-white font-medium transition-colors ${
                  pathname === link.href ? "active text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-400 text-white">
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
          <div className="lg:hidden py-4 animate-slide-down bg-[rgba(15,23,42,0.98)]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`animate-slide-down stagger-${index + 1} nav-link text-slate-400 hover:text-white font-medium transition-colors py-2 ${
                    pathname === link.href ? "active text-white" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className={`animate-slide-down stagger-6 bg-blue-500 hover:bg-blue-400 text-white w-full`}
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
