import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import { SECTIONS } from "@/lib/markdown";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaunchWeek.ai — Launch Your SaaS in 5 Days",
  description:
    "26 free guides to go from built to launched. Positioning, content, distribution, conversion, and launch — the complete GTM playbook for solo founders.",
  openGraph: {
    title: "LaunchWeek.ai — Launch Your SaaS in 5 Days",
    description:
      "26 free guides covering the full GTM playbook. The marketing companion to VibeWeek.ai.",
    url: "https://launchweek.ai",
    siteName: "LaunchWeek.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchWeek.ai — Launch Your SaaS in 5 Days",
    description:
      "26 free guides for solo founders. Positioning, SEO, distribution, conversion, and launch — all in one week.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} min-h-screen bg-white text-gray-900 antialiased font-sans`}>
        <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">
            <Link
              href="/"
              className="font-semibold text-gray-900 hover:text-orange-600 transition-colors"
            >
              LaunchWeek.ai
            </Link>
            <nav className="flex items-center gap-1 overflow-x-auto">
              {SECTIONS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="text-sm text-gray-500 hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  {s.day !== null ? `Day ${s.day}` : s.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          {children}
        </main>

        <footer className="border-t border-gray-100 mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center text-sm text-gray-400">
            Also building?{" "}
            <a
              href="https://vibeweek.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-700 transition-colors"
            >
              VibeWeek.ai
            </a>{" "}
            helps you ship in a week.{" "}
            <span className="mx-2">·</span>
            Built by{" "}
            <a
              href="https://www.buildadataadvantage.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              Data Advantage
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
