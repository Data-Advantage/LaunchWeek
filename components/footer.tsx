import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="https://azo00ezzuo1aawno.public.blob.vercel-storage.com/logo/launchweek-logo.svg"
                alt="LaunchWeek.ai Logo"
                width={150}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Founded by the team behind Data Advantage, LaunchWeek.ai helps transform your SaaS ideas into launched
              products in just one week, without coding skills.
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="mt-2 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-xs" />
                <Button type="submit" variant="outline">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-muted-foreground hover:text-foreground">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#team" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Image
              src="https://azo00ezzuo1aawno.public.blob.vercel-storage.com/logo/launchweek-icon.svg"
              alt="LaunchWeek.ai Icon"
              width={16}
              height={16}
              className="h-4 w-auto"
            />
            &copy; {new Date().getFullYear()} LaunchWeek.ai by Data Advantage. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Data-Advantage/vibestack"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
