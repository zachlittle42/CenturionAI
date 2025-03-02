import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl text-white">Centurion AI</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Build your AI-driven business with confidence and clarity. We implement systems that deliver measurable
              ROI and pave a clear path to scalable growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-brand-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-brand-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-400 mt-0.5" />
                <span className="text-gray-300 hover:text-white transition-colors">info@centurionai.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-400 mt-0.5" />
                <span className="text-gray-300 hover:text-white transition-colors">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-400 mt-0.5" />
                <span className="text-gray-300 hover:text-white transition-colors">123 AI Boulevard, Tech City</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Centurion AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

