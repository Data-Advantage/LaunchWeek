import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Launch Your SaaS?</h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Join hundreds of entrepreneurs who have successfully launched their SaaS products in just one week.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" className="gap-1">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/80">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-2">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
