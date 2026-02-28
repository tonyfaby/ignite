import Image from "next/image"

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Engagement" },
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 px-5 pb-7 pt-6 md:px-6 md:pb-10 md:pt-8">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-brand-950 px-6 py-9 text-slate-200 shadow-[0_24px_50px_rgba(4,8,18,0.44)] md:px-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/branding/site-logo.png"
                alt="Ignite Associates logo"
                width={46}
                height={46}
                className="h-11 w-11 object-contain"
              />
              <p className="text-xl font-extrabold tracking-[0.04em] text-white">IGNITE ASSOCIATES</p>
            </div>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              Professional audit, tax, and accounting excellence across Tanzania.
            </p>

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Stay Updated</p>
              <form className="mt-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b border-slate-700 bg-transparent pb-2.5 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button
                  type="button"
                  className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-950 transition hover:bg-slate-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-300 underline underline-offset-2 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Contact Info</p>
            <div className="mt-4 space-y-4 text-sm text-slate-300 md:text-base">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Phone</p>
                <a href="tel:+255717650065" className="mt-1 block font-semibold text-white hover:text-cyan-300">
                  +255 717 650 065
                </a>
                <a href="tel:+255718129114" className="font-semibold text-white hover:text-cyan-300">
                  +255 718 129 114
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Email</p>
                <a href="mailto:info@ignite.co.tz" className="mt-1 block font-semibold text-white hover:text-cyan-300">
                  info@ignite.co.tz
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Location</p>
                <p className="mt-1 font-semibold text-white">Victoria Green Acres House, Ground Floor, Tanzania</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 border-t border-slate-800 pt-5 text-xs text-slate-500 md:mt-11 md:flex md:items-center md:justify-between md:text-sm">
          <p>&copy; {year} Ignite Associates. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap gap-4 md:mt-0">
            <a href="#" className="underline underline-offset-2 hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="underline underline-offset-2 hover:text-slate-300">
              Terms of Service
            </a>
            <a href="https://ignite.co.tz" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-slate-300">
              ignite.co.tz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
