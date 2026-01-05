import { MetadataRoute } from 'next'

// 动态生成 robots.txt
export default function robots(): MetadataRoute.Robots {
  // 获取网站基础 URL（生产环境应该是实际域名）
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bratgenerator.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',  // 禁止爬取 API 路由
        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  }
}

