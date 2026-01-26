import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { getDictionary } from '@/i18n/get-dictionary'
import { languageCodes, type Language } from '@/i18n/config'
import Navigation from '@/components/Navigation'
import '../globals.css'

// 生成静态路由参数（告诉 Next.js 支持哪些语言）
export async function generateStaticParams() {
  return languageCodes.map((lang) => ({ lang }))
}

// 动态生成元数据（根据语言）
export async function generateMetadata({
  params,
}: {
  params: { lang: Language }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  // 语言locale映射
  const localeMap: Record<string, string> = {
    'en': 'en_US',
    'zh': 'zh_CN',
    'es': 'es_ES',
    'id': 'id_ID',
    'ja': 'ja_JP'
  }

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: {
      icon: '/icon.svg',
      shortcut: '/icon.svg',
      apple: '/apple-icon.svg',
    },
    alternates: {
      canonical: `https://makemybrat.com/${params.lang}`,
      languages: {
        'en': 'https://makemybrat.com/en',
        'zh': 'https://makemybrat.com/zh',
        'es': 'https://makemybrat.com/es',
        'id': 'https://makemybrat.com/id',
        'ja': 'https://makemybrat.com/ja',
      }
    },
    keywords: ['Brat', 'Charlie XCX', 'Image Generator', 'Brat Generator', 'Album Cover'],
    authors: [{ name: 'Brat Generator' }],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
      locale: localeMap[params.lang] || 'en_US',
      images: [
        {
          url: '/opengraph-image.svg',
          width: 1200,
          height: 630,
          alt: 'Brat Generator - Create Your Brat Style Image',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/opengraph-image.svg'],
    },
    // Google AdSense 网站所有权验证
    other: {
      'google-adsense-account': 'ca-pub-3801045913410277',
    }
  }
}

// 移动端视口配置
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Language }
}) {
  return (
    <html lang={params.lang}>
      <head>
        {/* Favicon配置（确保所有浏览器和搜索引擎都能正确显示） */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        
        {/* 字体预加载优化：使用系统字体，无需额外加载 */}
        {/* DNS 预解析：提前解析 Supabase 域名 */}
        <link rel="dns-prefetch" href="https://supabase.co" />
        <link rel="preconnect" href="https://supabase.co" crossOrigin="anonymous" />
        
        {/* 优化字体渲染 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Arial Narrow';
              font-display: swap;
            }
            /* 关键 CSS 内联，避免阻塞渲染 */
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
              background: #f5f5f7;
              color: #1d1d1f;
              margin: 0;
              padding: 0;
            }
          `
        }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {/* Google Analytics (gtag.js) - 异步加载，不阻塞页面渲染 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YWWZPS7VKJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YWWZPS7VKJ');
          `}
        </Script>

        {/* 全局顶部导航栏 */}
        <Navigation lang={params.lang} />
        
        {/* 主内容区域（添加 padding-top 避免被导航栏遮挡） */}
        <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
          {children}
        </div>
      </body>
    </html>
  )
}

