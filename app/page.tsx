import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

const Showcase = dynamic(() => import("@/components/showcase").then((mod) => ({ default: mod.Showcase })))
const Services = dynamic(() => import("@/components/services").then((mod) => ({ default: mod.Services })))
const Benefits = dynamic(() => import("@/components/benefits").then((mod) => ({ default: mod.Benefits })))
const Process = dynamic(() => import("@/components/process").then((mod) => ({ default: mod.Process })))
const Pricing = dynamic(() => import("@/components/pricing").then((mod) => ({ default: mod.Pricing })))
const ContactCTA = dynamic(() => import("@/components/contact-cta").then((mod) => ({ default: mod.ContactCTA })))

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-brand-50 text-brand-900 font-sans antialiased selection:bg-brand-500 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 -top-20 h-[34rem] w-[34rem] rounded-full bg-brand-200/45 blur-[120px]"></div>
        <div className="absolute -right-24 top-[28rem] h-[30rem] w-[30rem] rounded-full bg-cyan-200/35 blur-[120px]"></div>
      </div>

      <Navigation />
      <Hero />
      <LogoMarquee />
      <Showcase />
      <Services />
      <Benefits />
      <Process />
      <Pricing />
      <ContactCTA />
      <Footer />
    </main>
  )
}
