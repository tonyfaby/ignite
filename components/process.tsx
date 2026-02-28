"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

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
              }, index * 150)
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
    <section id="process" ref={processRef} className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-900 mb-4">
            A Proven Process to Achieve Your Biggest Goals
          </h2>
        </div>

        <div className="space-y-24">
          {/* Process Step 1 - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-child opacity-0 translate-y-8">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/process-analysis.jpg"
                  alt="Market Research"
                  fill
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-700 rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-900 text-white flex items-center justify-center font-serif font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-brand-900">Market Research</h3>
              </div>
              <p className="text-brand-600 leading-relaxed mb-6">
                We begin with comprehensive market analysis to understand your competitive landscape, identify
                opportunities, and uncover insights that drive strategic decisions. Our research methodology combines
                quantitative data analysis with qualitative stakeholder interviews.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-900 font-semibold border-b border-brand-900 pb-1 hover:gap-3 transition-all"
              >
                Learn More{" "}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Process Step 2 - Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-child opacity-0 translate-y-8">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-900 text-white flex items-center justify-center font-serif font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-brand-900">Tailored Strategy</h3>
              </div>
              <p className="text-brand-600 leading-relaxed mb-6">
                Based on our findings, we develop a customized strategic roadmap aligned with your business objectives.
                Each strategy is designed with clear milestones, actionable initiatives, and measurable KPIs to track
                progress and ensure accountability.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-900 font-semibold border-b border-brand-900 pb-1 hover:gap-3 transition-all"
              >
                Learn More{" "}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="relative order-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/process-strategy.jpg"
                  alt="Strategy Development"
                  fill
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-700 rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Process Step 3 - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-child opacity-0 translate-y-8">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/process-collaboration.jpg"
                  alt="Continuous Support"
                  fill
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-700 rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-900 text-white flex items-center justify-center font-serif font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-brand-900">Continuous Support</h3>
              </div>
              <p className="text-brand-600 leading-relaxed mb-6">
                Implementation is where strategy meets execution. We work alongside your team to ensure smooth
                deployment, monitor performance metrics in real-time, and provide ongoing optimization to adapt to
                changing market conditions and maximize results.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-900 font-semibold border-b border-brand-900 pb-1 hover:gap-3 transition-all"
              >
                Learn More{" "}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
