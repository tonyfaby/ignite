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
    <main className="bg-brand-50 text-brand-900 font-sans selection:bg-brand-900 selection:text-white overflow-x-hidden antialiased">
      {/* Subtle Background Mesh */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-200/30 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob [animation-delay:2s]"></div>
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
