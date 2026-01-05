// SEO 内容组件
// 为首页提供丰富的文字内容，优化 SEO

type SEOContentProps = {
  lang: string
}

export default function SEOContent({ lang }: SEOContentProps) {
  const isZh = lang === 'zh'

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      paddingTop: '64px'
    }}>
      {/* SEO 内容区块 */}
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        {isZh ? (
          // 中文内容
          <>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1d1d1f'
            }}>
              什么是 Brat Generator？
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Brat Generator 是一个免费在线工具，专门用于创建 Charlie XCX "Brat" 专辑封面风格的图片。Brat 是 2024 年最具影响力的专辑之一，其标志性的亮绿色背景（#8ACE00）和简洁的 Arial Narrow 字体设计在社交媒体上引发了巨大的文化现象。
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              无论你是 Charli XCX 的粉丝，还是想要创作独特的社交媒体图片，Brat Generator 都能帮你轻松实现。只需输入文字，我们的工具会自动生成完美还原 Brat 风格的图片，支持自动换行、智能字号调整，确保你的创作始终保持专业水准。
            </p>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              核心功能特点
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '12px'
            }}>
              我们的 Brat 图片生成器提供了多项专业功能，让你的创作过程更加简单高效：
            </p>
            <ul style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginLeft: '24px',
              marginBottom: '16px'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>完美还原官方风格：</strong>基于官方 bratgenerator.com 的参数优化，包括精确的颜色值（#8ACE00）、字体（Arial Narrow, 500 weight）和 2px 高斯模糊效果
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>智能文字处理：</strong>自动换行功能确保长文本不会溢出画布，智能字号算法优先换行而不是缩小字体，让文字始终保持最大化展示
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>实时预览：</strong>输入文字后立即看到效果，支持多行文本和自定义内容，所见即所得
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>一键下载：</strong>生成 1000x1000 像素的高清 PNG 图片，适用于社交媒体、个人主页等多种场景
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Gallery 社区：</strong>上传你的作品到 Gallery，与其他创作者分享灵感，发现更多精彩的 Brat 风格图片
              </li>
            </ul>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              为什么选择 Brat Generator？
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              市面上有许多图片生成工具，但 Brat Generator 专注于提供最佳的 Brat 风格体验。我们深入研究了官方专辑封面的每一个细节，确保生成的图片完全符合 Brat 美学的精髓。
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              我们的工具完全免费，无需注册，无水印，支持中英双语界面。无论你是想制作 Twitter 头像、Instagram 故事、还是 Discord 表情包，Brat Generator 都能满足你的需求。更重要的是，我们采用最新的 Next.js 14 技术栈，确保页面加载速度快、体验流畅。
            </p>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              Brat 文化现象
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Charlie XCX 的 Brat 专辑不仅仅是一张音乐专辑，更是一种文化符号。这种大胆的荧光绿配色和简洁的排版风格代表了一种不拘一格、勇于表达的态度。从 TikTok 到 Twitter，从 Instagram 到 Discord，Brat 风格的图片已经成为互联网文化的重要组成部分。
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              使用 Brat Generator，你可以轻松加入这个全球性的创作社区。无论是表达你的想法、分享你的感受，还是单纯享受创作的乐趣，Brat Generator 都是你的最佳选择。
            </p>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              如何使用
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '12px'
            }}>
              使用 Brat Generator 非常简单，只需三个步骤：
            </p>
            <ol style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginLeft: '24px',
              marginBottom: '16px'
            }}>
              <li style={{ marginBottom: '8px' }}>
                在输入框中输入你想要的文字。支持任意长度的文本，我们的智能算法会自动处理换行和字号调整。
              </li>
              <li style={{ marginBottom: '8px' }}>
                实时预览生成的图片。你可以看到文字在标志性的 Brat 绿色背景上的效果，确保满意后再下载。
              </li>
              <li style={{ marginBottom: '8px' }}>
                点击"下载图片"保存到本地，或者点击"Upload to Gallery"分享到社区，让更多人看到你的创作。
              </li>
            </ol>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              技术实现
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Brat Generator 采用现代化的 Web 技术栈构建，包括 Next.js 14、React 18 和 TypeScript。我们使用 Canvas API 在浏览器端实时生成图片，确保隐私安全的同时提供极速的生成体验。所有的图片处理都在你的设备上完成，无需上传到服务器，保护你的数据安全。
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              我们还集成了 Supabase 数据库，为 Gallery 功能提供可靠的存储服务。采用服务端渲染（SSR）和增量静态再生（ISR）技术，确保完美的 SEO 表现和极快的页面加载速度。
            </p>
          </>
        ) : (
          // English content
          <>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1d1d1f'
            }}>
              What is Brat Generator?
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Brat Generator is a free online tool designed to create images in the style of Charlie XCX's "Brat" album cover. Brat is one of the most influential albums of 2024, and its iconic bright green background (#8ACE00) combined with clean Arial Narrow typography has sparked a massive cultural phenomenon across social media.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Whether you're a Charli XCX fan or looking to create unique social media graphics, Brat Generator makes it easy. Simply input your text, and our tool automatically generates a perfectly styled Brat image with smart text wrapping and intelligent font sizing to ensure your creation always looks professional.
            </p>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              Key Features
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '12px'
            }}>
              Our Brat image generator offers several professional features to make your creative process simple and efficient:
            </p>
            <ul style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginLeft: '24px',
              marginBottom: '16px'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Perfect Official Style Recreation:</strong> Optimized based on the official bratgenerator.com parameters, including precise color value (#8ACE00), font (Arial Narrow, 500 weight), and 2px Gaussian blur effect
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Smart Text Processing:</strong> Automatic line wrapping ensures long text doesn't overflow the canvas, with intelligent font sizing that prioritizes wrapping over shrinking for maximum text display
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Real-time Preview:</strong> See the results immediately as you type, with support for multi-line text and custom content
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>One-Click Download:</strong> Generate high-quality 1000x1000 pixel PNG images suitable for social media, personal pages, and more
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Community Gallery:</strong> Upload your creations to the Gallery, share inspiration with other creators, and discover more amazing Brat-style images
              </li>
            </ul>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              Why Choose Brat Generator?
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              While there are many image generation tools available, Brat Generator focuses on delivering the best Brat-style experience. We've studied every detail of the official album cover to ensure generated images perfectly capture the essence of the Brat aesthetic.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Our tool is completely free, requires no registration, has no watermarks, and supports bilingual interfaces (English and Chinese). Whether you're creating Twitter avatars, Instagram stories, or Discord emotes, Brat Generator has you covered. Moreover, we use the latest Next.js 14 technology stack to ensure fast page loading and smooth experience.
            </p>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              The Brat Cultural Phenomenon
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Charlie XCX's Brat album isn't just a music album; it's a cultural symbol. This bold fluorescent green color scheme and minimalist typography represents an attitude of unrestrained self-expression. From TikTok to Twitter, from Instagram to Discord, Brat-style images have become an integral part of internet culture.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              With Brat Generator, you can easily join this global creative community. Whether you're expressing your thoughts, sharing your feelings, or simply enjoying the creative process, Brat Generator is your best choice.
            </p>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              How to Use
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '12px'
            }}>
              Using Brat Generator is incredibly simple, just three steps:
            </p>
            <ol style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginLeft: '24px',
              marginBottom: '16px'
            }}>
              <li style={{ marginBottom: '8px' }}>
                Enter your desired text in the input box. Supports text of any length, and our intelligent algorithm automatically handles line breaks and font size adjustments.
              </li>
              <li style={{ marginBottom: '8px' }}>
                Preview the generated image in real-time. You can see how your text looks against the iconic Brat green background before downloading.
              </li>
              <li style={{ marginBottom: '8px' }}>
                Click "Download Image" to save locally, or click "Upload to Gallery" to share with the community and let more people see your creation.
              </li>
            </ol>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginTop: '32px',
              marginBottom: '16px',
              color: '#1d1d1f'
            }}>
              Technical Implementation
            </h3>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              Brat Generator is built with modern web technologies, including Next.js 14, React 18, and TypeScript. We use the Canvas API to generate images in real-time on the browser side, ensuring privacy while providing lightning-fast generation. All image processing happens on your device without uploading to servers, protecting your data security.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#1d1d1f',
              marginBottom: '16px'
            }}>
              We've also integrated Supabase database to provide reliable storage for the Gallery feature. Using Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) technologies ensures perfect SEO performance and extremely fast page loading speeds.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

