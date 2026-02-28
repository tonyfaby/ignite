"use client"

import { useEffect, useRef } from "react"
import { ShieldCheck, Lock, BriefcaseBusiness, Scale, GraduationCap, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We uphold high ethical standards in every engagement to maintain trust and transparency.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Client information is protected with strict confidentiality and professional care.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professionalism",
    description: "Our team delivers reliable, high-quality work grounded in technical expertise.",
  },
  {
    icon: Scale,
    title: "Objectivity",
    description: "We provide impartial guidance and independent assessments based on evidence.",
  },
  {
    icon: GraduationCap,
    title: "Competence",
    description: "Our specialists continuously sharpen their skills to provide effective service.",
  },
  {
    icon: Sparkles,
    title: "Value-Adding Service",
    description: "Every engagement is designed to solve practical needs and support long-term performance.",
  },
]

export function Benefits() {
  const benefitsRef = useRef<HTMLElement>(null)

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

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="values" ref={benefitsRef} className="relative z-10 px-5 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <span className="eyebrow-chip mb-4">Why Ignite</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 md:text-5xl">
            Core <span className="gradient-text">Values</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-lg">
            We are committed to quality work, practical guidance, and measurable client value.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.title}
                className="reveal-child premium-card translate-y-8 p-6 opacity-0 transition-all duration-700 md:p-7"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className="text-2xl font-extrabold leading-tight text-brand-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
