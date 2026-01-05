import { getDictionary } from '@/i18n/get-dictionary'
import { type Language } from '@/i18n/config'
import BratGenerator from '@/components/BratGenerator'

// 首页组件（支持多语言）
export default async function Home({
  params,
}: {
  params: { lang: Language }
}) {
  // 获取当前语言的翻译
  const dict = await getDictionary(params.lang)
  
  // 基础 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bratgenerator.com'
  
  // 结构化数据（Schema.org JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Brat Generator',
    description: dict.meta.description,
    url: `${baseUrl}/${params.lang}`,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    creator: {
      '@type': 'Organization',
      name: 'Brat Generator'
    }
  }

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="container" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '40px',
        paddingBottom: '40px'
      }}>
      {/* SEO 要求：每个页面只有一个 H1 标签 */}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 56px)',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1d1d1f',
        letterSpacing: '-0.02em'
      }}>
        {dict.home.title}
      </h1>
      
      {/* 副标题 */}
      <p style={{
        fontSize: 'clamp(16px, 2.5vw, 21px)',
        textAlign: 'center',
        marginBottom: '48px',
        color: '#6e6e73',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {dict.home.subtitle}
      </p>

      {/* Brat 生成器组件（传入翻译） */}
      <BratGenerator dict={dict.home} />

      {/* 页脚 */}
      <footer style={{
        marginTop: '64px',
        paddingTop: '32px',
        borderTop: '1px solid #d2d2d7',
        textAlign: 'center',
        fontSize: '14px',
        color: '#6e6e73'
      }}>
        <p>{dict.home.footer}</p>
        
        {/* 导航链接 */}
        <nav style={{ marginTop: '16px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href={`/${params.lang}/gallery`}
            style={{
              color: '#0071e3',
              textDecoration: 'none'
            }}
          >
            Gallery
          </a>
          <span style={{ color: '#d2d2d7' }}>|</span>
          <a 
            href={`/${params.lang}/brat-color`}
            style={{
              color: '#0071e3',
              textDecoration: 'none'
            }}
          >
            Brat Color
          </a>
        </nav>
      </footer>
    </main>
    </>
  )
}

