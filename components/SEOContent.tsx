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
  section6: { title: string; para: string; useCases: Array<{title: string; desc: string}> }
}> = {
  zh: {
    section1: {
      title: '什么是 Brat Text Generator？',
      para1: 'Brat Text Generator（Brat 文字生成器）是一款免费的在线 brat font generator 工具，专为创作 Charli XCX "Brat" 专辑风格的图片而设计。作为最受欢迎的 brat meme generator，我们的 brat maker 完美还原了标志性的 Brat 绿色（#8ACE00）和 Arial Narrow 字体风格。无论你想制作 brat lyrics、brat meme 还是 text meme，这个 brat album generator 都能满足你的需求。',
      para2: '作为一款完全免费的 brat generator free 工具，我们的 brat lyric generator 支持快速生成 Charli XCX 风格的文字图片。只需在 brat text 输入框中键入内容，我们的 charli xcx text generator 就会自动生成专业的 brat album cover，支持智能换行和字号调整。无论是 brat word generator、brat cover generator 还是 brat image generator，一切功能都为你准备就绪。'
    },
    section2: {
      title: 'Brat Meme Generator 核心功能',
      para: '我们的 brat text maker 和 meme text generator 提供专业的 meme font generator 功能，让你的 brat typing 创作过程更加简单：',
      features: [
        'Brat Font Generator：完美还原 Charli XCX brat font，使用官方的 Arial Narrow 字体和 brat album font 参数，确保 what font is brat 的疑问得到完美解答',
        'Brat Lyric Generator：专业的 lyrics brat 和 brat lyrics generator 功能，轻松创作 brat subtitles 和歌词风格图片，完美适配 charli xcx lyrics website 的需求',
        'Meme Text Generator：强大的 meme text 和 text meme 生成能力，支持 meme generator fonts 和 meme creator app 的所有核心功能',
        'Brat Template：提供 brat template 和 brat cover 模板，一键生成 brat album cover generator 风格的 brat logo 图片',
        'Brat Color：使用官方 brat color #8ACE00，确保 brat wallpaper、brat letter 和所有 brat memes 都保持统一风格'
      ]
    },
    section3: {
      title: '为什么选择这个 Brat Generator？',
      para1: '作为领先的 charli xcx brat generator 和 brat simulator，我们提供最完整的 brat generation 体验。无论你搜索 brat generator com、free brat generator、brats generator 还是 brat generater，我们的 brat generator charli xcx 工具都能提供最佳的 brat typer 功能。',
      para2: '这款 charli xcx generator 和 charli xcx font 工具完全免费，无需注册。作为专业的 brat charli xcx font 和 charli xcx text 生成器，我们的 brat text font 和 brat text maker 支持制作 brat shirt 设计、brat website 素材和 charli xcx typing 内容。无论你需要 charli xcx lyric maker、brat type 工具还是 charli xcx meme 生成器，这里都是你的最佳选择。'
    },
    section4: {
      title: 'Brat Meme 与流行文化',
      para1: 'Charli XCX 的 Brat 专辑开创了全新的 brat generation 文化潮流。从 brat memes 到 brat shirt，从 brat wallpaper 到 brat logo，Brat 美学已经渗透到互联网文化的每个角落。这种标志性的荧光绿 brat color 和简洁的 brat album font 代表了一种大胆、自信的表达方式。',
      para2: '使用我们的 brat meme generator 和 meme text generator，你可以轻松创作属于自己的 text meme 和 brat memes。无论是制作 brat lyrics、brat subtitles 还是 charli xcx meme，我们的 meme font generator 和 brat text generator 都能帮你实现创意，让你的 brat typing 作品在社交媒体上脱颖而出。'
    },
    section5: {
      title: '如何使用 Brat Text Generator',
      para: '使用这款 brat font generator 和 meme creator app 非常简单，只需三步即可完成 brat album generator 创作：',
      steps: [
        '在 brat text 输入框中输入文字：我们的 brat word generator 支持任意长度的文本，brat lyric generator 会自动处理换行',
        '实时预览 brat cover：在 brat simulator 中查看你的 brat template 效果，确保 brat color 和 brat letter 排版完美',
        '下载或分享：一键保存 brat image generator 生成的高清图片，或上传到 Gallery 社区，让更多人欣赏你的 brat maker 作品'
      ]
    },
    section6: {
      title: 'Brat Text Generator 创意应用场景',
      para: '我们的 brat meme generator 和 brat text maker 可以应用在多种创意场景，从 brat shirt 设计到 brat wallpaper 制作，这款 meme text generator 和 charli xcx font 工具能满足你的所有需求：',
      useCases: [
        {
          title: 'Brat Meme 与 Text Meme 创作',
          desc: '使用 brat meme generator 和 meme font generator 快速制作爆款 brat memes。我们的 meme text generator 和 meme creator app 功能让你轻松创作 text meme，在 Twitter、Instagram、TikTok 上分享你的 charli xcx meme 和 brat lyric 内容。'
        },
        {
          title: 'Brat Shirt 与服装设计',
          desc: '用 brat text generator 创作独特的 brat shirt 图案。将 brat font generator 生成的 brat logo 和 brat template 图片打印到 T恤、卫衣上，制作专属的 Charli XCX brat font 风格服装。这款 brat maker 是 DIY brat shirt 的完美工具。'
        },
        {
          title: 'Brat Wallpaper 壁纸设计',
          desc: '使用 brat image generator 制作个性化的 brat wallpaper。我们的 brat cover generator 可以生成高清的 brat color 背景图，完美适配手机和电脑壁纸。让 brat album cover 风格的 brat letter 装点你的设备屏幕。'
        },
        {
          title: 'Brat Lyrics 与音乐内容',
          desc: '作为专业的 brat lyrics generator，我们的工具是 charli xcx lyrics website 的理想补充。使用 brat lyric generator 制作 lyrics brat 风格的歌词海报、brat subtitles 字幕图，或为 charli xcx lyric maker 内容增添视觉冲击力。'
        },
        {
          title: '社交媒体素材',
          desc: '用 charli xcx text generator 和 brat typing 工具制作 Instagram 故事、Twitter 头像、Discord 表情包。这款 charli xcx generator 和 brat text font 工具可以生成适配各种社交平台的 brat website 素材。'
        },
        {
          title: 'Brat Template 模板与品牌设计',
          desc: '使用 brat template 和 brat album generator 为品牌设计创作灵感。我们的 free brat generator 提供的 brat generater 功能适合制作海报、传单、品牌素材，让 brat generation 美学融入你的设计项目。'
        }
      ]
    }
  },
  en: {
    section1: {
      title: 'What is Brat Text Generator?',
      para1: 'Brat Text Generator is a free online brat font generator designed to create Charli XCX "Brat" album-style images. As the most popular brat meme generator, our brat maker perfectly recreates the iconic Brat green (#8ACE00) and Arial Narrow font style. Whether you want to create brat lyrics, brat meme, or text meme, this brat album generator has you covered.',
      para2: 'As a completely free brat generator free tool, our brat lyric generator supports quick generation of Charli XCX-style text images. Simply type in the brat text input box, and our charli xcx text generator will automatically generate professional brat album cover with smart wrapping and font sizing. Whether it\'s a brat word generator, brat cover generator, or brat image generator, all features are ready for you.'
    },
    section2: {
      title: 'Brat Meme Generator Core Features',
      para: 'Our brat text maker and meme text generator provide professional meme font generator capabilities to make your brat typing creation process easier:',
      features: [
        'Brat Font Generator: Perfectly recreates charli xcx brat font using official Arial Narrow font and brat album font parameters, answering what font is brat perfectly',
        'Brat Lyric Generator: Professional lyrics brat and brat lyrics generator features for creating brat subtitles and lyric-style images, perfect for charli xcx lyrics website needs',
        'Meme Text Generator: Powerful meme text and text meme generation with all meme generator fonts and meme creator app core features',
        'Brat Template: Provides brat template and brat cover templates for one-click brat album cover generator style brat logo images',
        'Brat Color: Uses official brat color #8ACE00 to ensure brat wallpaper, brat letter, and all brat memes maintain consistent style'
      ]
    },
    section3: {
      title: 'Why Choose This Brat Generator?',
      para1: 'As the leading charli xcx brat generator and brat simulator, we provide the most complete brat generation experience. Whether you search for brat generator com, free brat generator, brats generator, or brat generater, our brat generator charli xcx tool offers the best brat typer functionality.',
      para2: 'This charli xcx generator and charli xcx font tool is completely free with no registration required. As a professional brat charli xcx font and charli xcx text generator, our brat text font and brat text maker support creating brat shirt designs, brat website materials, and charli xcx typing content. Whether you need a charli xcx lyric maker, brat type tool, or charli xcx meme generator, this is your best choice.'
    },
    section4: {
      title: 'Brat Meme & Pop Culture',
      para1: 'Charli XCX\'s Brat album pioneered a new brat generation cultural trend. From brat memes to brat shirt, from brat wallpaper to brat logo, Brat aesthetics have permeated every corner of internet culture. This iconic fluorescent green brat color and clean brat album font represent a bold, confident way of expression.',
      para2: 'Using our brat meme generator and meme text generator, you can easily create your own text meme and brat memes. Whether making brat lyrics, brat subtitles, or charli xcx meme, our meme font generator and brat text generator help you realize creativity and make your brat typing work stand out on social media.'
    },
    section5: {
      title: 'How to Use Brat Text Generator',
      para: 'Using this brat font generator and meme creator app is simple - just three steps to complete your brat album generator creation:',
      steps: [
        'Enter text in the brat text input box: Our brat word generator supports text of any length, and brat lyric generator automatically handles line breaks',
        'Preview your brat cover in real-time: Check your brat template effects in the brat simulator, ensuring perfect brat color and brat letter layout',
        'Download or share: Save high-quality images from brat image generator with one click, or upload to Gallery community to let more people appreciate your brat maker work'
      ]
    },
    section6: {
      title: 'Brat Text Generator Creative Use Cases',
      para: 'Our brat meme generator and brat text maker can be applied to various creative scenarios. From brat shirt design to brat wallpaper creation, this meme text generator and charli xcx font tool meets all your needs:',
      useCases: [
        {
          title: 'Brat Meme & Text Meme Creation',
          desc: 'Use brat meme generator and meme font generator to quickly create viral brat memes. Our meme text generator and meme creator app features let you easily craft text meme to share your charli xcx meme and brat lyric content on Twitter, Instagram, and TikTok.'
        },
        {
          title: 'Brat Shirt & Apparel Design',
          desc: 'Create unique brat shirt designs with brat text generator. Print brat logo and brat template images generated by brat font generator onto T-shirts and hoodies to make exclusive Charli XCX brat font style apparel. This brat maker is the perfect tool for DIY brat shirt.'
        },
        {
          title: 'Brat Wallpaper Design',
          desc: 'Use brat image generator to create personalized brat wallpaper. Our brat cover generator can produce high-quality brat color backgrounds perfect for phone and computer wallpapers. Let brat album cover style brat letter decorate your device screens.'
        },
        {
          title: 'Brat Lyrics & Music Content',
          desc: 'As a professional brat lyrics generator, our tool is the ideal complement to charli xcx lyrics website. Use brat lyric generator to create lyrics brat style lyric posters, brat subtitles caption images, or add visual impact to charli xcx lyric maker content.'
        },
        {
          title: 'Social Media Materials',
          desc: 'Use charli xcx text generator and brat typing tools to create Instagram stories, Twitter avatars, and Discord emotes. This charli xcx generator and brat text font tool generates brat website materials suitable for various social platforms.'
        },
        {
          title: 'Brat Template & Brand Design',
          desc: 'Use brat template and brat album generator for brand design inspiration. Our free brat generator provides brat generater features suitable for creating posters, flyers, and brand materials, integrating brat generation aesthetics into your design projects.'
        }
      ]
    }
  },
  es: {
    section1: {
      title: '¿Qué es Brat Text Generator?',
      para1: 'Brat Text Generator es un brat font generator gratuito en línea diseñado para crear imágenes al estilo del álbum "Brat" de Charli XCX. Como el brat meme generator más popular, nuestro brat maker recrea perfectamente el icónico verde Brat (#8ACE00) y el estilo de fuente Arial Narrow. Ya sea que quieras crear brat lyrics, brat meme o text meme, este brat album generator te tiene cubierto.',
      para2: 'Como herramienta completamente gratuita brat generator free, nuestro brat lyric generator permite generar rápidamente imágenes de texto al estilo Charli XCX. Simplemente escribe en el cuadro de brat text, y nuestro charli xcx text generator generará automáticamente brat album cover profesionales con ajuste inteligente. Ya sea brat word generator, brat cover generator o brat image generator, todas las funciones están listas.'
    },
    section2: {
      title: 'Características del Brat Meme Generator',
      para: 'Nuestro brat text maker y meme text generator ofrecen capacidades profesionales de meme font generator para facilitar tu proceso de creación brat typing:',
      features: [
        'Brat Font Generator: Recrea perfectamente charli xcx brat font usando la fuente oficial Arial Narrow y parámetros brat album font, respondiendo perfectamente qué es what font is brat',
        'Brat Lyric Generator: Funciones profesionales de lyrics brat y brat lyrics generator para crear brat subtitles e imágenes estilo letra, perfectas para charli xcx lyrics website',
        'Meme Text Generator: Potente generación de meme text y text meme con todas las funciones de meme generator fonts y meme creator app',
        'Brat Template: Proporciona brat template y plantillas brat cover para generar imágenes brat logo estilo brat album cover generator con un clic',
        'Brat Color: Usa el brat color oficial #8ACE00 para asegurar que brat wallpaper, brat letter y todos los brat memes mantengan estilo consistente'
      ]
    },
    section3: {
      title: '¿Por Qué Elegir Este Brat Generator?',
      para1: 'Como el charli xcx brat generator y brat simulator líder, proporcionamos la experiencia brat generation más completa. Ya sea que busques brat generator com, free brat generator, brats generator o brat generater, nuestra herramienta brat generator charli xcx ofrece la mejor funcionalidad brat typer.',
      para2: 'Esta herramienta charli xcx generator y charli xcx font es completamente gratuita sin registro. Como generador profesional de brat charli xcx font y charli xcx text, nuestro brat text font y brat text maker permiten crear diseños brat shirt, materiales brat website y contenido charli xcx typing. Ya necesites charli xcx lyric maker, herramienta brat type o generador charli xcx meme, esta es tu mejor opción.'
    },
    section4: {
      title: 'Brat Meme y Cultura Pop',
      para1: 'El álbum Brat de Charli XCX pionero en la nueva tendencia cultural brat generation. Desde brat memes hasta brat shirt, desde brat wallpaper hasta brat logo, la estética Brat ha permeado cada rincón de la cultura de internet. Este icónico brat color verde fluorescente y brat album font limpio representan una forma audaz y confiada de expresión.',
      para2: 'Usando nuestro brat meme generator y meme text generator, puedes crear fácilmente tu propio text meme y brat memes. Ya sea haciendo brat lyrics, brat subtitles o charli xcx meme, nuestro meme font generator y brat text generator te ayudan a realizar creatividad y hacer que tu trabajo brat typing destaque en redes sociales.'
    },
    section5: {
      title: 'Cómo Usar Brat Text Generator',
      para: 'Usar este brat font generator y meme creator app es simple: solo tres pasos para completar tu creación brat album generator:',
      steps: [
        'Ingresa texto en el cuadro brat text: Nuestro brat word generator soporta texto de cualquier longitud, y brat lyric generator maneja automáticamente saltos de línea',
        'Previsualiza tu brat cover en tiempo real: Verifica efectos brat template en el brat simulator, asegurando perfecto brat color y diseño brat letter',
        'Descarga o comparte: Guarda imágenes de alta calidad del brat image generator con un clic, o sube a la comunidad Gallery para que más personas aprecien tu trabajo brat maker'
      ]
    },
    section6: {
      title: 'Casos de Uso Creativos de Brat Text Generator',
      para: 'Nuestro brat meme generator y brat text maker pueden aplicarse a varios escenarios creativos. Desde diseño brat shirt hasta creación brat wallpaper, este meme text generator y herramienta charli xcx font satisfacen todas tus necesidades:',
      useCases: [
        {
          title: 'Creación de Brat Meme y Text Meme',
          desc: 'Usa brat meme generator y meme font generator para crear rápidamente brat memes virales. Nuestras funciones meme text generator y meme creator app te permiten crear fácilmente text meme para compartir tu contenido charli xcx meme y brat lyric en Twitter, Instagram y TikTok.'
        },
        {
          title: 'Diseño de Brat Shirt y Ropa',
          desc: 'Crea diseños únicos brat shirt con brat text generator. Imprime imágenes brat logo y brat template generadas por brat font generator en camisetas y sudaderas para hacer ropa exclusiva estilo Charli XCX brat font. Este brat maker es la herramienta perfecta para DIY brat shirt.'
        },
        {
          title: 'Diseño de Brat Wallpaper',
          desc: 'Usa brat image generator para crear brat wallpaper personalizados. Nuestro brat cover generator puede producir fondos brat color de alta calidad perfectos para fondos de teléfono y computadora. Deja que el estilo brat album cover con brat letter decore las pantallas de tus dispositivos.'
        },
        {
          title: 'Brat Lyrics y Contenido Musical',
          desc: 'Como brat lyrics generator profesional, nuestra herramienta es el complemento ideal para charli xcx lyrics website. Usa brat lyric generator para crear pósters de letras estilo lyrics brat, imágenes brat subtitles, o añadir impacto visual al contenido charli xcx lyric maker.'
        },
        {
          title: 'Materiales para Redes Sociales',
          desc: 'Usa charli xcx text generator y herramientas brat typing para crear historias de Instagram, avatares de Twitter y emotes de Discord. Este charli xcx generator y herramienta brat text font generan materiales brat website adecuados para varias plataformas sociales.'
        },
        {
          title: 'Brat Template y Diseño de Marca',
          desc: 'Usa brat template y brat album generator para inspiración de diseño de marca. Nuestro free brat generator proporciona funciones brat generater adecuadas para crear pósters, folletos y materiales de marca, integrando estética brat generation en tus proyectos de diseño.'
        }
      ]
    }
  },
  id: {
    section1: {
      title: 'Apa itu Brat Text Generator?',
      para1: 'Brat Text Generator adalah brat font generator gratis online yang dirancang untuk membuat gambar bergaya album "Brat" Charli XCX. Sebagai brat meme generator paling populer, brat maker kami dengan sempurna menciptakan ulang hijau Brat ikonik (#8ACE00) dan gaya font Arial Narrow. Baik Anda ingin membuat brat lyrics, brat meme, atau text meme, brat album generator ini siap membantu.',
      para2: 'Sebagai alat brat generator free yang sepenuhnya gratis, brat lyric generator kami mendukung pembuatan cepat gambar teks bergaya Charli XCX. Cukup ketik di kotak brat text, dan charli xcx text generator kami akan otomatis menghasilkan brat album cover profesional dengan penyesuaian cerdas. Baik brat word generator, brat cover generator, atau brat image generator, semua fitur siap untuk Anda.'
    },
    section2: {
      title: 'Fitur Inti Brat Meme Generator',
      para: 'Brat text maker dan meme text generator kami menawarkan kemampuan meme font generator profesional untuk memudahkan proses kreasi brat typing Anda:',
      features: [
        'Brat Font Generator: Menciptakan ulang dengan sempurna charli xcx brat font menggunakan font Arial Narrow resmi dan parameter brat album font, menjawab dengan sempurna what font is brat',
        'Brat Lyric Generator: Fitur profesional lyrics brat dan brat lyrics generator untuk membuat brat subtitles dan gambar bergaya lirik, sempurna untuk kebutuhan charli xcx lyrics website',
        'Meme Text Generator: Generasi meme text dan text meme yang kuat dengan semua fitur inti meme generator fonts dan meme creator app',
        'Brat Template: Menyediakan brat template dan template brat cover untuk menghasilkan gambar brat logo bergaya brat album cover generator dengan satu klik',
        'Brat Color: Menggunakan brat color resmi #8ACE00 untuk memastikan brat wallpaper, brat letter, dan semua brat memes mempertahankan gaya konsisten'
      ]
    },
    section3: {
      title: 'Mengapa Memilih Brat Generator Ini?',
      para1: 'Sebagai charli xcx brat generator dan brat simulator terkemuka, kami menyediakan pengalaman brat generation paling lengkap. Baik Anda mencari brat generator com, free brat generator, brats generator, atau brat generater, alat brat generator charli xcx kami menawarkan fungsionalitas brat typer terbaik.',
      para2: 'Alat charli xcx generator dan charli xcx font ini sepenuhnya gratis tanpa registrasi. Sebagai generator profesional brat charli xcx font dan charli xcx text, brat text font dan brat text maker kami mendukung pembuatan desain brat shirt, materi brat website, dan konten charli xcx typing. Baik Anda memerlukan charli xcx lyric maker, alat brat type, atau generator charli xcx meme, ini adalah pilihan terbaik Anda.'
    },
    section4: {
      title: 'Brat Meme & Budaya Pop',
      para1: 'Album Brat Charli XCX merintis tren budaya brat generation baru. Dari brat memes hingga brat shirt, dari brat wallpaper hingga brat logo, estetika Brat telah merambah setiap sudut budaya internet. Brat color hijau fluorescent ikonik ini dan brat album font yang bersih mewakili cara ekspresi yang berani dan percaya diri.',
      para2: 'Menggunakan brat meme generator dan meme text generator kami, Anda dapat dengan mudah membuat text meme dan brat memes sendiri. Baik membuat brat lyrics, brat subtitles, atau charli xcx meme, meme font generator dan brat text generator kami membantu Anda mewujudkan kreativitas dan membuat karya brat typing Anda menonjol di media sosial.'
    },
    section5: {
      title: 'Cara Menggunakan Brat Text Generator',
      para: 'Menggunakan brat font generator dan meme creator app ini sederhana - hanya tiga langkah untuk menyelesaikan kreasi brat album generator Anda:',
      steps: [
        'Masukkan teks di kotak brat text: Brat word generator kami mendukung teks dengan panjang berapa pun, dan brat lyric generator otomatis menangani jeda baris',
        'Pratinjau brat cover Anda secara real-time: Periksa efek brat template di brat simulator, memastikan brat color dan tata letak brat letter sempurna',
        'Unduh atau bagikan: Simpan gambar berkualitas tinggi dari brat image generator dengan satu klik, atau unggah ke komunitas Gallery agar lebih banyak orang mengapresiasi karya brat maker Anda'
      ]
    },
    section6: {
      title: 'Kasus Penggunaan Kreatif Brat Text Generator',
      para: 'Brat meme generator dan brat text maker kami dapat diterapkan pada berbagai skenario kreatif. Dari desain brat shirt hingga pembuatan brat wallpaper, meme text generator dan alat charli xcx font ini memenuhi semua kebutuhan Anda:',
      useCases: [
        {
          title: 'Pembuatan Brat Meme & Text Meme',
          desc: 'Gunakan brat meme generator dan meme font generator untuk cepat membuat brat memes viral. Fitur meme text generator dan meme creator app kami memungkinkan Anda dengan mudah membuat text meme untuk berbagi konten charli xcx meme dan brat lyric di Twitter, Instagram, dan TikTok.'
        },
        {
          title: 'Desain Brat Shirt & Pakaian',
          desc: 'Buat desain brat shirt unik dengan brat text generator. Cetak gambar brat logo dan brat template yang dihasilkan brat font generator pada kaos dan hoodie untuk membuat pakaian eksklusif bergaya Charli XCX brat font. Brat maker ini adalah alat sempurna untuk DIY brat shirt.'
        },
        {
          title: 'Desain Brat Wallpaper',
          desc: 'Gunakan brat image generator untuk membuat brat wallpaper yang dipersonalisasi. Brat cover generator kami dapat menghasilkan latar belakang brat color berkualitas tinggi sempurna untuk wallpaper ponsel dan komputer. Biarkan gaya brat album cover dengan brat letter menghiasi layar perangkat Anda.'
        },
        {
          title: 'Brat Lyrics & Konten Musik',
          desc: 'Sebagai brat lyrics generator profesional, alat kami adalah pelengkap ideal untuk charli xcx lyrics website. Gunakan brat lyric generator untuk membuat poster lirik bergaya lyrics brat, gambar brat subtitles, atau menambah dampak visual pada konten charli xcx lyric maker.'
        },
        {
          title: 'Materi Media Sosial',
          desc: 'Gunakan charli xcx text generator dan alat brat typing untuk membuat cerita Instagram, avatar Twitter, dan emote Discord. Charli xcx generator dan alat brat text font ini menghasilkan materi brat website yang cocok untuk berbagai platform sosial.'
        },
        {
          title: 'Brat Template & Desain Merek',
          desc: 'Gunakan brat template dan brat album generator untuk inspirasi desain merek. Free brat generator kami menyediakan fitur brat generater yang cocok untuk membuat poster, brosur, dan materi merek, mengintegrasikan estetika brat generation ke dalam proyek desain Anda.'
        }
      ]
    }
  },
  ja: {
    section1: {
      title: 'Brat Text Generatorとは？',
      para1: 'Brat Text Generatorは、Charli XCX「Brat」アルバムスタイルの画像を作成する無料オンラインbrat font generatorです。最も人気のあるbrat meme generatorとして、当社のbrat makerは象徴的なBrat緑（#8ACE00）とArial Narrowフォントスタイルを完璧に再現します。brat lyrics、brat meme、text memeを作成したい場合、このbrat album generatorが対応します。',
      para2: '完全無料のbrat generator freeツールとして、当社のbrat lyric generatorはCharli XCXスタイルのテキスト画像の高速生成をサポートします。brat text入力ボックスに入力するだけで、charli xcx text generatorがスマート調整でプロフェッショナルなbrat album coverを自動生成します。brat word generator、brat cover generator、brat image generatorのいずれも、すべての機能が準備されています。'
    },
    section2: {
      title: 'Brat Meme Generatorコア機能',
      para: '当社のbrat text makerとmeme text generatorは、プロフェッショナルなmeme font generator機能を提供し、brat typing作成プロセスを簡単にします：',
      features: [
        'Brat Font Generator：公式Arial Narrowフォントとbrat album fontパラメータを使用してcharli xcx brat fontを完璧に再現、what font is bratの疑問に完璧に答えます',
        'Brat Lyric Generator：lyrics bratとbrat lyrics generatorのプロフェッショナル機能でbrat subtitlesと歌詞スタイル画像を作成、charli xcx lyrics websiteのニーズに最適',
        'Meme Text Generator：強力なmeme textとtext meme生成で、すべてのmeme generator fontsとmeme creator appコア機能を搭載',
        'Brat Template：brat templateとbrat coverテンプレートを提供、ワンクリックでbrat album cover generatorスタイルのbrat logo画像を生成',
        'Brat Color：公式brat color #8ACE00を使用、brat wallpaper、brat letter、すべてのbrat memesが一貫したスタイルを維持することを保証'
      ]
    },
    section3: {
      title: 'なぜこのBrat Generatorを選ぶのか？',
      para1: '主要なcharli xcx brat generatorとbrat simulatorとして、最も完全なbrat generation体験を提供します。brat generator com、free brat generator、brats generator、brat generaterを検索する場合、当社のbrat generator charli xcxツールは最高のbrat typer機能を提供します。',
      para2: 'このcharli xcx generatorとcharli xcx fontツールは完全無料で登録不要です。プロフェッショナルなbrat charli xcx fontとcharli xcx textジェネレーターとして、brat text fontとbrat text makerはbrat shirtデザイン、brat website素材、charli xcx typingコンテンツの作成をサポートします。charli xcx lyric maker、brat typeツール、charli xcx memeジェネレーターが必要な場合、これが最良の選択です。'
    },
    section4: {
      title: 'Brat Memeとポップカルチャー',
      para1: 'Charli XCXのBratアルバムは新しいbrat generation文化トレンドを開拓しました。brat memesからbrat shirt、brat wallpaperからbrat logoまで、Brat美学はインターネット文化のあらゆる隅に浸透しています。この象徴的な蛍光緑brat colorとクリーンなbrat album fontは、大胆で自信に満ちた表現方法を表しています。',
      para2: '当社のbrat meme generatorとmeme text generatorを使用すると、独自のtext memeとbrat memesを簡単に作成できます。brat lyrics、brat subtitles、charli xcx memeを作成する場合、meme font generatorとbrat text generatorが創造性を実現し、brat typing作品をソーシャルメディアで際立たせるのを助けます。'
    },
    section5: {
      title: 'Brat Text Generatorの使い方',
      para: 'このbrat font generatorとmeme creator appの使用は簡単 - わずか3ステップでbrat album generator作成を完了：',
      steps: [
        'brat text入力ボックスにテキストを入力：当社のbrat word generatorは任意の長さのテキストをサポートし、brat lyric generatorが自動的に改行を処理',
        'リアルタイムでbrat coverをプレビュー：brat simulatorでbrat template効果を確認し、完璧なbrat colorとbrat letterレイアウトを保証',
        'ダウンロードまたは共有：ワンクリックでbrat image generatorから高品質画像を保存、またはGalleryコミュニティにアップロードして、より多くの人にbrat maker作品を鑑賞してもらう'
      ]
    },
    section6: {
      title: 'Brat Text Generatorクリエイティブユースケース',
      para: '当社のbrat meme generatorとbrat text makerは、さまざまなクリエイティブシナリオに適用できます。brat shirtデザインからbrat wallpaper作成まで、このmeme text generatorとcharli xcx fontツールがすべてのニーズを満たします：',
      useCases: [
        {
          title: 'Brat Meme & Text Meme作成',
          desc: 'brat meme generatorとmeme font generatorを使用して、バイラルbrat memesを素早く作成。meme text generatorとmeme creator app機能により、text memeを簡単に作成し、Twitter、Instagram、TikTokでcharli xcx memeとbrat lyricコンテンツを共有できます。'
        },
        {
          title: 'Brat Shirt & アパレルデザイン',
          desc: 'brat text generatorでユニークなbrat shirtデザインを作成。brat font generatorが生成したbrat logoとbrat template画像をTシャツやパーカーにプリントして、専属のCharli XCX brat fontスタイルアパレルを制作。このbrat makerはDIY brat shirtの完璧なツールです。'
        },
        {
          title: 'Brat Wallpaperデザイン',
          desc: 'brat image generatorを使用してパーソナライズされたbrat wallpaperを作成。brat cover generatorは、スマートフォンとコンピューター壁紙に最適な高品質brat color背景を生成できます。brat album coverスタイルのbrat letterでデバイス画面を飾りましょう。'
        },
        {
          title: 'Brat Lyrics & 音楽コンテンツ',
          desc: 'プロフェッショナルなbrat lyrics generatorとして、当社のツールはcharli xcx lyrics websiteの理想的な補完です。brat lyric generatorを使用して、lyrics bratスタイルの歌詞ポスター、brat subtitles字幕画像を作成、またはcharli xcx lyric makerコンテンツに視覚的インパクトを追加します。'
        },
        {
          title: 'ソーシャルメディア素材',
          desc: 'charli xcx text generatorとbrat typingツールを使用して、Instagramストーリー、Twitterアバター、Discordエモートを作成。このcharli xcx generatorとbrat text fontツールは、さまざまなソーシャルプラットフォームに適したbrat website素材を生成します。'
        },
        {
          title: 'Brat Template & ブランドデザイン',
          desc: 'brat templateとbrat album generatorをブランドデザインのインスピレーションに使用。当社のfree brat generatorは、ポスター、チラシ、ブランド素材の作成に適したbrat generater機能を提供し、brat generation美学をデザインプロジェクトに統合します。'
        }
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

        {/* Section 6: 应用场景 */}
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#1d1d1f' }}>
          {t.section6.title}
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#1d1d1f', marginBottom: '24px' }}>
          {t.section6.para}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {t.section6.useCases.map((useCase, index) => (
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
