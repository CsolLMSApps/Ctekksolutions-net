import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ctekksolutions.net'
  const now = new Date().toISOString()

  // Core pages
  const corePages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/platforms`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/education`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/jobs`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/apply`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/investors`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  // Insight articles
  const articles = [
    'ai-workforce-trends-2026',
    'building-scalable-cloud-infrastructure',
    'future-of-remote-stem-hiring',
    'enterprise-ai-implementation-guide',
    'from-training-to-transformation',
    'offshore-development-best-practices',
  ].map(slug => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...corePages, ...articles]
}
