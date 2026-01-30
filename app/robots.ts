import { MetadataRoute } from 'next'

// 动态生成 robots.txt
export default function robots(): MetadataRoute.Robots {
  // 获取网站基础 URL（生产环境应该是实际域名）
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makemybrat.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // 禁止爬取 API 路由
          '/*/privacy',      // 禁止爬取所有语言的隐私政策页
          '/*/cookies',      // 禁止爬取所有语言的Cookies政策页
          '/*/gallery/*/',   // 禁止爬取所有作品详情页（注意末尾斜杠，不影响/gallery列表页）
        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  }
}


