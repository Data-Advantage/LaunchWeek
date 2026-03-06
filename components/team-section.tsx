import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Michael Grimm",
      role: "Co-Founder",
      image: "https://azo00ezzuo1aawno.public.blob.vercel-storage.com/marketing/michael.png",
      bio: "Co-founder of Data Advantage, Michael previously built and sold data consultancy Decisive Data to Calligo in 2021. He brings extensive experience in strategic AI implementation to help entrepreneurs transform their ideas into successful SaaS products.",
      social: {
        twitter: "https://x.com/grimmmichaelj",
        linkedin: "https://www.linkedin.com/in/michaelgrimm/",
        github: "https://github.com/michaeljgrimm",
      },
    },
    {
      name: "Zack Mazzoncini",
      role: "Co-Founder",
      image: "https://azo00ezzuo1aawno.public.blob.vercel-storage.com/marketing/zack.jpg",
      bio: "Co-founder of Data Advantage, Zack has a proven track record of helping organizations implement AI solutions that drive measurable business outcomes. His expertise in AI and data strategy is the foundation of LaunchWeek.ai's approach.",
      social: {
        twitter: "https://x.com/zackmazz",
        linkedin: "https://www.linkedin.com/in/zack-mazzoncini/",
        github: null,
      },
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Founders</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Founded by the team behind Data Advantage, we bring our expertise in AI implementation to help
              entrepreneurs launch successful SaaS products.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl gap-8 md:grid-cols-2">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full h-40 w-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-2">
                <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                {member.social.github && (
                  <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
