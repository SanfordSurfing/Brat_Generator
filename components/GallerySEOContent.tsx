// Gallery SEO内容组件
// 为Gallery页面提供丰富的文字内容，优化SEO

type GallerySEOContentProps = {
  lang: string
  imageCount: number
}

// 完整的多语言翻译配置
const translations: Record<string, {
  section1: { title: string; para1: string; para2: string }
  section2: { title: string; para: string; features: string[] }
  section3: { title: string; useCases: Array<{title: string; desc: string}> }
}> = {
  zh: {
    section1: {
      title: 'Brat Meme Generator Gallery - 发现最佳创意灵感',
      para1: '欢迎来到 Brat Gallery！这里汇集了来自全球创作者使用 brat text generator、brat font generator 和 brat meme generator 创作的精彩作品。作为最活跃的 brat maker 社区，我们的 Gallery 展示了数千张使用 charli xcx text generator 和 brat lyric generator 制作的 brat meme、text meme 和 brat lyrics 风格图片。',
      para2: '无论你在寻找 brat shirt 设计灵感、brat wallpaper 素材，还是想学习如何使用 meme text generator 和 meme font generator 创作 brat logo，这个 free brat generator 社区都能为你提供无限创意。浏览我们的 brat album generator 作品，发现 charli xcx brat generator 的无限可能！'
    },
    section2: {
      title: '为什么浏览 Brat Gallery？',
      para: '作为全球最大的 brat meme generator 和 brat text maker 社区，Gallery 提供丰富的创意资源和灵感：',
      features: [
        'Brat Meme 灵感：发现最受欢迎的 brat memes 和 text meme 创作，学习如何使用 meme creator app 和 meme generator fonts 制作爆款内容',
        'Brat Lyrics 作品：浏览专业的 lyrics brat 和 brat subtitles 设计，获取 charli xcx lyrics website 风格的歌词海报灵感',
        'Brat Shirt 设计：找到独特的 brat shirt 图案和 brat logo 设计，用于 DIY 服装、brat template 创作和品牌设计',
        'Brat Wallpaper 素材：下载高质量的 brat wallpaper 和 brat cover 图片，完美的 brat color #8ACE00 背景用于手机和电脑',
        '社区互动：为你喜欢的 brat word generator 和 charli xcx font 作品点赞，与其他 brat typing 爱好者交流创意'
      ]
    },
    section3: {
      title: 'Gallery 热门创作类型',
      useCases: [
        {
          title: 'Brat Meme & Text Meme 作品',
          desc: '最受欢迎的类型！浏览使用 brat meme generator 和 meme text generator 创作的爆款 meme。从搞笑的 text meme 到经典的 charli xcx meme，这些 meme font generator 作品展示了 brat generation 的创意无限。学习如何用 meme creator app 制作你自己的病毒式传播内容。'
        },
        {
          title: 'Brat Lyrics & Charli XCX 歌词',
          desc: '专业的 brat lyric generator 和 lyrics brat 作品集合。这些使用 brat lyrics generator 创作的 brat subtitles 和歌词海报完美展现了 charli xcx lyrics website 的美学风格。无论是 brat album 歌词还是自创文字，都能在这里找到灵感。'
        },
        {
          title: 'Brat Shirt & 服装设计图案',
          desc: '独特的 brat shirt 设计灵感库！浏览使用 brat text generator 和 brat font generator 创作的 brat logo 和 brat template 图案。这些 charli xcx brat font 风格的设计完美适合印制在 T恤、卫衣上，是 DIY brat shirt 的最佳参考。'
        },
        {
          title: 'Brat Wallpaper & 壁纸素材',
          desc: '高质量的 brat wallpaper 作品展示。使用 brat image generator 和 brat cover generator 创作的这些壁纸完美保留了 brat color #8ACE00 的标志性色彩。从简约的 brat letter 到复杂的 brat album cover 风格，总有一款适合你的设备。'
        },
        {
          title: 'Brat Template & 创意模板',
          desc: '实用的 brat template 和设计模板合集。这些使用 brat album generator 和 free brat generator 创作的 brat generater 作品可直接用于品牌设计、社交媒体素材和商业项目。从 brat generator com 风格到创新设计，为你的 brat generation 项目提供灵感。'
        }
      ]
    }
  },
  en: {
    section1: {
      title: 'Brat Meme Generator Gallery - Discover Creative Inspiration',
      para1: 'Welcome to Brat Gallery! Here you\'ll find amazing creations from global creators using brat text generator, brat font generator, and brat meme generator. As the most active brat maker community, our Gallery showcases thousands of brat meme, text meme, and brat lyrics style images created with charli xcx text generator and brat lyric generator.',
      para2: 'Whether you\'re looking for brat shirt design inspiration, brat wallpaper materials, or want to learn how to use meme text generator and meme font generator to create brat logo, this free brat generator community provides unlimited creativity. Browse our brat album generator works and discover the infinite possibilities of charli xcx brat generator!'
    },
    section2: {
      title: 'Why Browse Brat Gallery?',
      para: 'As the world\'s largest brat meme generator and brat text maker community, Gallery provides rich creative resources and inspiration:',
      features: [
        'Brat Meme Inspiration: Discover the most popular brat memes and text meme creations, learn how to use meme creator app and meme generator fonts to create viral content',
        'Brat Lyrics Works: Browse professional lyrics brat and brat subtitles designs, get inspiration for charli xcx lyrics website style lyric posters',
        'Brat Shirt Designs: Find unique brat shirt patterns and brat logo designs for DIY apparel, brat template creation, and brand design',
        'Brat Wallpaper Materials: Download high-quality brat wallpaper and brat cover images, perfect brat color #8ACE00 backgrounds for phones and computers',
        'Community Interaction: Like your favorite brat word generator and charli xcx font works, exchange ideas with other brat typing enthusiasts'
      ]
    },
    section3: {
      title: 'Popular Gallery Creation Types',
      useCases: [
        {
          title: 'Brat Meme & Text Meme Works',
          desc: 'The most popular category! Browse viral memes created with brat meme generator and meme text generator. From funny text meme to classic charli xcx meme, these meme font generator works showcase the unlimited creativity of brat generation. Learn how to create your own viral content with meme creator app.'
        },
        {
          title: 'Brat Lyrics & Charli XCX Lyrics',
          desc: 'Professional brat lyric generator and lyrics brat work collection. These brat subtitles and lyric posters created with brat lyrics generator perfectly showcase the aesthetic style of charli xcx lyrics website. Whether brat album lyrics or original text, find inspiration here.'
        },
        {
          title: 'Brat Shirt & Apparel Design Patterns',
          desc: 'Unique brat shirt design inspiration library! Browse brat logo and brat template patterns created with brat text generator and brat font generator. These charli xcx brat font style designs are perfect for printing on T-shirts and hoodies, the best reference for DIY brat shirt.'
        },
        {
          title: 'Brat Wallpaper & Background Materials',
          desc: 'High-quality brat wallpaper work showcase. These wallpapers created with brat image generator and brat cover generator perfectly preserve the iconic brat color #8ACE00. From minimalist brat letter to complex brat album cover style, there\'s one for your device.'
        },
        {
          title: 'Brat Template & Creative Templates',
          desc: 'Practical brat template and design template collection. These brat generater works created with brat album generator and free brat generator can be directly used for brand design, social media materials, and commercial projects. From brat generator com style to innovative designs, provide inspiration for your brat generation projects.'
        }
      ]
    }
  },
  es: {
    section1: {
      title: 'Brat Meme Generator Gallery - Descubre Inspiración Creativa',
      para1: '¡Bienvenido a Brat Gallery! Aquí encontrarás increíbles creaciones de creadores globales usando brat text generator, brat font generator y brat meme generator. Como la comunidad brat maker más activa, nuestra Gallery muestra miles de imágenes estilo brat meme, text meme y brat lyrics creadas con charli xcx text generator y brat lyric generator.',
      para2: 'Ya sea que busques inspiración de diseño brat shirt, materiales brat wallpaper, o quieras aprender a usar meme text generator y meme font generator para crear brat logo, esta comunidad free brat generator proporciona creatividad ilimitada. ¡Navega nuestras obras brat album generator y descubre las infinitas posibilidades del charli xcx brat generator!'
    },
    section2: {
      title: '¿Por Qué Navegar Brat Gallery?',
      para: 'Como la comunidad brat meme generator y brat text maker más grande del mundo, Gallery proporciona ricos recursos creativos e inspiración:',
      features: [
        'Inspiración Brat Meme: Descubre los brat memes y text meme más populares, aprende a usar meme creator app y meme generator fonts para crear contenido viral',
        'Obras Brat Lyrics: Navega diseños profesionales lyrics brat y brat subtitles, obtén inspiración para pósters de letras estilo charli xcx lyrics website',
        'Diseños Brat Shirt: Encuentra patrones únicos brat shirt y diseños brat logo para ropa DIY, creación brat template y diseño de marca',
        'Materiales Brat Wallpaper: Descarga imágenes brat wallpaper y brat cover de alta calidad, fondos perfectos brat color #8ACE00 para teléfonos y computadoras',
        'Interacción Comunitaria: Dale me gusta a tus obras favoritas brat word generator y charli xcx font, intercambia ideas con otros entusiastas brat typing'
      ]
    },
    section3: {
      title: 'Tipos Populares de Creación en Gallery',
      useCases: [
        {
          title: 'Obras Brat Meme & Text Meme',
          desc: '¡La categoría más popular! Navega memes virales creados con brat meme generator y meme text generator. Desde text meme divertidos hasta charli xcx meme clásicos, estas obras meme font generator muestran la creatividad ilimitada de brat generation. Aprende a crear tu propio contenido viral con meme creator app.'
        },
        {
          title: 'Brat Lyrics & Letras Charli XCX',
          desc: 'Colección profesional de obras brat lyric generator y lyrics brat. Estos brat subtitles y pósters de letras creados con brat lyrics generator muestran perfectamente el estilo estético de charli xcx lyrics website. Ya sean letras brat album u texto original, encuentra inspiración aquí.'
        },
        {
          title: 'Brat Shirt & Patrones de Diseño de Ropa',
          desc: '¡Biblioteca única de inspiración de diseño brat shirt! Navega patrones brat logo y brat template creados con brat text generator y brat font generator. Estos diseños estilo charli xcx brat font son perfectos para imprimir en camisetas y sudaderas, la mejor referencia para DIY brat shirt.'
        },
        {
          title: 'Brat Wallpaper & Materiales de Fondo',
          desc: 'Muestra de obras brat wallpaper de alta calidad. Estos fondos creados con brat image generator y brat cover generator preservan perfectamente el icónico brat color #8ACE00. Desde brat letter minimalista hasta estilo brat album cover complejo, hay uno para tu dispositivo.'
        },
        {
          title: 'Brat Template & Plantillas Creativas',
          desc: 'Colección práctica de brat template y plantillas de diseño. Estas obras brat generater creadas con brat album generator y free brat generator pueden usarse directamente para diseño de marca, materiales de redes sociales y proyectos comerciales. Desde estilo brat generator com hasta diseños innovadores, proporciona inspiración para tus proyectos brat generation.'
        }
      ]
    }
  },
  id: {
    section1: {
      title: 'Brat Meme Generator Gallery - Temukan Inspirasi Kreatif',
      para1: 'Selamat datang di Brat Gallery! Di sini Anda akan menemukan kreasi menakjubkan dari kreator global menggunakan brat text generator, brat font generator, dan brat meme generator. Sebagai komunitas brat maker paling aktif, Gallery kami menampilkan ribuan gambar gaya brat meme, text meme, dan brat lyrics yang dibuat dengan charli xcx text generator dan brat lyric generator.',
      para2: 'Baik Anda mencari inspirasi desain brat shirt, materi brat wallpaper, atau ingin belajar cara menggunakan meme text generator dan meme font generator untuk membuat brat logo, komunitas free brat generator ini memberikan kreativitas tak terbatas. Jelajahi karya brat album generator kami dan temukan kemungkinan tak terbatas dari charli xcx brat generator!'
    },
    section2: {
      title: 'Mengapa Menjelajahi Brat Gallery?',
      para: 'Sebagai komunitas brat meme generator dan brat text maker terbesar di dunia, Gallery menyediakan sumber daya kreatif dan inspirasi yang kaya:',
      features: [
        'Inspirasi Brat Meme: Temukan brat memes dan text meme paling populer, pelajari cara menggunakan meme creator app dan meme generator fonts untuk membuat konten viral',
        'Karya Brat Lyrics: Jelajahi desain profesional lyrics brat dan brat subtitles, dapatkan inspirasi untuk poster lirik gaya charli xcx lyrics website',
        'Desain Brat Shirt: Temukan pola unik brat shirt dan desain brat logo untuk pakaian DIY, pembuatan brat template, dan desain merek',
        'Materi Brat Wallpaper: Unduh gambar berkualitas tinggi brat wallpaper dan brat cover, latar belakang brat color #8ACE00 sempurna untuk ponsel dan komputer',
        'Interaksi Komunitas: Sukai karya favorit Anda brat word generator dan charli xcx font, tukar ide dengan penggemar brat typing lainnya'
      ]
    },
    section3: {
      title: 'Jenis Kreasi Populer di Gallery',
      useCases: [
        {
          title: 'Karya Brat Meme & Text Meme',
          desc: 'Kategori paling populer! Jelajahi meme viral yang dibuat dengan brat meme generator dan meme text generator. Dari text meme lucu hingga charli xcx meme klasik, karya meme font generator ini menampilkan kreativitas tak terbatas dari brat generation. Pelajari cara membuat konten viral Anda sendiri dengan meme creator app.'
        },
        {
          title: 'Brat Lyrics & Lirik Charli XCX',
          desc: 'Koleksi karya profesional brat lyric generator dan lyrics brat. Brat subtitles dan poster lirik ini yang dibuat dengan brat lyrics generator menampilkan dengan sempurna gaya estetika charli xcx lyrics website. Baik lirik brat album atau teks orisinal, temukan inspirasi di sini.'
        },
        {
          title: 'Brat Shirt & Pola Desain Pakaian',
          desc: 'Perpustakaan inspirasi desain brat shirt yang unik! Jelajahi pola brat logo dan brat template yang dibuat dengan brat text generator dan brat font generator. Desain bergaya charli xcx brat font ini sempurna untuk dicetak pada kaos dan hoodie, referensi terbaik untuk DIY brat shirt.'
        },
        {
          title: 'Brat Wallpaper & Materi Latar Belakang',
          desc: 'Pameran karya brat wallpaper berkualitas tinggi. Wallpaper ini yang dibuat dengan brat image generator dan brat cover generator dengan sempurna mempertahankan brat color #8ACE00 yang ikonik. Dari brat letter minimalis hingga gaya brat album cover yang kompleks, ada satu untuk perangkat Anda.'
        },
        {
          title: 'Brat Template & Template Kreatif',
          desc: 'Koleksi brat template dan template desain yang praktis. Karya brat generater ini yang dibuat dengan brat album generator dan free brat generator dapat langsung digunakan untuk desain merek, materi media sosial, dan proyek komersial. Dari gaya brat generator com hingga desain inovatif, memberikan inspirasi untuk proyek brat generation Anda.'
        }
      ]
    }
  },
  ja: {
    section1: {
      title: 'Brat Meme Generator Gallery - クリエイティブなインスピレーションを発見',
      para1: 'Brat Galleryへようこそ！ここでは、brat text generator、brat font generator、brat meme generatorを使用したグローバルクリエイターによる素晴らしい作品が見つかります。最もアクティブなbrat makerコミュニティとして、私たちのGalleryはcharli xcx text generatorとbrat lyric generatorで作成された数千のbrat meme、text meme、brat lyricsスタイルの画像を紹介しています。',
      para2: 'brat shirtデザインのインスピレーション、brat wallpaper素材を探している場合、またはmeme text generatorとmeme font generatorを使用してbrat logoを作成する方法を学びたい場合、このfree brat generatorコミュニティは無限の創造性を提供します。brat album generator作品を閲覧し、charli xcx brat generatorの無限の可能性を発見しましょう！'
    },
    section2: {
      title: 'なぜBrat Galleryを閲覧するのか？',
      para: '世界最大のbrat meme generatorとbrat text makerコミュニティとして、Galleryは豊富なクリエイティブリソースとインスピレーションを提供します：',
      features: [
        'Brat Memeインスピレーション：最も人気のあるbrat memesとtext meme作品を発見し、meme creator appとmeme generator fontsを使用してバイラルコンテンツを作成する方法を学ぶ',
        'Brat Lyrics作品：プロフェッショナルなlyrics bratとbrat subtitlesデザインを閲覧し、charli xcx lyrics websiteスタイルの歌詞ポスターのインスピレーションを得る',
        'Brat Shirtデザイン：ユニークなbrat shirtパターンとbrat logoデザインを見つけ、DIYアパレル、brat template作成、ブランドデザインに使用',
        'Brat Wallpaper素材：高品質のbrat wallpaperとbrat cover画像をダウンロード、スマートフォンとコンピューター用の完璧なbrat color #8ACE00背景',
        'コミュニティインタラクション：お気に入りのbrat word generatorとcharli xcx font作品にいいねし、他のbrat typing愛好家とアイデアを交換'
      ]
    },
    section3: {
      title: 'Gallery人気の作成タイプ',
      useCases: [
        {
          title: 'Brat Meme & Text Meme作品',
          desc: '最も人気のあるカテゴリー！brat meme generatorとmeme text generatorで作成されたバイラルミームを閲覧。面白いtext memeからクラシックなcharli xcx memeまで、これらのmeme font generator作品はbrat generationの無限の創造性を示しています。meme creator appで独自のバイラルコンテンツを作成する方法を学びましょう。'
        },
        {
          title: 'Brat Lyrics & Charli XCX歌詞',
          desc: 'プロフェッショナルなbrat lyric generatorとlyrics brat作品コレクション。brat lyrics generatorで作成されたこれらのbrat subtitlesと歌詞ポスターは、charli xcx lyrics websiteの美的スタイルを完璧に表現しています。brat album歌詞でもオリジナルテキストでも、ここでインスピレーションを見つけられます。'
        },
        {
          title: 'Brat Shirt & アパレルデザインパターン',
          desc: 'ユニークなbrat shirtデザインインスピレーションライブラリ！brat text generatorとbrat font generatorで作成されたbrat logoとbrat templateパターンを閲覧。これらのcharli xcx brat fontスタイルのデザインは、Tシャツやパーカーにプリントするのに最適で、DIY brat shirtの最高のリファレンスです。'
        },
        {
          title: 'Brat Wallpaper & 背景素材',
          desc: '高品質のbrat wallpaper作品ショーケース。brat image generatorとbrat cover generatorで作成されたこれらのwallpaperは、象徴的なbrat color #8ACE00を完璧に保持しています。ミニマリストのbrat letterから複雑なbrat album coverスタイルまで、あなたのデバイスに合うものがあります。'
        },
        {
          title: 'Brat Template & クリエイティブテンプレート',
          desc: '実用的なbrat templateとデザインテンプレートコレクション。brat album generatorとfree brat generatorで作成されたこれらのbrat generater作品は、ブランドデザイン、ソーシャルメディア素材、商業プロジェクトに直接使用できます。brat generator comスタイルから革新的なデザインまで、brat generationプロジェクトにインスピレーションを提供します。'
        }
      ]
    }
  }
}

export default function GallerySEOContent({ lang, imageCount }: GallerySEOContentProps) {
  // 获取当前语言的翻译，默认使用英文
  const t = translations[lang] || translations['en']

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      paddingTop: '48px',
      paddingBottom: '48px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        {/* Section 1: Gallery介绍 */}
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: '#1d1d1f' }}>
          {t.section1.title}
        </h2>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section1.para1}
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section1.para2}
        </p>

        {/* 统计信息 */}
        <div style={{
          background: '#f5f5f7',
          borderRadius: '12px',
          padding: '24px',
          marginTop: '32px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', fontWeight: '700', color: '#8ACE00', marginBottom: '8px' }}>
            {imageCount.toLocaleString()}+
          </div>
          <div style={{ fontSize: '17px', color: '#6e6e73' }}>
            {lang === 'zh' ? 'Brat 风格作品' : 
             lang === 'es' ? 'Obras Estilo Brat' :
             lang === 'id' ? 'Karya Gaya Brat' :
             lang === 'ja' ? 'Bratスタイル作品' :
             'Brat Style Creations'}
          </div>
        </div>

        {/* Section 2: 为什么浏览Gallery */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section2.title}
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '12px' }}>
          {t.section2.para}
        </p>
        <ul style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginLeft: '24px', marginBottom: '16px' }}>
          {t.section2.features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              <strong>{feature.split('：')[0] || feature.split(':')[0]}：</strong>{feature.split('：')[1] || feature.split(':')[1]}
            </li>
          ))}
        </ul>

        {/* Section 3: 热门创作类型 */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section3.title}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
          {t.section3.useCases.map((useCase, index) => (
            <div 
              key={index} 
              style={{ 
                background: '#f5f5f7', 
                borderRadius: '12px', 
                padding: '20px',
                border: '1px solid #e5e5e7'
              }}
            >
              <h4 style={{ fontSize: '19px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                {useCase.title}
              </h4>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#424245', margin: 0 }}>
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
