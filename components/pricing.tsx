"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Check } from "lucide-react"

const packages = [
  {
    name: "Audit and Assurance",
    subtitle: "For annual statutory and donor reporting requirements",
    label: "Scope-Based",
    features: [
      "Planning and risk assessment",
      "Financial statement review",
      "Independent assurance report",
      "Management recommendations",
    ],
    cta: "Request Package",
  },
  {
    name: "Tax and Accounting Retainer",
    subtitle: "For ongoing compliance and reporting support",
    label: "Monthly / Quarterly",
    features: [
      "Tax filing and compliance management",
      "Accounting and reporting support",
      "Tax health checks",
      "Priority access to advisory team",
      "Regulatory updates and guidance",
    ],
    cta: "Request Package",
    featured: true,
  },
  {
    name: "Business Consulting",
    subtitle: "For strategic or project-based advisory assignments",
    label: "Custom Quote",
    features: [
      "Financial process improvement",
      "Planning and execution support",
      "Performance and risk review",
      "Decision support for leadership",
    ],
    cta: "Request Package",
  },
]

export function Pricing() {
  const pricingRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-child").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (pricingRef.current) {
      observer.observe(pricingRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" ref={pricingRef} className="relative z-10 px-5 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="eyebrow-chip mb-4">Engagement Models</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 md:text-5xl">
            Transparent <span className="gradient-text">Engagement</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-lg">
            Choose the support model that fits your reporting cycle, internal capacity, and advisory needs.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`reveal-child translate-y-8 rounded-3xl p-6 opacity-0 transition-all duration-700 md:p-8 ${
                pkg.featured
                  ? "border-2 border-brand-500 bg-white shadow-[0_14px_30px_rgba(30,110,242,0.15)]"
                  : "border border-brand-200 bg-white/92 shadow-[0_10px_24px_rgba(8,20,48,0.08)]"
              }`}
            >
              <h3 className="text-2xl font-extrabold leading-tight text-brand-900">{pkg.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{pkg.subtitle}</p>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-brand-500">{pkg.label}</p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.7} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all ${
                  pkg.featured
                    ? "bg-gradient-to-r from-brand-500 to-cyan-500 text-white shadow-[0_10px_20px_rgba(30,110,242,0.35)]"
                    : "bg-brand-900 text-white hover:bg-brand-950"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-600 md:text-base">
          Need a tailored arrangement for your organization?
          <a href="#contact" className="ml-2 font-bold text-brand-500 hover:text-brand-600">
            Contact us for a custom quote
          </a>
        </p>
      </div>
    </section>
  )
}
