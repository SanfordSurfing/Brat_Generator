'use client'

import LikeButton from './LikeButton'

// 图片卡片组件属性
type ImageCardProps = {
  id: string
  imageUrl: string
  text: string
  likes: number
  lang: string
}

/**
 * 图片卡片组件（客户端）
 * 用于 Gallery 页面展示单张图片
 */
export default function ImageCard({ id, imageUrl, text, likes, lang }: ImageCardProps) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* 图片 */}
      <a href={`/${lang}/gallery/${id}`}>
        <img
          src={imageUrl}
          alt={`Brat style image with text: ${text}`}
          loading="lazy"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </a>

      {/* 信息和点赞 */}
      <div style={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px'
      }}>
        <div style={{
          fontSize: '14px',
          color: '#6e6e73',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1
        }}>
          {text.substring(0, 30)}{text.length > 30 ? '...' : ''}
        </div>
        
        {/* 客户端点赞按钮 */}
        <LikeButton 
          imageId={id} 
          initialLikes={likes}
          compact={true}
        />
      </div>
    </div>
  )
}



