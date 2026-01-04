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
  
  // 内边距
  padding: 80
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
  
  // 3. 处理用户输入的换行，并准备进行自动换行
  const userLines = text.split('\n').filter(line => line.trim())
  
  // 先用初始字体大小测量文本（用于确定是否需要自动换行）
  let fontSize = canvas.height / 3  // 初始字体大小
  ctx.font = `${BRAT_CONFIG.fontWeight} ${fontSize}px ${BRAT_CONFIG.fontFamily}`
  
  // 计算可用宽度（减去左右 padding）
  const maxWidth = canvas.width - (BRAT_CONFIG.padding * 2)
  
  // 对每一行进行自动换行处理
  let allLines: string[] = []
  for (const line of userLines) {
    const wrappedLines = wrapText(ctx, line, maxWidth)
    allLines = allLines.concat(wrappedLines)
  }
  
  // 如果没有文本，至少显示一行
  if (allLines.length === 0) {
    allLines = ['']
  }
  
  const lineCount = allLines.length
  
  // 4. 根据最终行数自适应字体大小
  // - 当行数为1时，字体高度约为画布高度的 1/3
  // - 多行时，根据行数递减
  if (lineCount === 1) {
    fontSize = canvas.height / 3  // 约 333px
  } else if (lineCount === 2) {
    fontSize = canvas.height / 4  // 约 250px
  } else if (lineCount === 3) {
    fontSize = canvas.height / 5  // 约 200px
  } else if (lineCount === 4) {
    fontSize = canvas.height / 6.5  // 约 153px
  } else {
    // 超过4行时，进一步缩小字体
    fontSize = canvas.height / (lineCount * 1.5)
  }
  
  // 重新设置字体（使用最终计算的字体大小）
  ctx.font = `${BRAT_CONFIG.fontWeight} ${fontSize}px ${BRAT_CONFIG.fontFamily}`
  
  // 使用新字体大小重新进行自动换行
  allLines = []
  for (const line of userLines) {
    const wrappedLines = wrapText(ctx, line, maxWidth)
    allLines = allLines.concat(wrappedLines)
  }
  
  // 5. 应用高斯模糊效果（官方使用 2px 模糊）
  ctx.filter = `blur(${BRAT_CONFIG.textBlur}px)`

  // 6. 绘制文本（支持多行，水平和垂直居中）
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  
  // line-height 与 font-size 相同（与官方一致）
  const lineHeight = fontSize * 1.0
  const totalHeight = allLines.length * lineHeight
  
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

