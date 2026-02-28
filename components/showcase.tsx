"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const highlights = [
  {
    src: "/images/showcase-meeting.jpg",
    alt: "Audit and assurance meeting",
    title: "Audit and Assurance",
    description: "Comprehensive reviews that strengthen reporting quality and stakeholder confidence.",
  },
  {
    src: "/images/showcase-brainstorm.jpg",
    alt: "Financial planning discussion",
    title: "Tax and Accounting",
    description: "Reliable compliance and reporting support with practical guidance at each step.",
  },
  {
    src: "/images/showcase-office.jpg",
    alt: "Business consulting session",
    title: "Business Consulting",
    description: "Advisory support focused on performance, controls, and strategic growth decisions.",
  },
]

export function Showcase() {
  const showcaseRef = useRef<HTMLElement>(null)

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

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={showcaseRef} className="relative z-10 px-5 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <span className="eyebrow-chip mb-4">About Ignite</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 md:text-5xl">
            Trusted Financial <span className="gradient-text">Partner</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-600 md:text-lg">
            We support businesses, public institutions, and organizations across Tanzania with professional service,
            technical depth, and dependable execution.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="reveal-child premium-card translate-y-8 overflow-hidden opacity-0 transition-all duration-700"
            >
              <div className="relative aspect-[5/4]">
                <Image
                  src={highlight.src}
                  alt={highlight.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-2xl font-extrabold text-brand-900">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
