"use client"

import { useState, type FormEvent } from "react"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Thanks. Your request has been received and our team will contact you shortly.")
      ;(e.target as HTMLFormElement).reset()

      setTimeout(() => setMessage(""), 4500)
    }, 1400)
  }

  return (
    <section id="contact" className="relative z-10 px-5 py-14 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_18px_42px_rgba(10,32,72,0.12)]">
        <div className="grid lg:grid-cols-[0.95fr_1.2fr]">
          <div className="bg-gradient-to-br from-[#081a3f] via-[#081733] to-[#050e1f] px-6 py-10 text-white md:px-10 md:py-12">
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">Ready to Strengthen Your Financial Position?</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-blue-100/90 md:text-lg">
              Schedule a consultation with Ignite Associates and get a practical path for compliance, reporting, and
              performance improvement.
            </p>

            <div className="mt-8 space-y-5 md:mt-10">
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/90">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm text-blue-100/70">Call Us</p>
                  <a href="tel:+255717650065" className="text-lg font-bold leading-tight hover:text-cyan-200">
                    +255 717 650 065
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/90">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm text-blue-100/70">Email Us</p>
                  <a href="mailto:info@ignite.co.tz" className="text-lg font-bold leading-tight hover:text-cyan-200">
                    info@ignite.co.tz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/90">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm text-blue-100/70">Visit Us</p>
                  <p className="text-lg font-bold leading-tight text-white">Victoria Green Acres House, Ground Floor</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 md:mt-10">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div className="bg-[#f6f8fc] px-6 py-8 md:px-10 md:py-12">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="border-b border-slate-300 pb-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:text-base"
                />
              </div>
              <div className="border-b border-slate-300 pb-2.5 pt-3">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:text-base"
                />
              </div>
              <div className="border-b border-slate-300 pb-2.5 pt-3">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:text-base"
                />
              </div>
              <div className="border-b border-slate-300 pb-2.5 pt-3">
                <input
                  type="text"
                  required
                  placeholder="Organization Name"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:text-base"
                />
              </div>
              <div className="border-b border-slate-300 pb-2.5 pt-3">
                <select
                  required
                  defaultValue=""
                  className="w-full bg-transparent text-sm text-slate-700 outline-none md:text-base"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option>Audit and Assurance</option>
                  <option>Tax Compliance</option>
                  <option>Accounting Services</option>
                  <option>Business Consulting</option>
                </select>
              </div>
              <div className="border-b border-slate-300 pb-2.5 pt-3">
                <textarea
                  rows={3}
                  placeholder="Additional details or request"
                  className="w-full resize-none bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-[0_10px_20px_rgba(30,110,242,0.35)] transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
              >
                {isSubmitting ? "Sending Request..." : "Schedule Consultation"}
              </button>

              <p className="pt-3 text-xs leading-relaxed text-slate-500 md:text-sm">
                By submitting this form, you agree to our privacy and data handling policy.
              </p>
              {message && <p className="text-sm font-semibold text-green-600">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
