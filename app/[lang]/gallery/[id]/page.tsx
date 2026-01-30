import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Locale, locales } from '@/i18n/config'
import { getImageById, getRecentImageIds } from '@/lib/supabase-server'
import LikeButton from '@/components/LikeButton'
import ImageDetailSEOContent from '@/components/ImageDetailSEOContent'

// 生成静态路径（ISR）
// 为最近的 100 张图片生成静态页面
export async function generateStaticParams() {
  const imageIds = await getRecentImageIds(100)
  
  // 为每个语言生成路径（支持所有语言：en, zh, es, id, ja）
  const params = []
  for (const lang of locales) {
    for (const id of imageIds) {
      params.push({ lang, id })
    }
  }
  
  return params
}

// 生成页面元数据（SEO - 最重要！）
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale; id: string } 
}): Promise<Metadata> {
  const image = await getImageById(params.id)
  
  if (!image) {
    return {
      title: 'Image Not Found',
      description: 'The requested image could not be found.',
    }
  }
  
  const title = `${image.text.substring(0, 50)} - Brat Gallery`
  const description = params.lang === 'zh'
    ? `查看这张 Brat 风格图片："${image.text.substring(0, 100)}"。点赞数：${image.likes}`
    : `View this Brat style image: "${image.text.substring(0, 100)}". ${image.likes} likes.`
  
  // 多语言locale映射
  const localeMap: Record<string, string> = {
    'en': 'en_US',
    'zh': 'zh_CN',
    'es': 'es_ES',
    'id': 'id_ID',
    'ja': 'ja_JP'
  }
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/gallery/${image.id}`,
      languages: {
        'en': `/en/gallery/${image.id}`,
        'zh': `/zh/gallery/${image.id}`,
        'es': `/es/gallery/${image.id}`,
        'id': `/id/gallery/${image.id}`,
        'ja': `/ja/gallery/${image.id}`,
      }
    },
    openGraph: {
      title,
      description,
      type: 'article',
      locale: localeMap[params.lang] || 'en_US',
      images: [
        {
          url: image.image_url,
          width: 1000,
          height: 1000,
          alt: `Brat style image: ${image.text}`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.image_url],
    },
    // 禁止搜索引擎索引作品详情页（仅保留精品SEO页面参与排名）
    // 但允许跟随链接以传递权重到Gallery列表页和首页
    robots: {
      index: false,
      follow: true,
    }
  }
}

// 配置 ISR：每 60 秒重新验证数据
export const revalidate = 60

// 动态渲染策略：为新图片生成页面
export const dynamicParams = true

// 单张图片详情页（服务端渲染）
export default async function ImageDetailPage({ 
  params 
}: { 
  params: { lang: Locale; id: string } 
}) {
  // 在服务器端获取数据
  const image = await getImageById(params.id)
  
  // 如果图片不存在，显示 404
  if (!image) {
    notFound()
  }
  
  // 基础 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makemybrat.com'
  
  // 结构化数据（Schema.org JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: image.text,
    contentUrl: image.image_url,
    description: `Brat style image: ${image.text}`,
    datePublished: image.created_at,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/LikeAction',
      userInteractionCount: image.likes
    },
    thumbnailUrl: image.image_url,
    url: `${baseUrl}/${params.lang}/gallery/${image.id}`,
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
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <li>
              <a href={`/${params.lang}`} style={{ color: '#0071e3', textDecoration: 'none' }}>
                {params.lang === 'zh' ? '首页' : 'Home'}
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a href={`/${params.lang}/gallery`} style={{ color: '#0071e3', textDecoration: 'none' }}>
                Gallery
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: '#1d1d1f' }}>
              {image.text.substring(0, 20)}{image.text.length > 20 ? '...' : ''}
            </li>
          </ol>
        </nav>

        {/* 图片卡片 */}
        <div style={{
          background: 'white',
          borderRadius: '18px',
          padding: 'clamp(24px, 4vw, 32px)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          marginBottom: '32px'
        }}>
          {/* 图片 */}
          <div style={{
            width: '100%',
            marginBottom: '24px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <img
              src={image.image_url}
              alt={`Brat style image with text: ${image.text}`}
              title={image.text}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>

          {/* 文字内容 */}
          <div style={{
            marginBottom: '24px'
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1d1d1f',
              marginBottom: '8px',
              wordBreak: 'break-word'
            }}>
              {image.text}
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#6e6e73'
            }}>
              {params.lang === 'zh' ? '创建于' : 'Created on'} {new Date(image.created_at).toLocaleDateString(params.lang === 'zh' ? 'zh-CN' : 'en-US')}
            </p>
          </div>

          {/* 客户端点赞按钮 */}
          <LikeButton 
            imageId={image.id} 
            initialLikes={image.likes}
            compact={false}
          />
        </div>

        {/* SEO内容 */}
        <ImageDetailSEOContent 
          lang={params.lang} 
          imageText={image.text} 
          createdAt={image.created_at}
        />

        {/* 返回按钮 */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '32px'
        }}>
          <a 
            href={`/${params.lang}/gallery`}
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
            {params.lang === 'zh' ? '返回 Gallery' : 'Back to Gallery'}
          </a>
          
          <a 
            href={`/${params.lang}`}
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              fontSize: '17px',
              fontWeight: '600',
              color: '#0071e3',
              background: 'white',
              border: '2px solid #0071e3',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            {params.lang === 'zh' ? '创建你的' : 'Create Your Own'}
          </a>
        </div>
      </div>
    </>
  )
}
