import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Launch Your SaaS in Just One Week
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                LaunchWeek.ai empowers entrepreneurs to transform ideas into launched products in just 5 days, without
                coding skills.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-1">
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex -space-x-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background"
                />
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background"
                />
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background"
                />
              </div>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">250+</span> entrepreneurs launched this month
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl border bg-background shadow-xl">
              <Image
                src="/placeholder.svg?height=450&width=600"
                alt="LaunchWeek.ai Dashboard"
                width={600}
                height={450}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="space-y-2 text-center">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Day 3: Full App Build
                  </div>
                  <p className="text-xl font-bold text-white">Building your SaaS application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
