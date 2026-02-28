"use client"

import { useEffect, useRef } from "react"

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
    <section id="pricing" ref={pricingRef} className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-900 mb-6">Engagement Models</h2>
          <p className="text-brand-600">
            Flexible ways to work with Ignite Associates based on your scope, complexity, and reporting timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl flex flex-col reveal-child opacity-0 translate-y-8 transition-all duration-600 border border-brand-200 hover:border-brand-400 hover:shadow-xl">
            <h3 className="text-xl font-serif font-bold text-brand-900 mb-2">Annual Audit and Assurance</h3>
            <p className="text-brand-500 text-sm mb-6">For organizations with annual statutory reporting needs.</p>
            <div className="text-2xl font-serif text-brand-900 mb-6">Scope-Based Engagement</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-brand-600">
                <svg className="w-5 h-5 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Risk and controls review
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-600">
                <svg className="w-5 h-5 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Financial statement assurance
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-600">
                <svg className="w-5 h-5 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Compliance-ready reporting
              </li>
            </ul>
            <a
              href="#contact"
              className="w-full py-3 rounded-full border border-brand-200 text-brand-900 font-bold hover:bg-brand-50 text-center transition-colors"
            >
              Discuss Scope
            </a>
          </div>

          {/* Card 2 (Popular) */}
          <div className="bg-brand-900 p-8 rounded-3xl flex flex-col relative reveal-child opacity-0 translate-y-8 transition-all duration-600 shadow-2xl text-white transform md:-translate-y-4">
            <div className="absolute top-0 right-0 mt-6 mr-6 px-3 py-1 bg-white text-brand-900 text-xs font-bold uppercase tracking-wide rounded-full">
              Popular
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Tax and Accounting Retainer</h3>
            <p className="text-brand-300 text-sm mb-6">For teams requiring ongoing financial compliance support.</p>
            <div className="text-2xl font-serif mb-6">Monthly or Quarterly Support</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-brand-100">
                <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Tax planning and return filing
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-100">
                <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Accounting and reporting support
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-100">
                <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Tax health checks and risk review
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-100">
                <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Priority advisory access
              </li>
            </ul>
            <a
              href="#contact"
              className="w-full py-3 rounded-full bg-white text-brand-900 font-bold hover:bg-brand-100 text-center transition-colors"
            >
              Discuss Scope
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl flex flex-col reveal-child opacity-0 translate-y-8 transition-all duration-600 border border-brand-200 hover:border-brand-400 hover:shadow-xl">
            <h3 className="text-xl font-serif font-bold text-brand-900 mb-2">Business Consulting Projects</h3>
            <p className="text-brand-500 text-sm mb-6">For specific transformation, strategy, or special assignments.</p>
            <div className="text-2xl font-serif text-brand-900 mb-6">Custom Engagement</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-brand-600">
                <svg className="w-5 h-5 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Financial management advisory
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-600">
                <svg className="w-5 h-5 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Process and controls improvement
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-600">
                <svg className="w-5 h-5 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>{" "}
                Strategic planning support
              </li>
            </ul>
            <a
              href="#contact"
              className="w-full py-3 rounded-full border border-brand-200 text-brand-900 font-bold hover:bg-brand-50 text-center transition-colors"
            >
              Discuss Scope
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
