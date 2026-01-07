import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { getImages } from '@/lib/supabase-server'

// 动态生成 sitemap.xml
// Next.js 会在每次请求 sitemap.xml 时调用这个函数（动态路由）
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 获取网站基础 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makemybrat.com'
  
  // 当前时间
  const now = new Date()
  
  // 定义静态页面路径
  const staticRoutes = [
    '',  // 首页
    '/brat-color',  // Brat Color 页面
    '/gallery',  // Gallery 页面
    '/privacy',  // 隐私政策
    '/cookies',  // Cookies 政策
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
  
  // 🔥 动态获取所有图片，生成图片详情页的 sitemap 条目
  const images = await getImages()
  const imageEntries: MetadataRoute.Sitemap = []
  
  for (const locale of locales) {
    for (const image of images) {
      imageEntries.push({
        url: `${baseUrl}/${locale}/gallery/${image.id}`,
        lastModified: new Date(image.created_at),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }
  
  console.log(`📍 Sitemap generated: ${staticEntries.length} static pages + ${imageEntries.length} image pages = ${staticEntries.length + imageEntries.length} total URLs`)
  
  // 合并静态页面和动态图片页面
  return [...staticEntries, ...imageEntries]
}

