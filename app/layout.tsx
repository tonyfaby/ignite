import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ascendia | Strategic Consulting & Growth",
  description:
    "Ascendia provides data-driven strategic consulting for modern enterprises looking to scale, optimize operations, and navigate complex markets.",
  keywords: "consulting, strategy, business growth, operational efficiency, digital transformation",
  authors: [{ name: "Ascendia Consulting" }],
  openGraph: {
    type: "website",
    url: "https://ascendia.demo",
    title: "Ascendia | Strategic Clarity for Complex Markets",
    description: "We partner with visionary leaders to navigate uncertainty and unlock sustainable growth.",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascendia | Strategic Consulting",
    description: "We partner with visionary leaders to navigate uncertainty and unlock sustainable growth.",
    images: ["/images/social-preview.jpg"],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%231C1917'/><text y='.9em' x='50' textAnchor='middle' fontFamily='serif' fontWeight='bold' fontSize='60' fill='white'>A</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1917",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
