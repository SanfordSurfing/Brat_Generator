import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

// 动态生成 sitemap.xml
// 设置重新验证时间：每5分钟更新一次
export const revalidate = 300 // 300秒 = 5分钟

// Next.js 会在每次请求 sitemap.xml 时调用这个函数（动态路由）
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 获取网站基础 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makemybrat.com'
  
  // 当前时间
  const now = new Date()
  
  // 定义静态页面路径（仅包含SEO目标页面）
  const staticRoutes = [
    '',  // 首页
    '/brat-color',  // Brat Color 页面
    '/gallery',  // Gallery 列表页
    // '/privacy' 和 '/cookies' 已移除 - 这些页面设置为 noindex
  ]
  
  // 生成静态页面的 sitemap 条目
  const staticEntries: MetadataRoute.Sitemap = []
  
  for (const locale of locales) {
    for (const route of staticRoutes) {
      staticEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === '' ? 'daily' : (route === '/gallery' ? 'hourly' : 'weekly'),
        priority: route === '' ? 1.0 : (route === '/gallery' ? 0.9 : 0.8),
      })
    }
  }
  
  // 动态图片页面已从 sitemap 中移除
  // 原因：作品详情页设置为 noindex，只保留精品SEO页面在sitemap中
  // 用户仍可通过 Gallery 列表页或直接链接访问作品页
  
  console.log(`📍 Sitemap generated: ${staticEntries.length} SEO pages across ${locales.length} languages`)
  
  // 只返回静态SEO页面
  return staticEntries
}

