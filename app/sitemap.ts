import { MetadataRoute } from 'next'
import { SERVICES, NAVIGATION } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://staxxd.co.uk'
  
  const routes = [
    '',
    ...NAVIGATION.filter(n => n.href !== '/').map(n => n.href),
    ...SERVICES.map(s => s.slug),
    '/privacy',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/privacy' || route === '/cookies' ? 'yearly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route === '/privacy' || route === '/cookies' ? 0.5 : 0.8,
  }))
}
