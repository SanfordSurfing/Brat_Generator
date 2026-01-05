'use client'

import { useState } from 'react'

// 点赞按钮组件属性
type LikeButtonProps = {
  imageId: string
  initialLikes: number
  compact?: boolean  // 紧凑模式（用于 Gallery 列表）
}

/**
 * 客户端点赞按钮组件
 * 处理点赞交互逻辑
 */
export default function LikeButton({ imageId, initialLikes, compact = false }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiking, setIsLiking] = useState(false)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = async () => {
    if (isLiking || hasLiked) return
    
    setIsLiking(true)
    
    try {
      const response = await fetch(`/api/images/${imageId}/like`, {
        method: 'POST',
      })
      
      if (response.ok) {
        setLikes(prev => prev + 1)
        setHasLiked(true)
      } else {
        alert('Failed to like. Please try again.')
      }
    } catch (error) {
      console.error('Like error:', error)
      alert('Failed to like. Please try again.')
    } finally {
      setIsLiking(false)
    }
  }

  if (compact) {
    // 紧凑模式：用于 Gallery 列表
    return (
      <button
        onClick={handleLike}
        disabled={isLiking || hasLiked}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 16px',
          background: hasLiked ? '#8ACE00' : '#f5f5f7',
          border: 'none',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '600',
          color: hasLiked ? 'white' : '#1d1d1f',
          cursor: isLiking || hasLiked ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          if (!isLiking && !hasLiked) {
            e.currentTarget.style.background = '#e8e8ed'
          }
        }}
        onMouseLeave={(e) => {
          if (!hasLiked) {
            e.currentTarget.style.background = '#f5f5f7'
          }
        }}
      >
        <span style={{ fontSize: '16px' }}>{hasLiked ? '❤️' : '🤍'}</span>
        <span>{likes}</span>
      </button>
    )
  }

  // 完整模式：用于详情页
  return (
    <button
      onClick={handleLike}
      disabled={isLiking || hasLiked}
      style={{
        width: '100%',
        padding: '16px 32px',
        fontSize: '17px',
        fontWeight: '600',
        color: 'white',
        background: hasLiked ? '#34C759' : (isLiking ? '#6e6e73' : '#8ACE00'),
        border: 'none',
        borderRadius: '12px',
        boxShadow: hasLiked ? '0 2px 8px rgba(52, 199, 89, 0.3)' : '0 2px 8px rgba(138, 206, 0, 0.3)',
        cursor: isLiking || hasLiked ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}
      onMouseEnter={(e) => {
        if (!isLiking && !hasLiked) {
          e.currentTarget.style.background = '#9ADE00'
        }
      }}
      onMouseLeave={(e) => {
        if (!isLiking && !hasLiked) {
          e.currentTarget.style.background = '#8ACE00'
        }
      }}
    >
      <span style={{ fontSize: '20px' }}>{hasLiked ? '✓' : '❤️'}</span>
      <span>{hasLiked ? `Liked! (${likes})` : `${likes} ${likes === 1 ? 'Like' : 'Likes'}`}</span>
    </button>
  )
}

