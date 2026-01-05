import { Metadata } from 'next'
import { Locale } from '@/i18n/config'
import { getImages } from '@/lib/supabase-server'
import ImageCard from '@/components/ImageCard'
import { getDictionary } from '@/i18n/get-dictionary'

// 生成页面元数据（SEO）
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  const title = params.lang === 'zh' ? 'Brat Gallery - 用户作品展示' : 'Brat Gallery - Community Creations'
  const description = params.lang === 'zh' 
    ? '探索由我们社区创作的精彩 Brat 风格图片。浏览、点赞并获得灵感！'
    : 'Explore amazing Brat style images created by our community. Browse, like, and get inspired!'
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/gallery`,
      languages: {
        'en': '/en/gallery',
        'zh': '/zh/gallery',
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: params.lang === 'zh' ? 'zh_CN' : 'en_US',
    }
  }
}

// 配置 ISR：每 60 秒重新验证数据
export const revalidate = 60

// Gallery 页面组件（服务端渲染）
export default async function GalleryPage({ 
  params 
}: { 
  params: { lang: Locale } 
}) {
  // 在服务器端获取数据
  const images = await getImages()
  
  // 基础 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bratgenerator.com'
  
  // 结构化数据（Schema.org JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Brat Gallery',
    description: params.lang === 'zh' 
      ? '探索由我们社区创作的精彩 Brat 风格图片'
      : 'Explore amazing Brat style images created by our community',
    url: `${baseUrl}/${params.lang}/gallery`,
    numberOfItems: images.length,
  }

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        paddingTop: '40px',
        paddingBottom: '40px'
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
                {params.lang === 'zh' ? '首页' : 'Home'}
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: '#1d1d1f' }}>
              Gallery
            </li>
          </ol>
        </nav>

        {/* 页面标题 */}
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '700',
          marginBottom: '16px',
          color: '#1d1d1f',
          textAlign: 'center'
        }}>
          Brat Gallery
        </h1>

        <p style={{
          fontSize: '19px',
          color: '#6e6e73',
          textAlign: 'center',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          {params.lang === 'zh' 
            ? '探索社区创作的精彩 Brat 风格图片' 
            : 'Explore amazing Brat style images created by our community'}
        </p>

        {/* 图片网格 */}
        {images.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '64px 0',
            fontSize: '17px',
            color: '#6e6e73'
          }}>
            {params.lang === 'zh' ? '暂无图片。成为第一个上传的人！' : 'No images yet. Be the first to upload!'}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {images.map((image) => (
              <ImageCard
                key={image.id}
                id={image.id}
                imageUrl={image.image_url}
                text={image.text}
                likes={image.likes}
                lang={params.lang}
              />
            ))}
          </div>
        )}

        {/* 返回首页按钮 */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
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
            {params.lang === 'zh' ? '返回生成器' : 'Back to Generator'}
          </a>
        </div>
      </div>
    </>
  )
}
