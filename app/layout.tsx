import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Oxanium, Merriweather, Fira_Code } from "next/font/google"

// Load Oxanium font
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
})

// Load Merriweather font
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-serif",
})

// Load Fira Code font
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "LaunchWeek.ai - Launch Your SaaS in Just One Week",
  description: "Transform your SaaS ideas into launched products in just 5 days, without coding skills.",
  icons: {
    icon: "https://azo00ezzuo1aawno.public.blob.vercel-storage.com/logo/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oxanium.variable} ${merriweather.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="https://azo00ezzuo1aawno.public.blob.vercel-storage.com/logo/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
