export function LogoMarquee() {
  const logos = ["ACME", "Globex", "Sooli", "Umbriel", "Vertex", "Zenon"]

  return (
    <div className="w-full overflow-hidden bg-white border-y border-brand-100 py-12 md:py-16 relative z-10">
      <p className="text-center text-xs text-brand-500 mb-8 uppercase tracking-[0.2em] font-bold">
        Trusted by World-Class Teams
      </p>
      <div className="flex relative w-full">
        <div className="flex animate-scroll gap-20 px-8 items-center grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xl font-serif font-bold text-brand-900 whitespace-nowrap"
            >
              {logo}
              {(logo === "ACME" || logo === "Globex") && (
                <span className="text-xs font-sans font-normal border border-brand-900 px-1 rounded">
                  {logo === "ACME" ? "LTD" : "INC"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
