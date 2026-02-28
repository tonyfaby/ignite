export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-brand-200 relative z-10 bg-brand-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-900 rounded-full flex items-center justify-center text-white font-serif italic font-bold text-sm">
            A
          </div>
          <span className="text-lg font-bold text-brand-900 font-serif">Ascendia.</span>
        </div>
        <div className="text-brand-500 text-sm">&copy; 2025 Ascendia Consulting. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="text-brand-500 hover:text-brand-900 transition-colors">
            Twitter
          </a>
          <a href="#" className="text-brand-500 hover:text-brand-900 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-brand-500 hover:text-brand-900 transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
