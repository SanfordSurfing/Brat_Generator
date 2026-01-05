import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

// 动态生成 sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  // 获取网站基础 URL（生产环境应该是实际域名）
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bratgenerator.com'
  
  // 当前时间
  const now = new Date()
  
  // 定义网站的所有页面路径
  const routes = [
    '',  // 首页
    '/brat-color',  // Brat Color 页面
    '/gallery',  // Gallery 页面
    '/privacy',  // 隐私政策
    '/cookies',  // Cookies 政策
  ]
  
  // 为每个语言和路由生成 sitemap 条目
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      })
    }
  }
  
  return sitemapEntries
}

