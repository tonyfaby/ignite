"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Check } from "lucide-react"

const services = [
  {
    title: "Audit and Assurance",
    description:
      "Independent assurance work that improves confidence in your reporting and compliance position.",
    points: ["Risk and controls review", "Financial statement audit", "Compliance-aligned reporting"],
  },
  {
    title: "Tax Compliance",
    description:
      "Clear and timely support for planning, filing, health checks, and tax authority engagements.",
    points: ["Tax planning and filing", "Audit and objection support", "VAT and refund guidance"],
  },
  {
    title: "Accounting Services",
    description:
      "Reliable bookkeeping and reporting that gives leadership the numbers needed for smart decisions.",
    points: ["Bookkeeping support", "Periodic management reports", "Year-end close assistance"],
  },
  {
    title: "Business Consulting",
    description:
      "Practical advisory that strengthens financial management, operations, and long-term growth.",
    points: ["Process improvement", "Strategic planning support", "Performance advisory"],
  },
]

export function Services() {
  const servicesRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-child").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active")
              }, index * 90)
            })
          }
        })
      },
      { threshold: 0.12 },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={servicesRef} className="relative z-10 px-5 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <span className="eyebrow-chip mb-4">What We Offer</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 md:text-5xl">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-lg">
            Professional services built to protect compliance, improve clarity, and support better decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal-child premium-card flex h-full translate-y-8 flex-col p-6 opacity-0 transition-all duration-700"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md">
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              </div>

              <h3 className="text-2xl font-bold leading-tight text-brand-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>

              <ul className="mt-5 space-y-2.5 border-t border-brand-100 pt-5 text-sm text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-cyan-500" strokeWidth={2.5} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-500 transition-all hover:gap-3"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
