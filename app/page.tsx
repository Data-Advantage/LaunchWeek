import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Code, Rocket, MessageSquare, BarChart } from "lucide-react"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { CTASection } from "@/components/cta-section"
import { TeamSection } from "@/components/team-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <ProcessSection />
        <Testimonials />
        <PricingSection />
        <TeamSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

function ProcessSection() {
  const steps = [
    {
      day: "Day 1",
      title: "Idea & Initial App Build",
      description:
        "Define your product vision, create a database schema, and build your initial app version with AI assistance.",
      icon: <Calendar className="h-10 w-10 text-primary" />,
    },
    {
      day: "Day 2",
      title: "User Feedback & Refinement",
      description: "Share your prototype with potential users, collect feedback, and refine your application design.",
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
    },
    {
      day: "Day 3",
      title: "Full App Build",
      description: "Complete all essential functionality, implement authentication, and ensure responsive design.",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      day: "Day 4",
      title: "Marketing Content Build",
      description: "Create landing page content, develop email templates, and build your SEO strategy.",
      icon: <BarChart className="h-10 w-10 text-primary" />,
    },
    {
      day: "Day 5",
      title: "Promotion & Launch",
      description: "Deploy your final application, publish marketing materials, and begin user acquisition.",
      icon: <Rocket className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="process" className="bg-slate-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              From Idea to Launch in 5 Days
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our structured 5-day framework guides you through every step of building and launching your SaaS product.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3">{step.icon}</div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {step.day}
              </div>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {steps.slice(3).map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3">{step.icon}</div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {step.day}
              </div>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that's right for your journey from idea to launched product.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {/* Free Tier */}
          <div className="flex flex-col rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Free</h3>
              <p className="mt-2 text-4xl font-bold">$0</p>
              <p className="text-sm text-muted-foreground">Forever free</p>
            </div>
            <ul className="mb-8 space-y-3 text-sm">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Full 5-day launch framework</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>AI prompt engine</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Requirements builder</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Up to 2 simultaneous projects</span>
              </li>
            </ul>
            <Button className="mt-auto" variant="outline">
              Get Started Free
            </Button>
          </div>
          {/* Pro Tier */}
          <div className="relative flex flex-col rounded-lg border bg-background p-8 shadow-sm">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Most Popular
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Pro</h3>
              <div className="flex items-end gap-2">
                <p className="mt-2 text-4xl font-bold">$7</p>
                <p className="text-sm text-muted-foreground mb-1">/month</p>
              </div>
              <p className="text-sm text-muted-foreground">Or $70/year (save $14)</p>
            </div>
            <ul className="mb-8 space-y-3 text-sm">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Up to 20 simultaneous projects</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Advanced marketing content generator</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>SEO content planning system</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                <span>Priority support</span>
              </li>
            </ul>
            <Button className="mt-auto">Upgrade to Pro</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
