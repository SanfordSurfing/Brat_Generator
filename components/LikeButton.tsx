'use client'

import { useState, useEffect } from 'react'

// 点赞按钮组件属性
type LikeButtonProps = {
  imageId: string
  initialLikes: number
  compact?: boolean  // 紧凑模式（用于 Gallery 列表）
}

/**
 * 从 localStorage 读取用户的点赞状态
 */
function getLocalLikedStatus(imageId: string): boolean {
  if (typeof window === 'undefined') return false
  const likedImages = localStorage.getItem('brat_liked_images')
  if (!likedImages) return false
  
  try {
    const likedSet = new Set(JSON.parse(likedImages))
    return likedSet.has(imageId)
  } catch {
    return false
  }
}

/**
 * 保存点赞状态到 localStorage
 */
function saveLocalLikedStatus(imageId: string) {
  if (typeof window === 'undefined') return
  const likedImages = localStorage.getItem('brat_liked_images')
  
  try {
    const likedSet = likedImages ? new Set(JSON.parse(likedImages)) : new Set()
    likedSet.add(imageId)
    localStorage.setItem('brat_liked_images', JSON.stringify([...likedSet]))
  } catch (error) {
    console.error('Failed to save liked status:', error)
  }
}

/**
 * 客户端点赞按钮组件
 * 处理点赞交互逻辑，使用 localStorage 持久化点赞状态
 */
export default function LikeButton({ imageId, initialLikes, compact = false }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiking, setIsLiking] = useState(false)
  const [hasLiked, setHasLiked] = useState(false)
  const [mounted, setMounted] = useState(false)

  // 组件挂载后，从 localStorage 读取点赞状态
  useEffect(() => {
    setMounted(true)
    const likedStatus = getLocalLikedStatus(imageId)
    setHasLiked(likedStatus)
  }, [imageId])

  /**
   * 点赞处理函数（传统方式：等待API响应后再更新UI）
   */
  const handleLike = async () => {
    if (hasLiked || isLiking) return
    
    setIsLiking(true)
    
    try {
      const response = await fetch(`/api/images/${imageId}/like`, {
        method: 'POST',
      })
      
      if (!response.ok) {
        throw new Error('Failed to like image')
      }
      
      const data = await response.json()
      
      // API 成功后更新 UI
      if (data.success) {
        setLikes(data.likes)
        setHasLiked(true)
        saveLocalLikedStatus(imageId)
      }
    } catch (error) {
      console.error('Like error:', error)
      alert('点赞失败，请稍后重试')
    } finally {
      setIsLiking(false)
    }
  }

  // 防止 hydration 不匹配：等待客户端挂载后再显示点赞状态
  if (!mounted) {
    return (
      <button
        disabled
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: compact ? '6px' : '8px',
          padding: compact ? '8px 16px' : '16px 32px',
          background: '#f5f5f7',
          border: 'none',
          borderRadius: compact ? '20px' : '12px',
          fontSize: compact ? '14px' : '17px',
          fontWeight: '600',
          color: '#1d1d1f',
          cursor: 'wait',
          width: compact ? 'auto' : '100%',
          justifyContent: 'center'
        }}
      >
        <span style={{ fontSize: compact ? '16px' : '20px' }}>🤍</span>
        <span>{likes}</span>
      </button>
    )
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
          transition: 'all 0.2s ease',
          opacity: isLiking ? 0.6 : 1
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
        <span style={{ fontSize: '16px' }}>
          {isLiking ? '⏳' : (hasLiked ? '❤️' : '🤍')}
        </span>
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
        gap: '8px',
        opacity: isLiking ? 0.8 : 1
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
      <span style={{ fontSize: '20px' }}>
        {isLiking ? '⏳' : (hasLiked ? '✓' : '❤️')}
      </span>
      <span>
        {isLiking ? 'Liking...' : (hasLiked ? `Liked! (${likes})` : `${likes} ${likes === 1 ? 'Like' : 'Likes'}`)}
      </span>
    </button>
  )
}

