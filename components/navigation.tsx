"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }
    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      } ${isScrolled ? "py-2" : "py-4 md:py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group relative z-50" onClick={closeMenu}>
            <div className="w-10 h-10 bg-brand-900 rounded-full flex items-center justify-center text-white font-serif italic text-xl group-hover:scale-105 transition-transform">
              A
            </div>
            <span className="text-xl font-bold text-brand-900 tracking-tight font-serif">Ascendia.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
            <a href="#services" className="text-sm font-medium text-brand-900 hover:text-brand-600 transition-colors">
              Expertise
            </a>
            <a href="#process" className="text-sm font-medium text-brand-900 hover:text-brand-600 transition-colors">
              Methodology
            </a>
            <a href="#reviews" className="text-sm font-medium text-brand-900 hover:text-brand-600 transition-colors">
              Results
            </a>
            <a href="#pricing" className="text-sm font-medium text-brand-900 hover:text-brand-600 transition-colors">
              Investment
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-3 pl-5 pr-1.5 py-1.5 bg-brand-900 text-white rounded-full hover:bg-brand-800 transition-all group"
            >
              <span className="font-medium text-sm pl-1">Get in touch</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-900 group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 text-brand-900 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`h-0.5 bg-current transition-all duration-300 origin-center ${isMenuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0 w-0" : "w-4"}`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 origin-center ${isMenuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-0 h-screen bg-brand-50 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <a
            href="#services"
            className="text-3xl font-serif text-brand-900 hover:text-brand-600 transition-colors"
            onClick={closeMenu}
          >
            Expertise
          </a>
          <a
            href="#process"
            className="text-3xl font-serif text-brand-900 hover:text-brand-600 transition-colors"
            onClick={closeMenu}
          >
            Methodology
          </a>
          <a
            href="#reviews"
            className="text-3xl font-serif text-brand-900 hover:text-brand-600 transition-colors"
            onClick={closeMenu}
          >
            Results
          </a>
          <a
            href="#pricing"
            className="text-3xl font-serif text-brand-900 hover:text-brand-600 transition-colors"
            onClick={closeMenu}
          >
            Investment
          </a>
          <div className="pt-8">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-brand-900 text-white text-lg font-semibold hover:bg-black transition-all shadow-xl shadow-brand-900/10"
              onClick={closeMenu}
            >
              Call me back
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
