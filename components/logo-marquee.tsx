import Image from "next/image"

const clients = [
  { name: "Tanganyika Law Society", logo: "/client-logos/tanganyika-law-society-logo.jpg" },
  { name: "Chandria Industries", logo: "/client-logos/chandria-industries.jpg" },
  { name: "Her Initiative", logo: "/client-logos/her-initiative.jpg" },
  { name: "Top Talent Recruits", logo: "/client-logos/top-talent-recruits.jpg" },
  { name: "Child-help", logo: "/client-logos/child-help.jpg" },
  { name: "FMF", logo: "/client-logos/fmf.jpg" },
  { name: "Imperium", logo: "/client-logos/imperium.jpg" },
  { name: "Taifa", logo: "/client-logos/taifa.jpg" },
  { name: "SUNEGO Tanzania", logo: "/client-logos/client-305930203.jpg" },
  { name: "Romtun", logo: "/client-logos/romtun.jpg" },
]

export function LogoMarquee() {
  const marqueeClients = [...clients, ...clients]

  return (
    <section className="w-full overflow-hidden bg-white border-y border-brand-100 py-12 md:py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] md:text-xs text-brand-500 mb-8 uppercase tracking-[0.24em] font-bold">
          Serving Organizations Across Tanzania
        </p>

        <div className="flex relative w-full">
          <div className="flex animate-scroll gap-8 md:gap-12 px-2 items-center hover:[animation-play-state:paused]">
            {marqueeClients.map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex items-center gap-3 md:gap-5 min-w-max">
                <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden shrink-0">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    loading="lazy"
                    className="object-contain grayscale opacity-80"
                    sizes="48px"
                  />
                </div>
                <p className="text-sm md:text-lg lg:text-xl font-serif font-medium text-brand-600 whitespace-nowrap">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
