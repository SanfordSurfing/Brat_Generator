/**
 * 图片生成工具
 * 负责在 Canvas 上绘制 Brat 风格的图片
 */

// Brat 图片的配置（基于官方 bratgenerator.com 的设置）
const BRAT_CONFIG = {
  // 背景颜色（Brat 专辑的标志性绿色）
  backgroundColor: '#8ACE00',
  
  // 文字颜色（黑色）
  textColor: '#000000',
  
  // 字体配置（官方使用 Arial Narrow）
  fontFamily: 'Arial Narrow, Arial, sans-serif',
  
  // 字体粗细（官方使用 font-weight: 500，不是 bold）
  fontWeight: '500',
  
  // 图片尺寸（1:1 正方形比例）
  width: 1000,
  height: 1000,
  
  // 字体模糊效果（官方使用 2px 模糊）
  textBlur: 2,
  
  // 内边距（尽可能窄，营造紧凑感）
  padding: 20
}

/**
 * 在单词之间随机插入额外的空格，营造"疯狂"的视觉效果
 * @param text - 要处理的文本
 * @returns 添加了随机空格的文本
 */
function addRandomSpaces(text: string): string {
  const words = text.split(' ')
  const result: string[] = []
  
  for (let i = 0; i < words.length; i++) {
    result.push(words[i])
    
    // 在单词后面随机添加 0-3 个额外空格（除了最后一个单词）
    if (i < words.length - 1) {
      const randomSpaces = Math.floor(Math.random() * 4) // 0-3 个额外空格
      result.push(' '.repeat(1 + randomSpaces)) // 至少1个空格 + 随机空格
    }
  }
  
  return result.join('')
}

/**
 * 将文本自动换行，防止溢出画布
 * @param ctx - Canvas 绘图上下文
 * @param text - 要处理的文本
 * @param maxWidth - 最大宽度
 * @returns 换行后的文本数组
 */
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word
    const metrics = ctx.measureText(testLine)
    const testWidth = metrics.width

    if (testWidth > maxWidth && currentLine) {
      // 当前行已满，保存当前行并开始新行
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = testLine
    }
  }

  // 添加最后一行
  if (currentLine) {
    lines.push(currentLine)
  }

  return lines
}

/**
 * 生成 Brat 风格图片
 * @param text - 用户输入的文本
 * @param canvas - Canvas 元素
 * @returns 生成的图片 URL（可用于预览和下载）
 */
export function generateBratImage(text: string, canvas: HTMLCanvasElement): string {
  // 设置 Canvas 尺寸
  canvas.width = BRAT_CONFIG.width
  canvas.height = BRAT_CONFIG.height
  
  // 获取 2D 绘图上下文
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('无法获取 Canvas 上下文')
  }

  // 1. 绘制背景色（Brat 绿色）
  ctx.fillStyle = BRAT_CONFIG.backgroundColor
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // 2. 设置文字样式
  ctx.fillStyle = BRAT_CONFIG.textColor
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  // 3. 处理用户输入的换行
  const userLines = text.split('\n').filter(line => line.trim())
  
  // 为每一行添加随机空格，营造"疯狂"的效果
  const crazyLines = userLines.map(line => addRandomSpaces(line))
  
  // 4. 智能计算字体大小：优先换行，只有溢出画布时才缩小字号
  // 从一个较大的字体开始尝试
  let fontSize = canvas.height / 3  // 初始字体大小（约 333px）
  const minFontSize = 40  // 最小字体限制
  const maxWidth = canvas.width - (BRAT_CONFIG.padding * 2)  // 可用宽度
  const maxHeight = canvas.height - (BRAT_CONFIG.padding * 2)  // 可用高度
  let allLines: string[] = []
  let totalHeight = 0
  let lineHeight = 0
  
  // 循环：尝试当前字号，如果溢出就缩小字号重试
  while (fontSize >= minFontSize) {
    // 设置当前字号
    ctx.font = `${BRAT_CONFIG.fontWeight} ${fontSize}px ${BRAT_CONFIG.fontFamily}`
    
    // 进行自动换行处理
    allLines = []
    for (const line of crazyLines) {
      const wrappedLines = wrapText(ctx, line, maxWidth)
      allLines = allLines.concat(wrappedLines)
    }
    
    // 如果没有文本，至少显示一行
    if (allLines.length === 0) {
      allLines = ['']
      break
    }
    
    // 计算总高度（line-height = font-size）
    lineHeight = fontSize * 1.0
    totalHeight = allLines.length * lineHeight
    
    // 如果高度合适，就使用这个字号
    if (totalHeight <= maxHeight) {
      break
    }
    
    // 高度溢出，缩小字号（每次减少 5%）
    fontSize = fontSize * 0.95
  }
  
  // 确保字号不低于最小值
  fontSize = Math.max(fontSize, minFontSize)
  
  // 最终设置字体
  ctx.font = `${BRAT_CONFIG.fontWeight} ${fontSize}px ${BRAT_CONFIG.fontFamily}`
  
  // 5. 应用高斯模糊效果（官方使用 2px 模糊）
  ctx.filter = `blur(${BRAT_CONFIG.textBlur}px)`

  // 6. 绘制文本（支持多行，水平和垂直居中）
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  
  // line-height 与 font-size 相同（与官方一致）
  lineHeight = fontSize * 1.0
  totalHeight = allLines.length * lineHeight
  
  // 计算起始 Y 坐标（垂直居中）
  const startY = centerY - (totalHeight / 2) + (lineHeight / 2)

  allLines.forEach((line, index) => {
    const y = startY + index * lineHeight
    
    // 转换为小写（Brat 风格）
    const lowerCaseLine = line.toLowerCase()
    
    // 绘制文字（水平居中由 textAlign: 'center' 实现）
    ctx.fillText(lowerCaseLine, centerX, y)
  })

  // 7. 将 Canvas 转换为图片 URL
  return canvas.toDataURL('image/png', 1.0)
}

