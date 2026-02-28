"use client"

import Image from "next/image"
import { useState, type FormEvent } from "react"

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Thanks! We'll be in touch shortly.")
      ;(e.target as HTMLFormElement).reset()

      setTimeout(() => {
        setMessage("")
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-900 rounded-xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-16 relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full mix-blend-screen opacity-20 -mr-20 -mt-20 blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-4">
                  Let's Get in Touch With Our Expert Team
                </h2>
                <p className="text-lg text-brand-200 mb-10 max-w-md">
                  Book a free 30-minute discovery call to see how Ascendia can help you achieve your business goals.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white focus:bg-white/20 transition-colors placeholder:text-brand-400 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email"
                      className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white focus:bg-white/20 transition-colors placeholder:text-brand-400 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white focus:bg-white/20 transition-colors placeholder:text-brand-400 backdrop-blur-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 rounded-full bg-white text-brand-900 font-bold text-lg hover:bg-brand-100 transition-colors shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Scheduling..." : "Call me back"}</span>
                    {isSubmitting && (
                      <svg
                        className="w-5 h-5 ml-2 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                  </button>
                  {message && <p className="text-sm text-center font-medium text-green-400 mt-2">{message}</p>}
                </form>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <Image
                src="/images/contact-portrait.jpg"
                alt="Contact Us"
                fill
                loading="lazy"
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
