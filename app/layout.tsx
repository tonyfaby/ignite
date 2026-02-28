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

const iconsVersion = "20260301"

export const metadata: Metadata = {
  metadataBase: new URL("https://ignite.co.tz"),
  title: "Ignite Associates | Audit, Tax and Accounting Services",
  description:
    "Ignite Associates is a professional audit firm in Tanzania providing audit and assurance, accounting, tax compliance, and business consulting services.",
  keywords:
    "Ignite Associates, audit and assurance, accounting services, tax compliance, business consulting, Tanzania",
  authors: [{ name: "Ignite Associates" }],
  openGraph: {
    type: "website",
    url: "https://ignite.co.tz",
    title: "Ignite Associates | Premier Audit and Consulting Services in Tanzania",
    description:
      "Your trusted partner for audit and assurance, accounting, tax compliance, and strategic business consulting.",
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
    title: "Ignite Associates | Audit and Consulting",
    description:
      "Professional audit, accounting, tax compliance, and business consulting services tailored for Tanzanian organizations.",
    images: ["/images/social-preview.jpg"],
  },
  icons: {
    icon: [
      { url: `/favicon.ico?v=${iconsVersion}` },
      { url: `/favicon-32x32.png?v=${iconsVersion}`, sizes: "32x32", type: "image/png" },
      { url: `/favicon-16x16.png?v=${iconsVersion}`, sizes: "16x16", type: "image/png" },
      { url: `/branding/ignite-favicon.png?v=${iconsVersion}`, sizes: "239x239", type: "image/png" },
    ],
    shortcut: [`/favicon.ico?v=${iconsVersion}`],
    apple: [{ url: `/apple-icon.png?v=${iconsVersion}`, sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1224",
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
