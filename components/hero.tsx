"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const highlights = [
  { title: "Audit and Assurance", detail: "Statutory and compliance-ready reports" },
  { title: "Tax and Accounting", detail: "Practical support for filings and records" },
  { title: "Business Advisory", detail: "Growth-focused financial guidance" },
]

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
      { threshold: 0.08 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative z-10 px-5 pb-14 pt-32 md:px-6 md:pb-20 md:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-12">
          <div>
            <span className="eyebrow-chip reveal opacity-0 translate-y-8 transition-all duration-700">
              Premium Financial Care
            </span>

            <h1 className="reveal mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-900 opacity-0 translate-y-8 transition-all duration-700 sm:text-5xl md:text-6xl">
              Transform Your
              <span className="block gradient-text">Business Performance</span>
            </h1>

            <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-slate-600 opacity-0 translate-y-8 transition-all duration-700 md:text-xl">
              Ignite Associates delivers audit, tax, accounting, and advisory services that help organizations across
              Tanzania operate with confidence.
            </p>

            <div className="reveal mt-8 flex flex-col gap-3 opacity-0 translate-y-8 transition-all duration-700 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3.5 text-base font-bold text-white shadow-[0_10px_22px_rgba(30,110,242,0.35)] transition-all hover:bg-brand-600"
              >
                Book Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-8 py-3.5 text-base font-bold text-brand-900 shadow-sm transition-all hover:border-brand-300"
              >
                View Services
              </a>
            </div>

            <div className="reveal mt-8 grid gap-3 opacity-0 translate-y-8 transition-all duration-700 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="premium-card p-4">
                  <p className="text-sm font-extrabold text-brand-500">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative order-first opacity-0 translate-y-8 transition-all duration-700 lg:order-last">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-[0_20px_45px_rgba(10,30,70,0.14)]">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[1.3rem] bg-brand-100">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Ignite Associates professionals"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/35 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute right-3 top-6 rounded-2xl border border-white/90 bg-white px-4 py-3 shadow-xl md:right-5 md:top-7">
              <p className="text-lg font-extrabold text-brand-900">4.9</p>
              <p className="text-xs font-medium text-slate-500">Client Satisfaction</p>
            </div>

            <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/90 bg-white px-4 py-3 shadow-xl md:left-8">
              <p className="text-sm font-bold text-brand-900">Trusted Advisory</p>
              <p className="text-xs text-slate-500">Across Tanzania</p>
            </div>

            <div className="absolute -bottom-6 right-3 grid grid-cols-4 gap-1.5 md:right-6">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-brand-500/55 md:h-2 md:w-2" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
