"use client"

import { useEffect, useRef, useState } from "react"

export function Stats() {
  const statsRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            entry.target.classList.add("active")

            // Start counter animations
            const counters = entry.target.querySelectorAll(".counter")
            counters.forEach((counter) => {
              const target = +(counter.getAttribute("data-target") || 0)
              const duration = 2000
              const increment = target / (duration / 16)

              let current = 0
              const updateCounter = () => {
                current += increment
                if (current < target) {
                  counter.textContent = Math.ceil(current).toString()
                  requestAnimationFrame(updateCounter)
                } else {
                  counter.textContent = target.toString()
                }
              }
              updateCounter()
            })
          }
        })
      },
      { threshold: 0.15 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="reviews" ref={statsRef} className="py-4 md:py-8 px-6 relative z-20 bg-brand-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-brand-200 pb-8 opacity-0 translate-y-8 transition-all duration-800">
          <div className="p-8 text-center border-b md:border-b-0 border-r-0 md:border-r border-brand-200 last:border-0">
            <h3 className="text-5xl md:text-6xl font-serif font-medium text-brand-900 mb-3 flex justify-center items-center">
              $
              <span className="counter" data-target="7">
                0
              </span>
              M+
            </h3>
            <p className="text-brand-500 font-medium uppercase tracking-wide text-sm">Revenue Generated</p>
          </div>
          <div className="p-8 text-center border-b md:border-b-0 border-r-0 md:border-r border-brand-200 last:border-0">
            <h3 className="text-5xl md:text-6xl font-serif font-medium text-brand-900 mb-3 flex justify-center items-center">
              <span className="counter" data-target="72">
                0
              </span>
              %
            </h3>
            <p className="text-brand-500 font-medium uppercase tracking-wide text-sm">YoY Growth</p>
          </div>
          <div className="p-8 text-center border-b md:border-b-0 border-r-0 md:border-r border-brand-200 last:border-0">
            <h3 className="text-5xl md:text-6xl font-serif font-medium text-brand-900 mb-3 flex justify-center items-center">
              <span className="counter" data-target="150">
                0
              </span>
              +
            </h3>
            <p className="text-brand-500 font-medium uppercase tracking-wide text-sm">Successful Audits</p>
          </div>
        </div>
      </div>
    </section>
  )
}
