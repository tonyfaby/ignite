"use client"

import { useEffect, useRef } from "react"

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
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={servicesRef} className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-900 mb-6">
            Tailored Solutions for Modern Enterprises
          </h2>
          <p className="text-brand-600 max-w-2xl mx-auto">
            We provide comprehensive consulting services designed to accelerate growth and optimize performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group reveal-child opacity-0 translate-y-8">
            <div className="w-14 h-14 bg-brand-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-900/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-brand-900 mb-3">Strategic Consulting</h3>
            <p className="text-brand-600 leading-relaxed mb-6">
              We deconstruct complex market dynamics to build actionable roadmaps. From market entry to mergers, our
              strategies are built on rigorous data analysis.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-900 font-semibold text-sm group-hover:gap-3 transition-all"
            >
              Learn More{" "}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group reveal-child opacity-0 translate-y-8">
            <div className="w-14 h-14 bg-brand-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-900/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-brand-900 mb-3">Operational Efficiency</h3>
            <p className="text-brand-600 leading-relaxed mb-6">
              Streamline workflows and optimize resource allocation to maximize ROI. We identify bottlenecks and
              implement solutions that drive measurable improvements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-900 font-semibold text-sm group-hover:gap-3 transition-all"
            >
              Learn More{" "}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group reveal-child opacity-0 translate-y-8">
            <div className="w-14 h-14 bg-brand-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-900/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-brand-900 mb-3">Digital Transformation</h3>
            <p className="text-brand-600 leading-relaxed mb-6">
              Leverage cutting-edge technology to modernize your infrastructure. We guide you through digital adoption
              with minimal disruption and maximum impact.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-900 font-semibold text-sm group-hover:gap-3 transition-all"
            >
              Learn More{" "}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group reveal-child opacity-0 translate-y-8">
            <div className="w-14 h-14 bg-brand-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-900/20 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-brand-900 mb-3">Market Intelligence</h3>
            <p className="text-brand-600 leading-relaxed mb-6">
              Make informed decisions with in-depth market insights. We provide deep-dive analytics that reveal hidden
              opportunities and competitive advantages.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-900 font-semibold text-sm group-hover:gap-3 transition-all"
            >
              Learn More{" "}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
