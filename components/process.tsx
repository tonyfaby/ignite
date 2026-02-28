"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery and Risk Assessment",
    description:
      "We assess your operations, obligations, and reporting priorities to define the right engagement scope.",
    image: "/images/process-analysis.jpg",
    alt: "Discovery discussion",
  },
  {
    number: "02",
    title: "Execution and Compliance",
    description:
      "Our team executes the agreed scope under professional standards while maintaining clear communication.",
    image: "/images/process-strategy.jpg",
    alt: "Execution and planning",
  },
  {
    number: "03",
    title: "Reporting and Advisory",
    description:
      "You receive clear outputs and practical recommendations to support better compliance and business outcomes.",
    image: "/images/process-collaboration.jpg",
    alt: "Advisory collaboration",
  },
]

export function Process() {
  const processRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-child").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active")
              }, index * 120)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (processRef.current) {
      observer.observe(processRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={processRef} className="relative z-10 px-5 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <span className="eyebrow-chip mb-4">Our Approach</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 md:text-5xl">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-lg">
            A practical three-step process focused on clarity, compliance, and measurable outcomes.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="reveal-child grid translate-y-8 items-center gap-4 rounded-3xl border border-brand-200 bg-white/90 p-4 opacity-0 shadow-[0_12px_28px_rgba(10,30,70,0.08)] transition-all duration-700 md:gap-7 md:p-6 lg:grid-cols-[1fr_1.15fr]"
            >
              <div className={`relative ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                  <Image src={step.image} alt={step.alt} fill loading="lazy" className="object-cover" sizes="50vw" />
                </div>
              </div>

              <div>
                <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-bold tracking-[0.12em] text-brand-600">
                  STEP {step.number}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-brand-900 md:text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{step.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-500 transition-all hover:gap-3"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
