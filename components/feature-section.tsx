import { CheckCircle, Code, Rocket, Database, LineChart, Zap } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "5-Day Launch Framework",
      description:
        "Step-by-step workflow that guides you through the entire process of building and launching your SaaS product.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "AI Prompt Engine",
      description:
        "Pre-engineered prompts for each development stage, integrated with leading AI tools like Claude.ai, ChatGPT, and v0.dev.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Requirements Builder",
      description: "Interactive PRD generator with guided sections for product vision, user personas, and features.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Schema Generator",
      description:
        "Intelligent schema creation based on your product requirements with SQL migration script generation.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Marketing Content Generator",
      description:
        "Create value propositions, website copy, launch announcements, and email campaigns with AI assistance.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Project Deployment Support",
      description:
        "Integration with Vercel, Supabase, and other platforms with deployment checklists and verification.",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need to Launch Fast
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our platform provides all the tools and guidance you need to transform your idea into a launched SaaS
              product in just one week.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
