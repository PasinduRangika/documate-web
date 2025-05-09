"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Camera, Menu, Moon, Sun } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until client-side hydration is complete
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="h-6 w-6 bg-[#9DEAA8]/50 rounded-full" />
            <span>Documate</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-md bg-gray-100 dark:bg-gray-800" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Camera className="h-6 w-6 text-[#9DEAA8]" />
          <span className="bg-gradient-to-r from-[#9DEAA8] to-[#BBD5F8] bg-clip-text text-transparent">Documate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#9DEAA8] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#9DEAA8] transition-colors">
            About
          </Link>
          <Link href="/features" className="text-sm font-medium hover:text-[#9DEAA8] transition-colors">
            Features
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#9DEAA8] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button className="hidden md:flex bg-[#9DEAA8] text-black hover:bg-[#8BD997]">Get Started</Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="text-lg font-medium hover:text-[#9DEAA8] transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-[#9DEAA8] transition-colors">
                  About
                </Link>
                <Link href="/features" className="text-lg font-medium hover:text-[#9DEAA8] transition-colors">
                  Features
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-[#9DEAA8] transition-colors">
                  Contact
                </Link>
                <Button className="mt-4 bg-[#9DEAA8] text-black hover:bg-[#8BD997]">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
