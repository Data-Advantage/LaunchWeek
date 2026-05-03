import { MetadataRoute } from 'next'
import { SECTIONS, getSectionTopics } from '@/lib/markdown'
import { TEMPLATES } from '@/lib/templates'

const BASE_URL = 'https://www.launchweek.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  const sectionPages: MetadataRoute.Sitemap = SECTIONS.map((section) => ({
    url: `${BASE_URL}/${section.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const topicPages: MetadataRoute.Sitemap = SECTIONS.flatMap((section) =>
    getSectionTopics(section.slug).map((topic) => ({
      url: `${BASE_URL}/${section.slug}/${topic.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const templateHub: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/templates`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/templates/demo`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const templatePages: MetadataRoute.Sitemap = TEMPLATES.map((t) => ({
    url: `${BASE_URL}/templates/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...homepage, ...sectionPages, ...topicPages, ...templateHub, ...templatePages]
}
