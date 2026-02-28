"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

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
    <section id="reviews" ref={showcaseRef} className="py-16 md:py-24 px-6 relative z-10 bg-brand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-900 mb-4">
            Reliable Expertise to Drive Your Greatest Success
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg reveal-child opacity-0 translate-y-8 relative">
            <Image
              src="/images/showcase-meeting.jpg"
              alt="Team Collaboration"
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg reveal-child opacity-0 translate-y-8 md:mt-12 relative">
            <Image
              src="/images/showcase-brainstorm.jpg"
              alt="Strategy Meeting"
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg reveal-child opacity-0 translate-y-8 relative">
            <Image
              src="/images/showcase-office.jpg"
              alt="Business Success"
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
