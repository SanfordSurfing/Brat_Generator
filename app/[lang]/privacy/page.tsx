import { Metadata } from 'next'
import { Locale } from '@/i18n/config'

// 生成页面元数据（SEO）
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const title = params.lang === 'zh' ? '隐私政策 - Brat Generator' : 'Privacy Policy - Brat Generator'
  const description = params.lang === 'zh'
    ? '了解我们如何收集、使用和保护您的个人信息。'
    : 'Learn how we collect, use, and protect your personal information.'
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/privacy`,
      languages: {
        'en': '/en/privacy',
        'zh': '/zh/privacy',
      }
    },
    // 禁止搜索引擎索引此页面（隐私政策为功能性页面，非SEO目标页面）
    robots: {
      index: false,
      follow: false,
    }
  }
}

// 隐私政策页面
export default async function PrivacyPage({ 
  params 
}: { 
  params: { lang: Locale } 
}) {
  const isZh = params.lang === 'zh'

  return (
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
          alignItems: 'center'
        }}>
          <li>
            <a href={`/${params.lang}`} style={{ color: '#0071e3', textDecoration: 'none' }}>
              {isZh ? '首页' : 'Home'}
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: '#1d1d1f' }}>
            {isZh ? '隐私政策' : 'Privacy Policy'}
          </li>
        </ol>
      </nav>

      {/* 主标题 */}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: '16px',
        color: '#1d1d1f'
      }}>
        {isZh ? '隐私政策' : 'Privacy Policy'}
      </h1>

      <p style={{
        fontSize: '14px',
        color: '#6e6e73',
        marginBottom: '48px'
      }}>
        {isZh ? '最后更新：2026年1月5日' : 'Last updated: January 5, 2026'}
      </p>

      {/* 内容 */}
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        fontSize: '17px',
        lineHeight: '1.6',
        color: '#1d1d1f'
      }}>
        {isZh ? (
          // 中文版本
          <>
            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>1. 信息收集</h2>
              <p style={{ marginBottom: '12px' }}>
                我们收集您在使用 Brat Generator 时主动提供的信息，包括：
              </p>
              <ul style={{ marginLeft: '24px', marginBottom: '12px' }}>
                <li>您输入的文字内容（用于生成图片）</li>
                <li>您上传到 Gallery 的图片</li>
                <li>点赞和互动数据</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>2. 信息使用</h2>
              <p style={{ marginBottom: '12px' }}>
                我们使用收集的信息来：
              </p>
              <ul style={{ marginLeft: '24px', marginBottom: '12px' }}>
                <li>提供和改进我们的服务</li>
                <li>在 Gallery 中展示用户上传的图片</li>
                <li>统计和分析服务使用情况</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>3. 信息共享</h2>
              <p>
                您上传到 Gallery 的图片将公开展示给所有访问者。我们不会将您的个人信息出售或出租给第三方。
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>4. 数据安全</h2>
              <p>
                我们采用行业标准的安全措施来保护您的数据。所有数据通过加密连接传输并安全存储。
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>5. 您的权利</h2>
              <p style={{ marginBottom: '12px' }}>
                您有权：
              </p>
              <ul style={{ marginLeft: '24px' }}>
                <li>访问您的数据</li>
                <li>更正不准确的数据</li>
                <li>删除您的数据</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>6. 联系我们</h2>
              <p>
                如果您对本隐私政策有任何疑问，请通过 GitHub Issues 联系我们。
              </p>
            </section>
          </>
        ) : (
          // 英文版本
          <>
            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>1. Information Collection</h2>
              <p style={{ marginBottom: '12px' }}>
                We collect information you provide when using Brat Generator, including:
              </p>
              <ul style={{ marginLeft: '24px', marginBottom: '12px' }}>
                <li>Text content you input (for image generation)</li>
                <li>Images you upload to the Gallery</li>
                <li>Likes and interaction data</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>2. Information Use</h2>
              <p style={{ marginBottom: '12px' }}>
                We use the collected information to:
              </p>
              <ul style={{ marginLeft: '24px', marginBottom: '12px' }}>
                <li>Provide and improve our services</li>
                <li>Display user-uploaded images in the Gallery</li>
                <li>Analyze service usage and performance</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>3. Information Sharing</h2>
              <p>
                Images you upload to the Gallery are publicly displayed to all visitors. We do not sell or rent your personal information to third parties.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. All data is transmitted via encrypted connections and stored securely.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>5. Your Rights</h2>
              <p style={{ marginBottom: '12px' }}>
                You have the right to:
              </p>
              <ul style={{ marginLeft: '24px' }}>
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us via GitHub Issues.
              </p>
            </section>
          </>
        )}
      </div>

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
          {isZh ? '返回首页' : 'Back to Home'}
        </a>
      </div>
    </div>
  )
}



