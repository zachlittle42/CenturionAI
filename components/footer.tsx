import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-[#bcf1ae]/30 to-transparent" />
      <footer className="bg-[#1a1c19] text-white py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-lg font-bold text-[#bcf1ae] font-display tracking-tighter">Verdant AI</span>
              </div>
              <p className="text-[#c2c9bb]/60 mb-6 leading-relaxed">
                AI Operating System Setup for growing teams.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/verdantai" target="_blank" rel="noopener noreferrer" className="hover-glow text-white hover:text-[#bcf1ae] transition-colors rounded-lg p-1">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/verdantai" target="_blank" rel="noopener noreferrer" className="hover-glow text-white hover:text-[#bcf1ae] transition-colors rounded-lg p-1">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#bcf1ae] rounded-full mr-2"></span>
                    AI Operating System Setup
                  </Link>
                </li>
                <li>
                  <Link href="/strategy" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#bcf1ae] rounded-full mr-2"></span>
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/engineering" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#bcf1ae] rounded-full mr-2"></span>
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/fundamentals" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#bcf1ae] rounded-full mr-2"></span>
                    Fundamentals
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#bcf1ae] rounded-full mr-2"></span>
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="/get-started" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#bcf1ae] rounded-full mr-2"></span>
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#bcf1ae] rounded-full mr-2"></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#bcf1ae] mt-0.5" />
                  <a href="mailto:hello@verdant.ai" className="text-[#c2c9bb]/60 hover:text-[#bcf1ae] transition-colors">hello@verdant.ai</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#42493e]/10 mt-12 pt-8 text-center text-[#c2c9bb]/60">
            <p>&copy; {new Date().getFullYear()} Verdant AI Partners. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
