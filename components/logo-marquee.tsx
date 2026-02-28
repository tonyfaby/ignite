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
    <section className="relative z-10 w-full overflow-hidden border-y border-brand-200/70 bg-white/75 py-9 md:py-11">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 md:mb-7 md:text-xs">
          Serving Organizations Across Tanzania
        </p>

        <div className="relative flex w-full marquee-edge-fade">
          <div className="flex animate-scroll items-center gap-4 px-1 hover:[animation-play-state:paused] md:gap-6">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex min-w-max items-center gap-2.5 rounded-full border border-brand-100 bg-white px-3 py-2 shadow-sm md:gap-3"
              >
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-slate-100 md:h-9 md:w-9">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <p className="text-[11px] font-semibold text-slate-700 md:text-sm">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
