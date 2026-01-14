// Brat Color SEO内容组件
// 为Brat Color页面提供丰富的文字内容，优化SEO

type BratColorSEOContentProps = {
  lang: string
}

// 完整的多语言翻译配置
const translations: Record<string, {
  section1: { title: string; para1: string; para2: string }
  section2: { title: string; para: string; specs: Array<{title: string; desc: string}> }
  section3: { title: string; applications: Array<{title: string; desc: string}> }
}> = {
  zh: {
    section1: {
      title: '探索 Brat Color #8ACE00 - 标志性的荧光绿',
      para1: 'Brat Color #8ACE00 是 Charli XCX Brat 专辑最具标志性的视觉元素。这个充满活力的荧光绿色已成为 brat generation 文化的核心标志。无论你使用 brat text generator、brat font generator 还是 brat meme generator，正确的 brat color 都是创作成功的 brat meme、text meme 和 brat lyrics 的关键。',
      para2: '作为专业的 brat maker 和 charli xcx text generator 用户，了解精确的 brat color 色值对于制作 brat shirt、brat wallpaper、brat logo 和 brat template 至关重要。我们的 free brat generator 和 brat album generator 都使用这个官方 brat color，确保你的 brat lyric generator、meme text generator 和 meme font generator 作品保持最佳的 charli xcx brat generator 风格。'
    },
    section2: {
      title: 'Brat Color 技术规格 - 完美的 #8ACE00',
      para: '要在你的 brat text maker、brat word generator 和 meme creator app 项目中使用正确的 brat color，需要以下精确的色值：',
      specs: [
        {
          title: 'HEX: #8ACE00',
          desc: '这是 brat color 的十六进制色值，最常用于 brat font generator、brat cover generator 和 brat image generator 项目。在 CSS、HTML 和所有 brat meme generator 设计中使用这个值。'
        },
        {
          title: 'RGB: 138, 206, 0',
          desc: '用于 charli xcx font 和 brat typing 项目的 RGB 色值。这个 brat color 配置完美适配 brat lyrics generator、lyrics brat 设计和 brat subtitles 制作。'
        },
        {
          title: 'HSL: 80°, 100%, 40%',
          desc: 'HSL 色值让你可以轻松调整 brat color 的亮度和饱和度，用于创建 brat wallpaper、brat album cover 和 brat website 的不同变体。'
        },
        {
          title: 'CMYK: 33%, 0%, 100%, 19%',
          desc: '用于印刷 brat shirt、brat logo 和其他实体 brat template 产品的 CMYK 色值。确保你的 DIY brat shirt 和 charli xcx brat font 印刷品颜色准确。'
        }
      ]
    },
    section3: {
      title: 'Brat Color 应用场景 - 从数字到实物',
      applications: [
        {
          title: 'Brat Meme Generator 和 Digital 内容',
          desc: '使用精确的 brat color #8ACE00 在 brat meme generator、meme text generator 和 text meme 创作中。这个 brat color 是所有 charli xcx meme、brat memes 和 meme font generator 项目的基础色，确保你的 meme creator app 作品具有正宗的 brat generation 美学。'
        },
        {
          title: 'Brat Shirt 和服装印刷',
          desc: '在 DIY brat shirt 设计中使用 CMYK 色值确保印刷质量。这个 brat color 完美适用于 T恤、卫衣和其他服装，让你的 brat logo 和 brat template 图案在实物上呈现最佳效果。结合 charli xcx brat font 使用效果更佳。'
        },
        {
          title: 'Brat Wallpaper 和屏幕设计',
          desc: '使用 RGB 或 HEX 色值创作 brat wallpaper、手机壁纸和电脑背景。这个 brat color 在 OLED 和 LCD 屏幕上都能完美显示，是 brat cover、brat album cover 和 brat letter 设计的理想选择。'
        },
        {
          title: 'Brat Lyrics 和音乐视觉',
          desc: '在 brat lyrics generator、brat lyric generator 和 lyrics brat 项目中使用标准 brat color。这个色值完美适配 brat subtitles、charli xcx lyrics website 风格的歌词视频和 brat album 视觉设计。'
        },
        {
          title: 'Brat Website 和品牌设计',
          desc: '在 brat website、brat template 和品牌项目中保持色彩一致性。使用精确的 brat color 确保你的 free brat generator、brat generator com 和 brat generater 平台具有专业统一的视觉效果。'
        },
        {
          title: 'Charli XCX Generator 工具',
          desc: '所有 charli xcx text generator、charli xcx generator 和 brat text generator 工具都依赖这个标准 brat color。从 brat word generator 到 brat typing 工具，#8ACE00 是确保 brat type 和 what font is brat 问题得到正确答案的关键。'
        }
      ]
    }
  },
  en: {
    section1: {
      title: 'Explore Brat Color #8ACE00 - The Iconic Fluorescent Green',
      para1: 'Brat Color #8ACE00 is the most iconic visual element of Charli XCX\'s Brat album. This vibrant fluorescent green has become the core symbol of brat generation culture. Whether you use brat text generator, brat font generator, or brat meme generator, the correct brat color is key to creating successful brat meme, text meme, and brat lyrics.',
      para2: 'As a professional brat maker and charli xcx text generator user, knowing the precise brat color values is crucial for creating brat shirt, brat wallpaper, brat logo, and brat template. Our free brat generator and brat album generator all use this official brat color, ensuring your brat lyric generator, meme text generator, and meme font generator works maintain the best charli xcx brat generator style.'
    },
    section2: {
      title: 'Brat Color Technical Specs - Perfect #8ACE00',
      para: 'To use the correct brat color in your brat text maker, brat word generator, and meme creator app projects, you need these precise color values:',
      specs: [
        {
          title: 'HEX: #8ACE00',
          desc: 'This is the hexadecimal value of brat color, most commonly used in brat font generator, brat cover generator, and brat image generator projects. Use this value in CSS, HTML, and all brat meme generator designs.'
        },
        {
          title: 'RGB: 138, 206, 0',
          desc: 'RGB value for charli xcx font and brat typing projects. This brat color configuration perfectly suits brat lyrics generator, lyrics brat designs, and brat subtitles creation.'
        },
        {
          title: 'HSL: 80°, 100%, 40%',
          desc: 'HSL value lets you easily adjust brat color brightness and saturation for creating different variants of brat wallpaper, brat album cover, and brat website.'
        },
        {
          title: 'CMYK: 33%, 0%, 100%, 19%',
          desc: 'CMYK value for printing brat shirt, brat logo, and other physical brat template products. Ensure accurate color for your DIY brat shirt and charli xcx brat font printed items.'
        }
      ]
    },
    section3: {
      title: 'Brat Color Applications - From Digital to Physical',
      applications: [
        {
          title: 'Brat Meme Generator and Digital Content',
          desc: 'Use precise brat color #8ACE00 in brat meme generator, meme text generator, and text meme creation. This brat color is the foundation for all charli xcx meme, brat memes, and meme font generator projects, ensuring your meme creator app works have authentic brat generation aesthetics.'
        },
        {
          title: 'Brat Shirt and Apparel Printing',
          desc: 'Use CMYK values in DIY brat shirt design to ensure print quality. This brat color works perfectly on T-shirts, hoodies, and other apparel, making your brat logo and brat template patterns look their best on physical items. Works even better combined with charli xcx brat font.'
        },
        {
          title: 'Brat Wallpaper and Screen Design',
          desc: 'Use RGB or HEX values to create brat wallpaper, phone wallpapers, and computer backgrounds. This brat color displays perfectly on both OLED and LCD screens, ideal for brat cover, brat album cover, and brat letter designs.'
        },
        {
          title: 'Brat Lyrics and Music Visuals',
          desc: 'Use standard brat color in brat lyrics generator, brat lyric generator, and lyrics brat projects. This value perfectly suits brat subtitles, charli xcx lyrics website style lyric videos, and brat album visual design.'
        },
        {
          title: 'Brat Website and Brand Design',
          desc: 'Maintain color consistency in brat website, brat template, and brand projects. Use precise brat color to ensure your free brat generator, brat generator com, and brat generater platforms have professional unified visual effects.'
        },
        {
          title: 'Charli XCX Generator Tools',
          desc: 'All charli xcx text generator, charli xcx generator, and brat text generator tools rely on this standard brat color. From brat word generator to brat typing tools, #8ACE00 is key to ensuring brat type and what font is brat questions get correct answers.'
        }
      ]
    }
  },
  es: {
    section1: {
      title: 'Explora Brat Color #8ACE00 - El Verde Fluorescente Icónico',
      para1: 'Brat Color #8ACE00 es el elemento visual más icónico del álbum Brat de Charli XCX. Este vibrante verde fluorescente se ha convertido en el símbolo central de la cultura brat generation. Ya sea que uses brat text generator, brat font generator o brat meme generator, el correcto brat color es clave para crear exitosos brat meme, text meme y brat lyrics.',
      para2: 'Como profesional brat maker y usuario de charli xcx text generator, conocer los valores precisos de brat color es crucial para crear brat shirt, brat wallpaper, brat logo y brat template. Nuestro free brat generator y brat album generator usan este brat color oficial, asegurando que tus obras de brat lyric generator, meme text generator y meme font generator mantengan el mejor estilo charli xcx brat generator.'
    },
    section2: {
      title: 'Especificaciones Técnicas de Brat Color - Perfecto #8ACE00',
      para: 'Para usar el correcto brat color en tus proyectos de brat text maker, brat word generator y meme creator app, necesitas estos valores precisos de color:',
      specs: [
        {
          title: 'HEX: #8ACE00',
          desc: 'Este es el valor hexadecimal del brat color, más comúnmente usado en proyectos de brat font generator, brat cover generator y brat image generator. Usa este valor en CSS, HTML y todos los diseños de brat meme generator.'
        },
        {
          title: 'RGB: 138, 206, 0',
          desc: 'Valor RGB para proyectos de charli xcx font y brat typing. Esta configuración de brat color se adapta perfectamente a brat lyrics generator, diseños lyrics brat y creación de brat subtitles.'
        },
        {
          title: 'HSL: 80°, 100%, 40%',
          desc: 'El valor HSL te permite ajustar fácilmente el brillo y la saturación del brat color para crear diferentes variantes de brat wallpaper, brat album cover y brat website.'
        },
        {
          title: 'CMYK: 33%, 0%, 100%, 19%',
          desc: 'Valor CMYK para imprimir brat shirt, brat logo y otros productos físicos brat template. Asegura color preciso para tu DIY brat shirt y artículos impresos charli xcx brat font.'
        }
      ]
    },
    section3: {
      title: 'Aplicaciones de Brat Color - De Digital a Físico',
      applications: [
        {
          title: 'Brat Meme Generator y Contenido Digital',
          desc: 'Usa el preciso brat color #8ACE00 en brat meme generator, meme text generator y creación de text meme. Este brat color es la base para todos los proyectos de charli xcx meme, brat memes y meme font generator, asegurando que tus obras de meme creator app tengan estética auténtica de brat generation.'
        },
        {
          title: 'Brat Shirt e Impresión de Ropa',
          desc: 'Usa valores CMYK en diseño DIY brat shirt para asegurar calidad de impresión. Este brat color funciona perfectamente en camisetas, sudaderas y otra ropa, haciendo que tus patrones brat logo y brat template se vean mejor en artículos físicos. Funciona aún mejor combinado con charli xcx brat font.'
        },
        {
          title: 'Brat Wallpaper y Diseño de Pantalla',
          desc: 'Usa valores RGB o HEX para crear brat wallpaper, fondos de teléfono y fondos de computadora. Este brat color se muestra perfectamente tanto en pantallas OLED como LCD, ideal para diseños brat cover, brat album cover y brat letter.'
        },
        {
          title: 'Brat Lyrics y Visuales Musicales',
          desc: 'Usa brat color estándar en proyectos de brat lyrics generator, brat lyric generator y lyrics brat. Este valor se adapta perfectamente a brat subtitles, videos de letras estilo charli xcx lyrics website y diseño visual de brat album.'
        },
        {
          title: 'Brat Website y Diseño de Marca',
          desc: 'Mantén consistencia de color en brat website, brat template y proyectos de marca. Usa brat color preciso para asegurar que tus plataformas free brat generator, brat generator com y brat generater tengan efectos visuales profesionales unificados.'
        },
        {
          title: 'Herramientas Charli XCX Generator',
          desc: 'Todas las herramientas charli xcx text generator, charli xcx generator y brat text generator dependen de este brat color estándar. Desde brat word generator hasta herramientas brat typing, #8ACE00 es clave para asegurar que las preguntas brat type y what font is brat obtengan respuestas correctas.'
        }
      ]
    }
  },
  id: {
    section1: {
      title: 'Jelajahi Brat Color #8ACE00 - Hijau Fluorescent Ikonik',
      para1: 'Brat Color #8ACE00 adalah elemen visual paling ikonik dari album Brat Charli XCX. Hijau fluorescent yang vibrant ini telah menjadi simbol inti budaya brat generation. Baik Anda menggunakan brat text generator, brat font generator, atau brat meme generator, brat color yang benar adalah kunci untuk membuat brat meme, text meme, dan brat lyrics yang sukses.',
      para2: 'Sebagai profesional brat maker dan pengguna charli xcx text generator, mengetahui nilai brat color yang tepat sangat penting untuk membuat brat shirt, brat wallpaper, brat logo, dan brat template. Free brat generator dan brat album generator kami semua menggunakan brat color resmi ini, memastikan karya brat lyric generator, meme text generator, dan meme font generator Anda mempertahankan gaya charli xcx brat generator terbaik.'
    },
    section2: {
      title: 'Spesifikasi Teknis Brat Color - Sempurna #8ACE00',
      para: 'Untuk menggunakan brat color yang benar dalam proyek brat text maker, brat word generator, dan meme creator app Anda, Anda memerlukan nilai warna yang tepat ini:',
      specs: [
        {
          title: 'HEX: #8ACE00',
          desc: 'Ini adalah nilai heksadesimal brat color, paling umum digunakan dalam proyek brat font generator, brat cover generator, dan brat image generator. Gunakan nilai ini dalam CSS, HTML, dan semua desain brat meme generator.'
        },
        {
          title: 'RGB: 138, 206, 0',
          desc: 'Nilai RGB untuk proyek charli xcx font dan brat typing. Konfigurasi brat color ini sangat cocok untuk brat lyrics generator, desain lyrics brat, dan pembuatan brat subtitles.'
        },
        {
          title: 'HSL: 80°, 100%, 40%',
          desc: 'Nilai HSL memungkinkan Anda menyesuaikan kecerahan dan saturasi brat color dengan mudah untuk membuat berbagai varian brat wallpaper, brat album cover, dan brat website.'
        },
        {
          title: 'CMYK: 33%, 0%, 100%, 19%',
          desc: 'Nilai CMYK untuk mencetak brat shirt, brat logo, dan produk fisik brat template lainnya. Pastikan warna akurat untuk DIY brat shirt dan item cetak charli xcx brat font Anda.'
        }
      ]
    },
    section3: {
      title: 'Aplikasi Brat Color - Dari Digital ke Fisik',
      applications: [
        {
          title: 'Brat Meme Generator dan Konten Digital',
          desc: 'Gunakan brat color #8ACE00 yang tepat dalam brat meme generator, meme text generator, dan pembuatan text meme. Brat color ini adalah fondasi untuk semua proyek charli xcx meme, brat memes, dan meme font generator, memastikan karya meme creator app Anda memiliki estetika brat generation yang autentik.'
        },
        {
          title: 'Brat Shirt dan Pencetakan Pakaian',
          desc: 'Gunakan nilai CMYK dalam desain DIY brat shirt untuk memastikan kualitas cetak. Brat color ini bekerja sempurna pada kaos, hoodie, dan pakaian lainnya, membuat pola brat logo dan brat template Anda terlihat terbaik pada item fisik. Bekerja lebih baik jika dikombinasikan dengan charli xcx brat font.'
        },
        {
          title: 'Brat Wallpaper dan Desain Layar',
          desc: 'Gunakan nilai RGB atau HEX untuk membuat brat wallpaper, wallpaper ponsel, dan latar belakang komputer. Brat color ini ditampilkan dengan sempurna pada layar OLED dan LCD, ideal untuk desain brat cover, brat album cover, dan brat letter.'
        },
        {
          title: 'Brat Lyrics dan Visual Musik',
          desc: 'Gunakan brat color standar dalam proyek brat lyrics generator, brat lyric generator, dan lyrics brat. Nilai ini sangat cocok untuk brat subtitles, video lirik gaya charli xcx lyrics website, dan desain visual brat album.'
        },
        {
          title: 'Brat Website dan Desain Merek',
          desc: 'Pertahankan konsistensi warna dalam brat website, brat template, dan proyek merek. Gunakan brat color yang tepat untuk memastikan platform free brat generator, brat generator com, dan brat generater Anda memiliki efek visual profesional yang terpadu.'
        },
        {
          title: 'Alat Charli XCX Generator',
          desc: 'Semua alat charli xcx text generator, charli xcx generator, dan brat text generator bergantung pada brat color standar ini. Dari brat word generator hingga alat brat typing, #8ACE00 adalah kunci untuk memastikan pertanyaan brat type dan what font is brat mendapat jawaban yang benar.'
        }
      ]
    }
  },
  ja: {
    section1: {
      title: 'Brat Color #8ACE00を探索 - 象徴的な蛍光グリーン',
      para1: 'Brat Color #8ACE00は、Charli XCXのBratアルバムの最も象徴的なビジュアル要素です。この鮮やかな蛍光グリーンは、brat generation文化の中核シンボルとなっています。brat text generator、brat font generator、brat meme generatorを使用する場合、正しいbrat colorは成功したbrat meme、text meme、brat lyricsを作成する鍵となります。',
      para2: 'プロフェッショナルなbrat makerおよびcharli xcx text generatorユーザーとして、正確なbrat color値を知ることは、brat shirt、brat wallpaper、brat logo、brat templateを作成するために不可欠です。私たちのfree brat generatorとbrat album generatorはすべてこの公式brat colorを使用し、brat lyric generator、meme text generator、meme font generator作品が最高のcharli xcx brat generatorスタイルを維持することを保証します。'
    },
    section2: {
      title: 'Brat Color技術仕様 - 完璧な#8ACE00',
      para: 'brat text maker、brat word generator、meme creator appプロジェクトで正しいbrat colorを使用するには、これらの正確な色値が必要です：',
      specs: [
        {
          title: 'HEX: #8ACE00',
          desc: 'これはbrat colorの16進数値で、brat font generator、brat cover generator、brat image generatorプロジェクトで最も一般的に使用されます。CSS、HTML、すべてのbrat meme generatorデザインでこの値を使用してください。'
        },
        {
          title: 'RGB: 138, 206, 0',
          desc: 'charli xcx fontとbrat typingプロジェクト用のRGB値。このbrat color構成は、brat lyrics generator、lyrics bratデザイン、brat subtitles作成に完璧に適しています。'
        },
        {
          title: 'HSL: 80°, 100%, 40%',
          desc: 'HSL値により、brat colorの明るさと彩度を簡単に調整して、brat wallpaper、brat album cover、brat websiteのさまざまなバリエーションを作成できます。'
        },
        {
          title: 'CMYK: 33%, 0%, 100%, 19%',
          desc: 'brat shirt、brat logo、その他の物理的なbrat template製品を印刷するためのCMYK値。DIY brat shirtおよびcharli xcx brat font印刷物の色を正確に確保します。'
        }
      ]
    },
    section3: {
      title: 'Brat Colorアプリケーション - デジタルから物理まで',
      applications: [
        {
          title: 'Brat Meme Generatorとデジタルコンテンツ',
          desc: 'brat meme generator、meme text generator、text meme作成で正確なbrat color #8ACE00を使用します。このbrat colorは、すべてのcharli xcx meme、brat memes、meme font generatorプロジェクトの基礎であり、meme creator app作品が本物のbrat generation美学を持つことを保証します。'
        },
        {
          title: 'Brat Shirtとアパレル印刷',
          desc: 'DIY brat shirtデザインでCMYK値を使用して印刷品質を確保します。このbrat colorはTシャツ、パーカー、その他のアパレルで完璧に機能し、brat logoとbrat templateパターンが物理的なアイテムで最高に見えるようにします。charli xcx brat fontと組み合わせるとさらに効果的です。'
        },
        {
          title: 'Brat Wallpaperとスクリーンデザイン',
          desc: 'RGB値またはHEX値を使用して、brat wallpaper、電話の壁紙、コンピューターの背景を作成します。このbrat colorはOLEDとLCDの両方のスクリーンで完璧に表示され、brat cover、brat album cover、brat letterデザインに最適です。'
        },
        {
          title: 'Brat Lyricsと音楽ビジュアル',
          desc: 'brat lyrics generator、brat lyric generator、lyrics bratプロジェクトで標準brat colorを使用します。この値は、brat subtitles、charli xcx lyrics websiteスタイルの歌詞ビデオ、brat albumビジュアルデザインに完璧に適しています。'
        },
        {
          title: 'Brat Websiteとブランドデザイン',
          desc: 'brat website、brat template、ブランドプロジェクトで色の一貫性を維持します。正確なbrat colorを使用して、free brat generator、brat generator com、brat generaterプラットフォームがプロフェッショナルで統一されたビジュアル効果を持つことを保証します。'
        },
        {
          title: 'Charli XCX Generatorツール',
          desc: 'すべてのcharli xcx text generator、charli xcx generator、brat text generatorツールは、この標準brat colorに依存しています。brat word generatorからbrat typingツールまで、#8ACE00はbrat typeとwhat font is bratの質問が正しい答えを得るための鍵です。'
        }
      ]
    }
  }
}

export default function BratColorSEOContent({ lang }: BratColorSEOContentProps) {
  // 获取当前语言的翻译，默认使用英文
  const t = translations[lang] || translations['en']

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      paddingTop: '32px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        {/* Section 1: Brat Color介绍 */}
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: '#1d1d1f' }}>
          {t.section1.title}
        </h2>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section1.para1}
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section1.para2}
        </p>

        {/* Section 2: 技术规格 */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section2.title}
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '24px' }}>
          {t.section2.para}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {t.section2.specs.map((spec, index) => (
            <div 
              key={index} 
              style={{ 
                background: '#f5f5f7', 
                borderRadius: '12px', 
                padding: '20px',
                border: '2px solid #8ACE00'
              }}
            >
              <h4 style={{ fontSize: '19px', fontWeight: '700', marginBottom: '8px', color: '#8ACE00' }}>
                {spec.title}
              </h4>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#424245', margin: 0 }}>
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 3: 应用场景 */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section3.title}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
          {t.section3.applications.map((app, index) => (
            <div 
              key={index} 
              style={{ 
                background: '#f5f5f7', 
                borderRadius: '12px', 
                padding: '20px',
                border: '1px solid #e5e5e7'
              }}
            >
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                {app.title}
              </h4>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#424245', margin: 0 }}>
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
