// Image Detail SEO内容组件
// 为作品详情页提供丰富的文字内容，优化SEO

type ImageDetailSEOContentProps = {
  lang: string
  imageText: string
  createdAt: string
}

// 完整的多语言翻译配置
const translations: Record<string, {
  section1Title: string
  section1Para: (text: string) => string
  section2Title: string
  section2Para: string
  howToUse: { title: string; steps: string[] }
  relatedKeywords: { title: string; keywords: string[] }
}> = {
  zh: {
    section1Title: '关于这张 Brat 风格图片',
    section1Para: (text: string) => `这张精美的 Brat 风格图片使用我们的 brat text generator 和 brat font generator 创作，展示了文字"${text}"。作为 brat meme generator 和 charli xcx text generator 的优秀示例，这个作品完美展现了 brat color #8ACE00 和 charli xcx brat font 的经典风格。无论你想创作 brat meme、text meme 还是 brat lyrics，这个 brat maker 作品都能为你的 brat lyric generator 和 meme text generator 项目提供灵感。`,
    section2Title: '如何创作类似的 Brat 作品？',
    section2Para: '使用我们的 free brat generator 和 brat album generator 工具，你也可以轻松创作出类似风格的 brat shirt 设计、brat wallpaper 壁纸、brat logo 和 brat template。我们的 meme font generator 和 brat word generator 支持所有类型的创作，从 brat subtitles 到 charli xcx lyrics website 风格的歌词图片。',
    howToUse: {
      title: '这张图片可以用于：',
      steps: [
        'Brat Meme 创作：使用这个 brat meme generator 风格作为 meme text generator 和 meme creator app 项目的参考',
        'Brat Shirt 设计：将这个 brat logo 图案用于 DIY brat shirt、T恤和服装印刷',
        'Brat Wallpaper 壁纸：下载作为 brat wallpaper 用于手机和电脑背景，展示 brat album cover 风格',
        'Brat Lyrics 灵感：学习如何使用 brat lyrics generator 和 lyrics brat 风格创作歌词海报',
        '社交媒体素材：在 Instagram、Twitter、TikTok 上分享这个 charli xcx meme 和 brat typing 作品',
        'Brat Template 模板：作为 brat template 用于品牌设计、brat website 和商业项目'
      ]
    },
    relatedKeywords: {
      title: '相关创作工具',
      keywords: [
        'brat text generator - 输入任何文字创作 Brat 风格图片',
        'brat font generator - 使用正宗的 charli xcx font 和 brat album font',
        'brat meme generator - 制作爆款 brat memes 和 text meme',
        'brat lyric generator - 创作 brat lyrics 和 brat subtitles 风格歌词',
        'meme text generator - 使用 meme generator fonts 和 meme creator app',
        'brat cover generator - 生成 brat album cover 和 brat cover 图片',
        'brat image generator - 创作 brat wallpaper 和 brat letter 设计',
        'charli xcx text generator - 完美的 charli xcx brat generator 工具',
        'free brat generator - 完全免费的 brat generator free 平台',
        'brat typing - 实时预览的 brat typer 和 brat word generator'
      ]
    }
  },
  en: {
    section1Title: 'About This Brat Style Image',
    section1Para: (text: string) => `This beautiful Brat style image was created using our brat text generator and brat font generator, featuring the text "${text}". As an excellent example of brat meme generator and charli xcx text generator work, this piece perfectly showcases the classic style of brat color #8ACE00 and charli xcx brat font. Whether you want to create brat meme, text meme, or brat lyrics, this brat maker work provides inspiration for your brat lyric generator and meme text generator projects.`,
    section2Title: 'How to Create Similar Brat Works?',
    section2Para: 'Using our free brat generator and brat album generator tools, you can easily create similar style brat shirt designs, brat wallpaper backgrounds, brat logo, and brat template. Our meme font generator and brat word generator support all types of creation, from brat subtitles to charli xcx lyrics website style lyric images.',
    howToUse: {
      title: 'This Image Can Be Used For:',
      steps: [
        'Brat Meme Creation: Use this brat meme generator style as reference for meme text generator and meme creator app projects',
        'Brat Shirt Design: Use this brat logo pattern for DIY brat shirt, T-shirts, and apparel printing',
        'Brat Wallpaper Background: Download as brat wallpaper for phone and computer backgrounds, showcasing brat album cover style',
        'Brat Lyrics Inspiration: Learn how to use brat lyrics generator and lyrics brat style to create lyric posters',
        'Social Media Material: Share this charli xcx meme and brat typing work on Instagram, Twitter, TikTok',
        'Brat Template: Use as brat template for brand design, brat website, and commercial projects'
      ]
    },
    relatedKeywords: {
      title: 'Related Creation Tools',
      keywords: [
        'brat text generator - Enter any text to create Brat style images',
        'brat font generator - Use authentic charli xcx font and brat album font',
        'brat meme generator - Create viral brat memes and text meme',
        'brat lyric generator - Create brat lyrics and brat subtitles style lyrics',
        'meme text generator - Use meme generator fonts and meme creator app',
        'brat cover generator - Generate brat album cover and brat cover images',
        'brat image generator - Create brat wallpaper and brat letter designs',
        'charli xcx text generator - Perfect charli xcx brat generator tool',
        'free brat generator - Completely free brat generator free platform',
        'brat typing - Real-time preview brat typer and brat word generator'
      ]
    }
  },
  es: {
    section1Title: 'Sobre Esta Imagen Estilo Brat',
    section1Para: (text: string) => `Esta hermosa imagen estilo Brat fue creada usando nuestro brat text generator y brat font generator, con el texto "${text}". Como excelente ejemplo de trabajo de brat meme generator y charli xcx text generator, esta pieza muestra perfectamente el estilo clásico de brat color #8ACE00 y charli xcx brat font. Ya sea que quieras crear brat meme, text meme o brat lyrics, este trabajo de brat maker proporciona inspiración para tus proyectos de brat lyric generator y meme text generator.`,
    section2Title: '¿Cómo Crear Obras Brat Similares?',
    section2Para: 'Usando nuestras herramientas free brat generator y brat album generator, puedes crear fácilmente diseños similares de brat shirt, fondos brat wallpaper, brat logo y brat template. Nuestro meme font generator y brat word generator soportan todos los tipos de creación, desde brat subtitles hasta imágenes de letras estilo charli xcx lyrics website.',
    howToUse: {
      title: 'Esta Imagen Puede Usarse Para:',
      steps: [
        'Creación de Brat Meme: Usa este estilo brat meme generator como referencia para proyectos de meme text generator y meme creator app',
        'Diseño de Brat Shirt: Usa este patrón brat logo para DIY brat shirt, camisetas e impresión de ropa',
        'Fondo Brat Wallpaper: Descarga como brat wallpaper para fondos de teléfono y computadora, mostrando estilo brat album cover',
        'Inspiración Brat Lyrics: Aprende a usar brat lyrics generator y estilo lyrics brat para crear pósters de letras',
        'Material de Redes Sociales: Comparte este charli xcx meme y trabajo brat typing en Instagram, Twitter, TikTok',
        'Brat Template: Usa como brat template para diseño de marca, brat website y proyectos comerciales'
      ]
    },
    relatedKeywords: {
      title: 'Herramientas de Creación Relacionadas',
      keywords: [
        'brat text generator - Ingresa cualquier texto para crear imágenes estilo Brat',
        'brat font generator - Usa auténtico charli xcx font y brat album font',
        'brat meme generator - Crea brat memes virales y text meme',
        'brat lyric generator - Crea brat lyrics y letras estilo brat subtitles',
        'meme text generator - Usa meme generator fonts y meme creator app',
        'brat cover generator - Genera imágenes brat album cover y brat cover',
        'brat image generator - Crea diseños brat wallpaper y brat letter',
        'charli xcx text generator - Herramienta perfecta charli xcx brat generator',
        'free brat generator - Plataforma completamente gratuita brat generator free',
        'brat typing - Vista previa en tiempo real brat typer y brat word generator'
      ]
    }
  },
  id: {
    section1Title: 'Tentang Gambar Gaya Brat Ini',
    section1Para: (text: string) => `Gambar gaya Brat yang indah ini dibuat menggunakan brat text generator dan brat font generator kami, menampilkan teks "${text}". Sebagai contoh luar biasa dari karya brat meme generator dan charli xcx text generator, karya ini menampilkan dengan sempurna gaya klasik brat color #8ACE00 dan charli xcx brat font. Baik Anda ingin membuat brat meme, text meme, atau brat lyrics, karya brat maker ini memberikan inspirasi untuk proyek brat lyric generator dan meme text generator Anda.`,
    section2Title: 'Bagaimana Membuat Karya Brat Serupa?',
    section2Para: 'Menggunakan alat free brat generator dan brat album generator kami, Anda dapat dengan mudah membuat desain serupa brat shirt, latar belakang brat wallpaper, brat logo, dan brat template. Meme font generator dan brat word generator kami mendukung semua jenis kreasi, dari brat subtitles hingga gambar lirik gaya charli xcx lyrics website.',
    howToUse: {
      title: 'Gambar Ini Dapat Digunakan Untuk:',
      steps: [
        'Pembuatan Brat Meme: Gunakan gaya brat meme generator ini sebagai referensi untuk proyek meme text generator dan meme creator app',
        'Desain Brat Shirt: Gunakan pola brat logo ini untuk DIY brat shirt, kaos, dan pencetakan pakaian',
        'Latar Belakang Brat Wallpaper: Unduh sebagai brat wallpaper untuk latar belakang ponsel dan komputer, menampilkan gaya brat album cover',
        'Inspirasi Brat Lyrics: Pelajari cara menggunakan brat lyrics generator dan gaya lyrics brat untuk membuat poster lirik',
        'Materi Media Sosial: Bagikan charli xcx meme dan karya brat typing ini di Instagram, Twitter, TikTok',
        'Brat Template: Gunakan sebagai brat template untuk desain merek, brat website, dan proyek komersial'
      ]
    },
    relatedKeywords: {
      title: 'Alat Kreasi Terkait',
      keywords: [
        'brat text generator - Masukkan teks apa pun untuk membuat gambar gaya Brat',
        'brat font generator - Gunakan charli xcx font dan brat album font autentik',
        'brat meme generator - Buat brat memes viral dan text meme',
        'brat lyric generator - Buat brat lyrics dan lirik gaya brat subtitles',
        'meme text generator - Gunakan meme generator fonts dan meme creator app',
        'brat cover generator - Hasilkan gambar brat album cover dan brat cover',
        'brat image generator - Buat desain brat wallpaper dan brat letter',
        'charli xcx text generator - Alat charli xcx brat generator sempurna',
        'free brat generator - Platform brat generator free sepenuhnya gratis',
        'brat typing - Pratinjau real-time brat typer dan brat word generator'
      ]
    }
  },
  ja: {
    section1Title: 'このBratスタイル画像について',
    section1Para: (text: string) => `この美しいBratスタイル画像は、brat text generatorとbrat font generatorを使用して作成され、テキスト「${text}」を特徴としています。brat meme generatorとcharli xcx text generator作品の優れた例として、この作品はbrat color #8ACE00とcharli xcx brat fontのクラシックスタイルを完璧に表現しています。brat meme、text meme、brat lyricsを作成する場合、このbrat maker作品はbrat lyric generatorとmeme text generatorプロジェクトにインスピレーションを提供します。`,
    section2Title: '類似のBrat作品を作成するには？',
    section2Para: 'free brat generatorとbrat album generatorツールを使用すると、同様のスタイルのbrat shirtデザイン、brat wallpaper背景、brat logo、brat templateを簡単に作成できます。meme font generatorとbrat word generatorは、brat subtitlesからcharli xcx lyrics websiteスタイルの歌詞画像まで、すべてのタイプの作成をサポートします。',
    howToUse: {
      title: 'この画像は次の用途に使用できます：',
      steps: [
        'Brat Meme作成：このbrat meme generatorスタイルをmeme text generatorとmeme creator appプロジェクトの参考として使用',
        'Brat Shirtデザイン：このbrat logoパターンをDIY brat shirt、Tシャツ、アパレル印刷に使用',
        'Brat Wallpaper背景：brat wallpaperとしてダウンロードし、スマートフォンとコンピューターの背景に使用、brat album coverスタイルを表示',
        'Brat Lyricsインスピレーション：brat lyrics generatorとlyrics bratスタイルを使用して歌詞ポスターを作成する方法を学ぶ',
        'ソーシャルメディア素材：Instagram、Twitter、TikTokでこのcharli xcx memeとbrat typing作品を共有',
        'Brat Template：ブランドデザイン、brat website、商業プロジェクトのbrat templateとして使用'
      ]
    },
    relatedKeywords: {
      title: '関連作成ツール',
      keywords: [
        'brat text generator - 任意のテキストを入力してBratスタイル画像を作成',
        'brat font generator - 本物のcharli xcx fontとbrat album fontを使用',
        'brat meme generator - バイラルbrat memesとtext memeを作成',
        'brat lyric generator - brat lyricsとbrat subtitlesスタイルの歌詞を作成',
        'meme text generator - meme generator fontsとmeme creator appを使用',
        'brat cover generator - brat album coverとbrat cover画像を生成',
        'brat image generator - brat wallpaperとbrat letterデザインを作成',
        'charli xcx text generator - 完璧なcharli xcx brat generatorツール',
        'free brat generator - 完全に無料のbrat generator freeプラットフォーム',
        'brat typing - リアルタイムプレビューbrat typerとbrat word generator'
      ]
    }
  }
}

export default function ImageDetailSEOContent({ lang, imageText, createdAt }: ImageDetailSEOContentProps) {
  // 获取当前语言的翻译，默认使用英文
  const t = translations[lang] || translations['en']

  return (
    <div style={{
      maxWidth: '800px',
      margin: '32px auto 0',
      width: '100%'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        {/* Section 1: 关于这张图片 */}
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section1Title}
        </h2>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section1Para(imageText.substring(0, 100))}
        </p>

        {/* Section 2: 如何创作 */}
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section2Title}
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '24px' }}>
          {t.section2Para}
        </p>

        {/* 使用方式 */}
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.howToUse.title}
        </h3>
        <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#1d1d1f', marginLeft: '24px', marginBottom: '24px' }}>
          {t.howToUse.steps.map((step, index) => (
            <li key={index} style={{ marginBottom: '12px' }}>
              {step}
            </li>
          ))}
        </ul>

        {/* 相关关键词 */}
        <div style={{
          background: '#f5f5f7',
          borderRadius: '12px',
          padding: '24px',
          marginTop: '32px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#1d1d1f' }}>
            {t.relatedKeywords.title}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '12px'
          }}>
            {t.relatedKeywords.keywords.map((keyword, index) => (
              <div key={index} style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#424245',
                padding: '12px',
                background: 'white',
                borderRadius: '8px',
                border: '1px solid #e5e5e7'
              }}>
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
