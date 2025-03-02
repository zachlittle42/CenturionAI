"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Centurion AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className={`text-gray-700 hover:text-brand-600 font-medium transition-colors ${
                activeSection === "services" ? "text-brand-600" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="#about"
              className={`text-gray-700 hover:text-brand-600 font-medium transition-colors ${
                activeSection === "about" ? "text-brand-600" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`text-gray-700 hover:text-brand-600 font-medium transition-colors ${
                activeSection === "contact" ? "text-brand-600" : ""
              }`}
            >
              Contact
            </Link>
            <Button asChild size="sm" className="bg-brand-600 hover:bg-brand-700">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="#services"
                className={`text-gray-700 hover:text-brand-600 font-medium transition-colors py-2 ${
                  activeSection === "services" ? "text-brand-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className={`text-gray-700 hover:text-brand-600 font-medium transition-colors py-2 ${
                  activeSection === "about" ? "text-brand-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className={`text-gray-700 hover:text-brand-600 font-medium transition-colors py-2 ${
                  activeSection === "contact" ? "text-brand-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                asChild
                size="sm"
                className="bg-brand-600 hover:bg-brand-700 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

