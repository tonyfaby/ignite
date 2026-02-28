import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-brand-200 relative z-10 bg-brand-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/branding/site-logo.png"
            alt="Ignite Associates logo"
            width={44}
            height={44}
            className="w-11 h-11 object-contain"
          />
          <span className="text-lg font-bold text-brand-900 font-serif">Ignite Associates</span>
        </div>
        <div className="text-brand-500 text-sm">&copy; {year} Ignite Associates. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="mailto:info@ignite.co.tz" className="text-brand-500 hover:text-brand-900 transition-colors">
            info@ignite.co.tz
          </a>
          <a href="tel:+255717650065" className="text-brand-500 hover:text-brand-900 transition-colors">
            +255 717 650 065
          </a>
          <a
            href="https://ignite.co.tz/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-500 hover:text-brand-900 transition-colors"
          >
            ignite.co.tz
          </a>
        </div>
      </div>
    </footer>
  )
}
