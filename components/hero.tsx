"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-brand-200 mb-8 reveal opacity-0 translate-y-8 transition-all duration-800 ease-out shadow-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-brand-600">
                Registered Professional Firm in Tanzania
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-brand-900 leading-[1.1] mb-6 text-balance reveal opacity-0 translate-y-8 transition-all duration-800 ease-out">
              Premier <i className="font-serif text-brand-500">Audit, Tax, and Accounting</i> Services
            </h1>

            <p className="text-base md:text-lg text-brand-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed reveal opacity-0 translate-y-8 transition-all duration-800 ease-out">
              Ignite Associates supports businesses, government institutions, and non-government organizations with
              audit and assurance, accounting, tax compliance, and practical business consulting.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 reveal opacity-0 translate-y-8 transition-all duration-800 ease-out">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-brand-900 text-white font-medium transition-all hover:bg-black shadow-xl shadow-brand-900/10"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white border border-brand-200 text-brand-900 font-medium transition-all hover:border-brand-300 hover:bg-brand-50"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative reveal opacity-0 translate-y-8 transition-all duration-800 ease-out lg:order-last order-first">
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-xl bg-brand-100 overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Ignite Associates professionals discussing financial strategy"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700 border-[0] rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
