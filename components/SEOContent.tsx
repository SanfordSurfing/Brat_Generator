// SEO 内容组件
// 为首页提供丰富的文字内容，优化 SEO

type SEOContentProps = {
  lang: string
}

// 完整的多语言翻译配置
const translations: Record<string, {
  section1: { title: string; para1: string; para2: string }
  section2: { title: string; para: string; features: string[] }
  section3: { title: string; para1: string; para2: string }
  section4: { title: string; para1: string; para2: string }
  section5: { title: string; para: string; steps: string[] }
}> = {
  zh: {
    section1: {
      title: '什么是 Brat Generator？',
      para1: 'Brat Generator 是一个免费在线工具，专门用于创建 Charlie XCX "Brat" 专辑封面风格的图片。Brat 是 2024 年最具影响力的专辑之一，其标志性的亮绿色背景（#8ACE00）和简洁的 Arial Narrow 字体设计在社交媒体上引发了巨大的文化现象。',
      para2: '无论你是 Charli XCX 的粉丝，还是想要创作独特的社交媒体图片，Brat Generator 都能帮你轻松实现。只需输入文字，我们的工具会自动生成完美还原 Brat 风格的图片，支持自动换行、智能字号调整，确保你的创作始终保持专业水准。'
    },
    section2: {
      title: '核心功能特点',
      para: '我们的 Brat 图片生成器提供了多项专业功能，让你的创作过程更加简单高效：',
      features: [
        '完美还原官方风格：基于官方 bratgenerator.com 的参数优化，包括精确的颜色值（#8ACE00）、字体（Arial Narrow, 500 weight）和 2px 高斯模糊效果',
        '智能文字处理：自动换行功能确保长文本不会溢出画布，智能字号算法优先换行而不是缩小字体，让文字始终保持最大化展示',
        '实时预览：输入文字后立即看到效果，支持多行文本和自定义内容，所见即所得',
        '一键下载：生成 1000x1000 像素的高清 PNG 图片，适用于社交媒体、个人主页等多种场景',
        'Gallery 社区：上传你的作品到 Gallery，与其他创作者分享灵感，发现更多精彩的 Brat 风格图片'
      ]
    },
    section3: {
      title: '为什么选择 Brat Generator？',
      para1: '市面上有许多图片生成工具，但 Brat Generator 专注于提供最佳的 Brat 风格体验。我们深入研究了官方专辑封面的每一个细节，确保生成的图片完全符合 Brat 美学的精髓。',
      para2: '我们的工具完全免费，无需注册，无水印，支持多语言界面。无论你是想制作 Twitter 头像、Instagram 故事、还是 Discord 表情包，Brat Generator 都能满足你的需求。'
    },
    section4: {
      title: 'Brat 文化现象',
      para1: 'Charlie XCX 的 Brat 专辑不仅仅是一张音乐专辑，更是一种文化符号。这种大胆的荧光绿配色和简洁的排版风格代表了一种不拘一格、勇于表达的态度。从 TikTok 到 Twitter，从 Instagram 到 Discord，Brat 风格的图片已经成为互联网文化的重要组成部分。',
      para2: '使用 Brat Generator，你可以轻松加入这个全球性的创作社区。无论是表达你的想法、分享你的感受，还是单纯享受创作的乐趣，Brat Generator 都是你的最佳选择。'
    },
    section5: {
      title: '如何使用',
      para: '使用 Brat Generator 非常简单，只需三个步骤：',
      steps: [
        '在输入框中输入你想要的文字。支持任意长度的文本，我们的智能算法会自动处理换行和字号调整。',
        '实时预览生成的图片。你可以看到文字在标志性的 Brat 绿色背景上的效果，确保满意后再下载。',
        '点击"下载图片"保存到本地，或者点击"Upload to Gallery"分享到社区，让更多人看到你的创作。'
      ]
    }
  },
  en: {
    section1: {
      title: 'What is Brat Generator?',
      para1: 'Brat Generator is a free online tool designed to create images in the style of Charlie XCX\'s "Brat" album cover. Brat is one of the most influential albums of 2024, and its iconic bright green background (#8ACE00) combined with clean Arial Narrow typography has sparked a massive cultural phenomenon across social media.',
      para2: 'Whether you\'re a Charli XCX fan or looking to create unique social media graphics, Brat Generator makes it easy. Simply input your text, and our tool automatically generates a perfectly styled Brat image with smart text wrapping and intelligent font sizing to ensure your creation always looks professional.'
    },
    section2: {
      title: 'Key Features',
      para: 'Our Brat image generator offers several professional features to make your creative process simple and efficient:',
      features: [
        'Perfect Official Style Recreation: Optimized based on the official bratgenerator.com parameters, including precise color value (#8ACE00), font (Arial Narrow, 500 weight), and 2px Gaussian blur effect',
        'Smart Text Processing: Automatic line wrapping ensures long text doesn\'t overflow the canvas, with intelligent font sizing that prioritizes wrapping over shrinking for maximum text display',
        'Real-time Preview: See the results immediately as you type, with support for multi-line text and custom content',
        'One-Click Download: Generate high-quality 1000x1000 pixel PNG images suitable for social media, personal pages, and more',
        'Community Gallery: Upload your creations to the Gallery, share inspiration with other creators, and discover more amazing Brat-style images'
      ]
    },
    section3: {
      title: 'Why Choose Brat Generator?',
      para1: 'While there are many image generation tools available, Brat Generator focuses on delivering the best Brat-style experience. We\'ve studied every detail of the official album cover to ensure generated images perfectly capture the essence of the Brat aesthetic.',
      para2: 'Our tool is completely free, requires no registration, has no watermarks, and supports multiple languages. Whether you\'re creating Twitter avatars, Instagram stories, or Discord emotes, Brat Generator has you covered.'
    },
    section4: {
      title: 'The Brat Cultural Phenomenon',
      para1: 'Charlie XCX\'s Brat album isn\'t just a music album; it\'s a cultural symbol. This bold fluorescent green color scheme and minimalist typography represents an attitude of unrestrained self-expression. From TikTok to Twitter, from Instagram to Discord, Brat-style images have become an integral part of internet culture.',
      para2: 'With Brat Generator, you can easily join this global creative community. Whether you\'re expressing your thoughts, sharing your feelings, or simply enjoying the creative process, Brat Generator is your best choice.'
    },
    section5: {
      title: 'How to Use',
      para: 'Using Brat Generator is incredibly simple, just three steps:',
      steps: [
        'Enter your desired text in the input box. Supports text of any length, and our intelligent algorithm automatically handles line breaks and font size adjustments.',
        'Preview the generated image in real-time. You can see how your text looks against the iconic Brat green background before downloading.',
        'Click "Download Image" to save locally, or click "Upload to Gallery" to share with the community and let more people see your creation.'
      ]
    }
  },
  es: {
    section1: {
      title: '¿Qué es Brat Generator?',
      para1: 'Brat Generator es una herramienta gratuita en línea diseñada para crear imágenes al estilo de la portada del álbum "Brat" de Charlie XCX. Brat es uno de los álbumes más influyentes de 2024, y su icónico fondo verde brillante (#8ACE00) combinado con la tipografía Arial Narrow limpia ha desatado un fenómeno cultural masivo en las redes sociales.',
      para2: 'Ya seas fan de Charli XCX o busques crear gráficos únicos para redes sociales, Brat Generator lo hace fácil. Simplemente ingresa tu texto y nuestra herramienta genera automáticamente una imagen Brat perfectamente estilizada con ajuste inteligente de texto y tamaño de fuente para asegurar que tu creación siempre se vea profesional.'
    },
    section2: {
      title: 'Características Clave',
      para: 'Nuestro generador de imágenes Brat ofrece varias características profesionales para hacer tu proceso creativo simple y eficiente:',
      features: [
        'Recreación Perfecta del Estilo Oficial: Optimizado basado en los parámetros oficiales de bratgenerator.com, incluyendo valor de color preciso (#8ACE00), fuente (Arial Narrow, 500 weight) y efecto de desenfoque gaussiano de 2px',
        'Procesamiento Inteligente de Texto: El ajuste automático de líneas asegura que el texto largo no desborde el lienzo, con tamaño de fuente inteligente que prioriza el ajuste sobre la reducción para máxima visualización de texto',
        'Vista Previa en Tiempo Real: Ve los resultados inmediatamente mientras escribes, con soporte para texto multilínea y contenido personalizado',
        'Descarga con Un Clic: Genera imágenes PNG de alta calidad de 1000x1000 píxeles adecuadas para redes sociales, páginas personales y más',
        'Galería Comunitaria: Sube tus creaciones a la Galería, comparte inspiración con otros creadores y descubre más imágenes increíbles estilo Brat'
      ]
    },
    section3: {
      title: '¿Por Qué Elegir Brat Generator?',
      para1: 'Aunque hay muchas herramientas de generación de imágenes disponibles, Brat Generator se enfoca en ofrecer la mejor experiencia estilo Brat. Hemos estudiado cada detalle de la portada oficial del álbum para asegurar que las imágenes generadas capturen perfectamente la esencia de la estética Brat.',
      para2: 'Nuestra herramienta es completamente gratuita, no requiere registro, no tiene marcas de agua y soporta múltiples idiomas. Ya sea que estés creando avatares de Twitter, historias de Instagram o emotes de Discord, Brat Generator te tiene cubierto.'
    },
    section4: {
      title: 'El Fenómeno Cultural Brat',
      para1: 'El álbum Brat de Charlie XCX no es solo un álbum musical; es un símbolo cultural. Este esquema de color verde fluorescente audaz y tipografía minimalista representa una actitud de autoexpresión sin restricciones. Desde TikTok hasta Twitter, desde Instagram hasta Discord, las imágenes estilo Brat se han convertido en una parte integral de la cultura de internet.',
      para2: 'Con Brat Generator, puedes unirte fácilmente a esta comunidad creativa global. Ya sea que estés expresando tus pensamientos, compartiendo tus sentimientos o simplemente disfrutando del proceso creativo, Brat Generator es tu mejor opción.'
    },
    section5: {
      title: 'Cómo Usar',
      para: 'Usar Brat Generator es increíblemente simple, solo tres pasos:',
      steps: [
        'Ingresa el texto deseado en el cuadro de entrada. Soporta texto de cualquier longitud, y nuestro algoritmo inteligente maneja automáticamente los saltos de línea y ajustes de tamaño de fuente.',
        'Previsualiza la imagen generada en tiempo real. Puedes ver cómo se ve tu texto contra el icónico fondo verde Brat antes de descargar.',
        'Haz clic en "Descargar Imagen" para guardar localmente, o haz clic en "Subir a Galería" para compartir con la comunidad y dejar que más personas vean tu creación.'
      ]
    }
  },
  id: {
    section1: {
      title: 'Apa itu Brat Generator?',
      para1: 'Brat Generator adalah alat online gratis yang dirancang untuk membuat gambar dengan gaya sampul album "Brat" milik Charlie XCX. Brat adalah salah satu album paling berpengaruh di tahun 2024, dan latar belakang hijau cerahnya yang ikonik (#8ACE00) dikombinasikan dengan tipografi Arial Narrow yang bersih telah memicu fenomena budaya besar-besaran di media sosial.',
      para2: 'Baik Anda penggemar Charli XCX atau ingin membuat grafik media sosial yang unik, Brat Generator membuatnya mudah. Cukup masukkan teks Anda, dan alat kami secara otomatis menghasilkan gambar Brat dengan gaya sempurna dengan penyesuaian teks cerdas dan ukuran font yang memastikan kreasi Anda selalu terlihat profesional.'
    },
    section2: {
      title: 'Fitur Utama',
      para: 'Generator gambar Brat kami menawarkan beberapa fitur profesional untuk membuat proses kreatif Anda sederhana dan efisien:',
      features: [
        'Rekreasi Gaya Resmi yang Sempurna: Dioptimalkan berdasarkan parameter resmi bratgenerator.com, termasuk nilai warna yang tepat (#8ACE00), font (Arial Narrow, 500 weight), dan efek blur Gaussian 2px',
        'Pemrosesan Teks Cerdas: Penyesuaian baris otomatis memastikan teks panjang tidak meluap dari kanvas, dengan ukuran font cerdas yang memprioritaskan penyesuaian daripada pengecilan untuk tampilan teks maksimal',
        'Pratinjau Waktu Nyata: Lihat hasil segera saat Anda mengetik, dengan dukungan untuk teks multi-baris dan konten kustom',
        'Unduh Satu Klik: Hasilkan gambar PNG berkualitas tinggi 1000x1000 piksel yang cocok untuk media sosial, halaman pribadi, dan lainnya',
        'Galeri Komunitas: Unggah kreasi Anda ke Galeri, bagikan inspirasi dengan kreator lain, dan temukan lebih banyak gambar gaya Brat yang menakjubkan'
      ]
    },
    section3: {
      title: 'Mengapa Memilih Brat Generator?',
      para1: 'Meskipun ada banyak alat pembuatan gambar yang tersedia, Brat Generator berfokus pada memberikan pengalaman gaya Brat terbaik. Kami telah mempelajari setiap detail sampul album resmi untuk memastikan gambar yang dihasilkan menangkap sempurna esensi estetika Brat.',
      para2: 'Alat kami sepenuhnya gratis, tidak memerlukan pendaftaran, tidak ada watermark, dan mendukung beberapa bahasa. Baik Anda membuat avatar Twitter, cerita Instagram, atau emote Discord, Brat Generator siap membantu Anda.'
    },
    section4: {
      title: 'Fenomena Budaya Brat',
      para1: 'Album Brat Charlie XCX bukan hanya album musik; ini adalah simbol budaya. Skema warna hijau fluorescent yang berani dan tipografi minimalis ini mewakili sikap ekspresi diri yang tidak terkekang. Dari TikTok hingga Twitter, dari Instagram hingga Discord, gambar gaya Brat telah menjadi bagian integral dari budaya internet.',
      para2: 'Dengan Brat Generator, Anda dapat dengan mudah bergabung dengan komunitas kreatif global ini. Baik Anda mengekspresikan pikiran Anda, berbagi perasaan Anda, atau sekadar menikmati proses kreatif, Brat Generator adalah pilihan terbaik Anda.'
    },
    section5: {
      title: 'Cara Menggunakan',
      para: 'Menggunakan Brat Generator sangat sederhana, hanya tiga langkah:',
      steps: [
        'Masukkan teks yang diinginkan di kotak input. Mendukung teks dengan panjang berapa pun, dan algoritma cerdas kami secara otomatis menangani jeda baris dan penyesuaian ukuran font.',
        'Pratinjau gambar yang dihasilkan secara real-time. Anda dapat melihat bagaimana teks Anda terlihat di latar belakang hijau Brat yang ikonik sebelum mengunduh.',
        'Klik "Unduh Gambar" untuk menyimpan secara lokal, atau klik "Unggah ke Galeri" untuk berbagi dengan komunitas dan membiarkan lebih banyak orang melihat kreasi Anda.'
      ]
    }
  },
  ja: {
    section1: {
      title: 'Brat Generatorとは？',
      para1: 'Brat Generatorは、Charlie XCXの「Brat」アルバムカバースタイルの画像を作成するための無料オンラインツールです。Bratは2024年最も影響力のあるアルバムの一つであり、象徴的な明るい緑色の背景（#8ACE00）とクリーンなArial Narrowタイポグラフィーの組み合わせは、ソーシャルメディア全体で巨大な文化現象を引き起こしました。',
      para2: 'Charli XCXのファンでも、ユニークなソーシャルメディアグラフィックを作成したい場合でも、Brat Generatorが簡単にします。テキストを入力するだけで、ツールは自動的に完璧にスタイリングされたBrat画像を生成し、スマートなテキスト折り返しとインテリジェントなフォントサイズ調整により、作品が常にプロフェッショナルに見えることを保証します。'
    },
    section2: {
      title: '主な機能',
      para: 'Brat画像ジェネレーターは、創造プロセスをシンプルかつ効率的にするいくつかのプロフェッショナル機能を提供します：',
      features: [
        '完璧な公式スタイルの再現：公式bratgenerator.comパラメータに基づいて最適化されており、正確な色値（#8ACE00）、フォント（Arial Narrow、500 weight）、2pxガウスぼかし効果を含みます',
        'スマートテキスト処理：自動行折り返しにより、長いテキストがキャンバスをオーバーフローしないことを保証し、最大のテキスト表示のために縮小よりも折り返しを優先するインテリジェントなフォントサイジング',
        'リアルタイムプレビュー：入力時に即座に結果を確認でき、複数行テキストとカスタムコンテンツをサポート',
        'ワンクリックダウンロード：ソーシャルメディア、個人ページなどに適した高品質1000x1000ピクセルのPNG画像を生成',
        'コミュニティギャラリー：作品をギャラリーにアップロードし、他のクリエイターとインスピレーションを共有し、さらに素晴らしいBratスタイルの画像を発見'
      ]
    },
    section3: {
      title: 'なぜBrat Generatorを選ぶのか？',
      para1: '多くの画像生成ツールが利用可能ですが、Brat Generatorは最高のBratスタイル体験を提供することに焦点を当てています。公式アルバムカバーのすべての詳細を研究し、生成される画像がBrat美学の本質を完璧に捉えることを保証しています。',
      para2: '私たちのツールは完全に無料で、登録不要、ウォーターマークなし、複数の言語をサポートしています。Twitterアバター、Instagramストーリー、Discordエモートのいずれを作成する場合でも、Brat Generatorがカバーします。'
    },
    section4: {
      title: 'Brat文化現象',
      para1: 'Charlie XCXのBratアルバムは単なる音楽アルバムではありません。それは文化的なシンボルです。この大胆な蛍光緑の配色とミニマリストのタイポグラフィーは、制約のない自己表現の態度を表しています。TikTokからTwitter、InstagramからDiscordまで、Bratスタイルの画像はインターネット文化の不可欠な部分となっています。',
      para2: 'Brat Generatorを使用すると、このグローバルなクリエイティブコミュニティに簡単に参加できます。思考を表現する、感情を共有する、または単に創造プロセスを楽しむ場合でも、Brat Generatorは最良の選択です。'
    },
    section5: {
      title: '使い方',
      para: 'Brat Generatorの使用は非常にシンプルで、わずか3ステップ：',
      steps: [
        '入力ボックスに希望のテキストを入力します。任意の長さのテキストをサポートし、インテリジェントアルゴリズムが自動的に改行とフォントサイズ調整を処理します。',
        '生成された画像をリアルタイムでプレビューします。ダウンロード前に、象徴的なBrat緑背景に対してテキストがどのように見えるかを確認できます。',
        '「画像をダウンロード」をクリックしてローカルに保存するか、「ギャラリーにアップロード」をクリックしてコミュニティと共有し、より多くの人にあなたの作品を見せましょう。'
      ]
    }
  }
}

export default function SEOContent({ lang }: SEOContentProps) {
  // 获取当前语言的翻译，默认使用英文
  const t = translations[lang] || translations['en']

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      paddingTop: '64px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(32px, 5vw, 48px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        {/* Section 1: 什么是 Brat Generator */}
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: '#1d1d1f' }}>
          {t.section1.title}
        </h2>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section1.para1}
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section1.para2}
        </p>

        {/* Section 2: 核心功能特点 */}
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

        {/* Section 3: 为什么选择 Brat Generator */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section3.title}
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section3.para1}
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section3.para2}
        </p>

        {/* Section 4: Brat 文化现象 */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section4.title}
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section4.para1}
        </p>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '16px' }}>
          {t.section4.para2}
        </p>

        {/* Section 5: 如何使用 */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section5.title}
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '12px' }}>
          {t.section5.para}
        </p>
        <ol style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginLeft: '24px', marginBottom: '16px' }}>
          {t.section5.steps.map((step, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
