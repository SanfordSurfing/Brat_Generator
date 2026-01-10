import { Metadata } from 'next'
import { Locale } from '@/i18n/config'
import { getImages } from '@/lib/supabase-server'
import ImageCard from '@/components/ImageCard'
import { getDictionary } from '@/i18n/get-dictionary'

// 多语言翻译配置
const galleryTranslations: Record<string, {
  title: string
  description: string
  heading: string
  subtitle: string
  noImages: string
  backButton: string
  home: string
  locale: string
}> = {
  zh: {
    title: 'Brat Gallery - 用户作品展示',
    description: '探索由我们社区创作的精彩 Brat 风格图片。浏览、点赞并获得灵感！',
    heading: 'Brat Gallery',
    subtitle: '探索社区创作的精彩 Brat 风格图片',
    noImages: '暂无图片。成为第一个上传的人！',
    backButton: '返回生成器',
    home: '首页',
    locale: 'zh_CN'
  },
  en: {
    title: 'Brat Gallery - Community Creations',
    description: 'Explore amazing Brat style images created by our community. Browse, like, and get inspired!',
    heading: 'Brat Gallery',
    subtitle: 'Explore amazing Brat style images created by our community',
    noImages: 'No images yet. Be the first to upload!',
    backButton: 'Back to Generator',
    home: 'Home',
    locale: 'en_US'
  },
  es: {
    title: 'Brat Gallery - Creaciones de la Comunidad',
    description: 'Explora increíbles imágenes estilo Brat creadas por nuestra comunidad. ¡Navega, dale me gusta y obtén inspiración!',
    heading: 'Brat Gallery',
    subtitle: 'Explora increíbles imágenes estilo Brat creadas por nuestra comunidad',
    noImages: '¡Aún no hay imágenes. Sé el primero en subir!',
    backButton: 'Volver al Generador',
    home: 'Inicio',
    locale: 'es_ES'
  },
  id: {
    title: 'Brat Gallery - Kreasi Komunitas',
    description: 'Jelajahi gambar gaya Brat menakjubkan yang dibuat oleh komunitas kami. Jelajahi, sukai, dan dapatkan inspirasi!',
    heading: 'Brat Gallery',
    subtitle: 'Jelajahi gambar gaya Brat menakjubkan yang dibuat oleh komunitas kami',
    noImages: 'Belum ada gambar. Jadilah yang pertama mengunggah!',
    backButton: 'Kembali ke Generator',
    home: 'Beranda',
    locale: 'id_ID'
  },
  ja: {
    title: 'Brat Gallery - コミュニティの作品',
    description: 'コミュニティによって作成された素晴らしいBratスタイルの画像を探索してください。閲覧、いいね、インスピレーションを得よう！',
    heading: 'Brat Gallery',
    subtitle: 'コミュニティが作成した素晴らしいBratスタイルの画像を探索',
    noImages: 'まだ画像がありません。最初にアップロードしましょう！',
    backButton: 'ジェネレーターに戻る',
    home: 'ホーム',
    locale: 'ja_JP'
  }
}

// 生成页面元数据（SEO）
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const t = galleryTranslations[params.lang] || galleryTranslations['en']
  
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${params.lang}/gallery`,
      languages: {
        'en': '/en/gallery',
        'zh': '/zh/gallery',
        'es': '/es/gallery',
        'id': '/id/gallery',
        'ja': '/ja/gallery',
      }
    },
    openGraph: {
      title: t.title,
      description: t.description,
      type: 'website',
      locale: t.locale,
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
  // 获取翻译
  const t = galleryTranslations[params.lang] || galleryTranslations['en']
  
  // 在服务器端获取数据
  const images = await getImages()
  
  // 基础 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makemybrat.com'
  
  // 结构化数据（Schema.org JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Brat Gallery',
    description: t.description,
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
                {t.home}
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
          {t.heading}
        </h1>

        <p style={{
          fontSize: '19px',
          color: '#6e6e73',
          textAlign: 'center',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          {t.subtitle}
        </p>

        {/* 图片网格 */}
        {images.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '64px 0',
            fontSize: '17px',
            color: '#6e6e73'
          }}>
            {t.noImages}
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
            {t.backButton}
          </a>
        </div>
      </div>
    </>
  )
}
