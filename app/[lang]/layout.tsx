import type { Metadata, Viewport } from 'next'
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
  
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://bratgenerator.com/${params.lang}`,
      languages: {
        'en': 'https://bratgenerator.com/en',
        'zh': 'https://bratgenerator.com/zh',
      }
    },
    keywords: ['Brat', 'Charlie XCX', 'Image Generator', 'Brat Generator', 'Album Cover'],
    authors: [{ name: 'Brat Generator' }],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
      locale: params.lang === 'zh' ? 'zh_CN' : 'en_US',
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
      <body style={{ margin: 0, padding: 0 }}>
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

