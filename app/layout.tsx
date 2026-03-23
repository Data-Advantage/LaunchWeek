import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "LaunchWeek.ai — Build Your Agent Company in 5 Days",
  description:
    "The free playbook that teaches founders to build an AI agent company — not just launch a product. 33 guides, 5 templates, and a running company by Day 5.",
  openGraph: {
    title: "LaunchWeek.ai — Build Your Agent Company in 5 Days",
    description:
      "33 free guides + 5 agent templates. Launch your SaaS and build the AI team that keeps it running.",
    url: "https://launchweek.ai",
    siteName: "LaunchWeek.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchWeek.ai — Build Your Agent Company in 5 Days",
    description:
      "The free playbook for solo founders. Launch your product AND build the agent company that runs it.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} min-h-screen bg-slate-50 text-slate-900 antialiased font-sans`}
      >
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link
                href="/"
                className="font-heading text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-brand-600"
              >
                LaunchWeek
                <span className="text-brand-500">.ai</span>
              </Link>

              <nav className="flex items-center gap-1 overflow-x-auto">
                {SECTIONS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 whitespace-nowrap"
                  >
                    {s.day !== null ? `Day ${s.day}` : s.label}
                  </Link>
                ))}
                <span className="mx-1 h-4 w-px bg-slate-200" />
                <Link
                  href="/templates"
                  className="rounded-md bg-brand-500/10 px-3 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-500/20 whitespace-nowrap"
                >
                  Templates
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-slate-200/60 bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <div>
                <Link
                  href="/"
                  className="font-heading text-base font-bold text-slate-900"
                >
                  LaunchWeek<span className="text-brand-500">.ai</span>
                </Link>
                <p className="mt-1 text-sm text-slate-400">
                  The GTM companion to{" "}
                  <a
                    href="https://vibeweek.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-500 hover:text-brand-700 transition-colors"
                  >
                    VibeWeek.ai
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <a
                  href="https://vibeweek.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-600 transition-colors"
                >
                  VibeWeek
                </a>
                <a
                  href="https://vibereference.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-600 transition-colors"
                >
                  VibeReference
                </a>
                <a
                  href="https://www.buildadataadvantage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-600 transition-colors"
                >
                  Data Advantage
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
              Open source. Fork it, adapt it, contribute to it.
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
