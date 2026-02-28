"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#values", label: "Values" },
  { href: "#process", label: "Approach" },
  { href: "#pricing", label: "Engagement" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border border-white/70 bg-white/82 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "shadow-[0_14px_30px_rgba(9,28,68,0.12)]" : "shadow-[0_8px_20px_rgba(9,28,68,0.08)]"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <a href="#" className="flex items-center gap-2.5" onClick={closeMenu}>
            <Image
              src="/branding/site-logo.png"
              alt="Ignite Associates logo"
              width={54}
              height={54}
              priority
              className="h-11 w-11 object-contain md:h-12 md:w-12"
            />
            <div>
              <p className="text-sm font-extrabold tracking-[0.04em] text-brand-900 md:text-base">IGNITE ASSOCIATES</p>
              <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-brand-600 md:block">
                Audit and Advisory
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-brand-900 transition-colors hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(30,110,242,0.35)] transition-all hover:bg-brand-600 lg:flex"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-900 lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className="relative h-4 w-4">
                <span
                  className={`absolute left-0 top-1 h-[2px] w-4 bg-current transition ${isMenuOpen ? "translate-y-[5px] rotate-45" : ""}`}
                />
                <span className={`absolute left-0 top-[7px] h-[2px] w-4 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
                <span
                  className={`absolute left-0 top-[13px] h-[2px] w-4 bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-brand-50/96 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-sm flex-col justify-center px-6">
          <div className="space-y-6 rounded-3xl border border-brand-200 bg-white p-8 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-2xl font-bold tracking-tight text-brand-900"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-base font-bold text-white"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
