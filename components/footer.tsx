import Link from "next/link"
import { Camera } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Camera className="h-6 w-6 text-[#9DEAA8]" />
              <span className="bg-gradient-to-r from-[#9DEAA8] to-[#BBD5F8] bg-clip-text text-transparent">
                Documate
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Control your document camera like never before — live, interactive, and hassle-free
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#9DEAA8] dark:hover:text-[#9DEAA8] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Documate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
