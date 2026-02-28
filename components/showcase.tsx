"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function Showcase() {
  const showcaseRef = useRef<HTMLElement>(null)
  const highlights = [
    {
      src: "/images/showcase-meeting.jpg",
      alt: "Audit and assurance meeting",
      title: "Audit and Assurance",
      description: "Comprehensive reviews that strengthen reporting accuracy and confidence.",
    },
    {
      src: "/images/showcase-brainstorm.jpg",
      alt: "Financial planning discussion",
      title: "Tax and Accounting",
      description: "Practical support for compliance, reporting, and sustainable decisions.",
      offsetClass: "md:mt-12",
    },
    {
      src: "/images/showcase-office.jpg",
      alt: "Business consulting session",
      title: "Business Consulting",
      description: "Advisory support focused on operational improvement and strategic growth.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-child").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active")
              }, index * 150)
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
    <section id="about" ref={showcaseRef} className="py-16 md:py-24 px-6 relative z-10 bg-brand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-900 mb-4">
            Your Trusted Partner in Audit and Consulting
          </h2>
          <p className="text-brand-600 max-w-3xl mx-auto">
            Ignite Associates has built a strong reputation for delivering world-class service across Tanzania with a
            focus on quality, integrity, and value for every client.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`aspect-[4/5] rounded-xl overflow-hidden shadow-lg reveal-child opacity-0 translate-y-8 relative ${highlight.offsetClass ?? ""}`}
            >
              <Image
                src={highlight.src}
                alt={highlight.alt}
                fill
                loading="lazy"
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 to-transparent">
                <h3 className="text-white font-serif text-2xl mb-1">{highlight.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
