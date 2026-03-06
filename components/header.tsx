"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://azo00ezzuo1aawno.public.blob.vercel-storage.com/logo/launchweek-logo.svg"
            alt="LaunchWeek.ai Logo"
            width={150}
            height={32}
            className="h-8 w-auto hidden md:block"
          />
          <Image
            src="https://azo00ezzuo1aawno.public.blob.vercel-storage.com/logo/launchweek-icon.svg"
            alt="LaunchWeek.ai Icon"
            width={32}
            height={32}
            className="h-8 w-auto md:hidden"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#process" className="text-sm font-medium hover:underline underline-offset-4">
            Process
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button className="ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
