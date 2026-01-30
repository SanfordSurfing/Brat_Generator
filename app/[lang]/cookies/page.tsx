import { Metadata } from 'next'
import { Locale } from '@/i18n/config'

// 生成页面元数据（SEO）
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  const title = params.lang === 'zh' ? 'Cookies 政策 - Brat Generator' : 'Cookies Policy - Brat Generator'
  const description = params.lang === 'zh'
    ? '了解我们如何使用 Cookies 来改善您的体验。'
    : 'Learn how we use cookies to improve your experience.'
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/cookies`,
      languages: {
        'en': '/en/cookies',
        'zh': '/zh/cookies',
      }
    },
    // 禁止搜索引擎索引此页面（Cookies政策为功能性页面，非SEO目标页面）
    robots: {
      index: false,
      follow: false,
    }
  }
}

// Cookies 政策页面
export default async function CookiesPage({ 
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
            {isZh ? 'Cookies 政策' : 'Cookies Policy'}
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
        {isZh ? 'Cookies 政策' : 'Cookies Policy'}
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
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>什么是 Cookies？</h2>
              <p>
                Cookies 是当您访问网站时存储在您设备上的小型文本文件。它们被广泛用于使网站正常运行或更高效地运行，以及提供信息给网站所有者。
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>我们如何使用 Cookies？</h2>
              <p style={{ marginBottom: '12px' }}>
                Brat Generator 使用 Cookies 来：
              </p>
              <ul style={{ marginLeft: '24px', marginBottom: '12px' }}>
                <li>记住您的语言偏好</li>
                <li>保持您的会话状态</li>
                <li>分析网站流量和使用模式</li>
                <li>改善用户体验</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Cookies 类型</h2>
              
              <h3 style={{ fontSize: '19px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>必要 Cookies</h3>
              <p style={{ marginBottom: '16px' }}>
                这些 Cookies 对于网站的基本功能至关重要，无法禁用。
              </p>

              <h3 style={{ fontSize: '19px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>性能 Cookies</h3>
              <p style={{ marginBottom: '16px' }}>
                这些 Cookies 帮助我们了解访问者如何使用网站，以便我们改进服务。
              </p>

              <h3 style={{ fontSize: '19px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>功能 Cookies</h3>
              <p>
                这些 Cookies 用于记住您的偏好设置，如语言选择。
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>管理 Cookies</h2>
              <p>
                您可以通过浏览器设置控制和管理 Cookies。请注意，禁用某些 Cookies 可能会影响网站的功能和您的用户体验。
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>联系我们</h2>
              <p>
                如果您对我们的 Cookies 政策有任何疑问，请通过 GitHub Issues 联系我们。
              </p>
            </section>
          </>
        ) : (
          // 英文版本
          <>
            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>What are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>How We Use Cookies</h2>
              <p style={{ marginBottom: '12px' }}>
                Brat Generator uses cookies to:
              </p>
              <ul style={{ marginLeft: '24px', marginBottom: '12px' }}>
                <li>Remember your language preferences</li>
                <li>Maintain your session state</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve user experience</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Types of Cookies</h2>
              
              <h3 style={{ fontSize: '19px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Essential Cookies</h3>
              <p style={{ marginBottom: '16px' }}>
                These cookies are essential for the basic functionality of the website and cannot be disabled.
              </p>

              <h3 style={{ fontSize: '19px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Performance Cookies</h3>
              <p style={{ marginBottom: '16px' }}>
                These cookies help us understand how visitors use the website so we can improve our services.
              </p>

              <h3 style={{ fontSize: '19px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Functional Cookies</h3>
              <p>
                These cookies are used to remember your preferences, such as language selection.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Managing Cookies</h2>
              <p>
                You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website and your user experience.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Contact Us</h2>
              <p>
                If you have any questions about our Cookies Policy, please contact us via GitHub Issues.
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

