import { getDictionary } from '@/i18n/get-dictionary'
import { Locale } from '@/i18n/config'
import { Metadata } from 'next'

// 生成页面元数据（SEO）
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: dict.bratColor.metaTitle,
    description: dict.bratColor.metaDescription,
    alternates: {
      canonical: `/${params.lang}/brat-color`,
      languages: {
        'en': '/en/brat-color',
        'zh': '/zh/brat-color',
      }
    }
  }
}

// Brat Color 页面组件
export default async function BratColorPage({ 
  params 
}: { 
  params: { lang: Locale } 
}) {
  const dict = await getDictionary(params.lang)
  
  // 基础 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bratgenerator.com'
  
  // 结构化数据（Schema.org JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: dict.bratColor.title,
    description: dict.bratColor.metaDescription,
    url: `${baseUrl}/${params.lang}/brat-color`,
    author: {
      '@type': 'Organization',
      name: 'Brat Generator'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brat Generator'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${params.lang}/brat-color`
    }
  }

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%'
    }}>
      {/* 面包屑导航 */}
      <nav aria-label="Breadcrumb" style={{
        marginBottom: '24px',
        fontSize: '14px',
        color: '#6e6e73'
      }}>
        <ol style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          gap: '8px',
          alignItems: 'center'
        }}>
          <li>
            <a href={`/${params.lang}`} style={{ color: '#0071e3', textDecoration: 'none' }}>
              {dict.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: '#1d1d1f' }}>
            {dict.breadcrumb.bratColor}
          </li>
        </ol>
      </nav>

      {/* 主标题 */}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: '16px',
        color: '#1d1d1f',
        textAlign: 'center'
      }}>
        {dict.bratColor.title}
      </h1>

      <p style={{
        fontSize: '19px',
        color: '#6e6e73',
        textAlign: 'center',
        marginBottom: '48px',
        lineHeight: '1.6'
      }}>
        {dict.bratColor.subtitle}
      </p>

      {/* Brat 颜色展示卡片 */}
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        {/* 颜色预览 */}
        <div style={{
          width: '100%',
          height: '300px',
          backgroundColor: '#8ACE00',
          borderRadius: '12px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(138, 206, 0, 0.3)'
        }}>
          <span style={{
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: '700',
            color: '#000000',
            textAlign: 'center',
            filter: 'blur(2px)',
            fontFamily: 'Arial Narrow, Arial, sans-serif'
          }}>
            brat
          </span>
        </div>

        {/* 颜色参数 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          {/* HEX */}
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#6e6e73',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              HEX
            </h2>
            <p style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1d1d1f',
              margin: 0,
              fontFamily: 'monospace'
            }}>
              #8ACE00
            </p>
          </div>

          {/* RGB */}
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#6e6e73',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              RGB
            </h2>
            <p style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1d1d1f',
              margin: 0,
              fontFamily: 'monospace'
            }}>
              138, 206, 0
            </p>
          </div>

          {/* HSL */}
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#6e6e73',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              HSL
            </h2>
            <p style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1d1d1f',
              margin: 0,
              fontFamily: 'monospace'
            }}>
              80°, 100%, 40%
            </p>
          </div>
        </div>
      </div>

      {/* 介绍内容 */}
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          marginBottom: '16px',
          color: '#1d1d1f'
        }}>
          {dict.bratColor.aboutTitle}
        </h2>
        
        <div style={{
          fontSize: '17px',
          color: '#1d1d1f',
          lineHeight: '1.6',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {dict.bratColor.aboutContent.map((paragraph: string, index: number) => (
            <p key={index} style={{ margin: 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* 返回首页按钮 */}
      <div style={{ textAlign: 'center' }}>
        <a 
          href={`/${params.lang}`}
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            fontSize: '17px',
            fontWeight: '600',
            color: 'white',
            background: '#0071e3',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0, 113, 227, 0.3)',
            transition: 'all 0.2s ease'
          }}
        >
          {dict.bratColor.backToHome}
        </a>
      </div>
    </div>
    </>
  )
}

