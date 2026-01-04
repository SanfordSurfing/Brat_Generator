'use client'

import { useState, useRef, useEffect } from 'react'
import { generateBratImage } from '@/utils/imageGenerator'

// 翻译类型定义
type BratGeneratorDict = {
  inputLabel: string
  inputPlaceholder: string
  inputHint: string
  previewTitle: string
  downloadButton: string
}

// Brat 图片生成器组件（支持多语言）
export default function BratGenerator({ dict }: { dict: BratGeneratorDict }) {
  // 状态管理：用户输入的文本
  const [text, setText] = useState('brat')
  
  // 状态管理：生成的图片 URL
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  
  // Canvas 引用：用于绘制图片
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // 当文本改变时，自动重新生成图片（实时预览）
  useEffect(() => {
    if (text.trim() && canvasRef.current) {
      const url = generateBratImage(text, canvasRef.current)
      setImageUrl(url)
    }
  }, [text])

  // 下载图片功能
  const handleDownload = () => {
    if (!imageUrl) return
    
    // 创建一个临时的下载链接
    const link = document.createElement('a')
    link.download = `brat-${text.substring(0, 20)}.png`
    link.href = imageUrl
    link.click()
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%'
    }}>
      {/* 输入区域 */}
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(24px, 4vw, 32px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        <label 
          htmlFor="text-input"
          style={{
            display: 'block',
            fontSize: '17px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#1d1d1f'
          }}
        >
          {dict.inputLabel}
        </label>
        
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={dict.inputPlaceholder}
          aria-label={dict.inputLabel}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '16px',
            fontSize: '21px',
            border: '2px solid #d2d2d7',
            borderRadius: '12px',
            resize: 'vertical',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s ease',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#0071e3'}
          onBlur={(e) => e.target.style.borderColor = '#d2d2d7'}
        />

        <p style={{
          fontSize: '14px',
          color: '#6e6e73',
          marginTop: '8px'
        }}>
          {dict.inputHint}
        </p>
      </div>

      {/* 图片预览区域 */}
      {imageUrl && (
        <div style={{
          background: 'white',
          borderRadius: '18px',
          padding: 'clamp(24px, 4vw, 32px)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '17px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#1d1d1f'
          }}>
            {dict.previewTitle}
          </h2>
          
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px'
          }}>
            <img 
              src={imageUrl} 
              alt={`Brat 风格图片：${text}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          {/* 下载按钮 */}
          <button
            onClick={handleDownload}
            style={{
              width: '100%',
              padding: '16px 32px',
              fontSize: '17px',
              fontWeight: '600',
              color: 'white',
              background: '#0071e3',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 113, 227, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0077ED'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0071e3'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {dict.downloadButton}
          </button>
        </div>
      )}

      {/* 隐藏的 Canvas 元素（用于生成图片） */}
      <canvas 
        ref={canvasRef} 
        style={{ display: 'none' }}
        aria-hidden="true"
      />
    </div>
  )
}

