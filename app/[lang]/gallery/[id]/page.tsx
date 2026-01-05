'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { BratImage } from '@/lib/supabase'

// 单张图片详情页
export default function ImageDetailPage() {
  const params = useParams()
  const lang = params.lang as string
  const id = params.id as string
  
  const [image, setImage] = useState<BratImage | null>(null)
  const [loading, setLoading] = useState(true)
  const [liking, setLiking] = useState(false)

  // 获取图片详情
  useEffect(() => {
    fetchImage()
  }, [id])

  const fetchImage = async () => {
    try {
      const response = await fetch('/api/images')
      const result = await response.json()
      
      if (response.ok) {
        const foundImage = result.data?.find((img: BratImage) => img.id === id)
        setImage(foundImage || null)
      }
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  // 点赞功能
  const handleLike = async () => {
    if (!image || liking) return
    
    setLiking(true)
    
    try {
      const response = await fetch(`/api/images/${id}/like`, {
        method: 'POST',
      })
      
      if (response.ok) {
        setImage(prev => prev ? { ...prev, likes: prev.likes + 1 } : null)
      }
    } catch (error) {
      console.error('Like error:', error)
    } finally {
      setLiking(false)
    }
  }

  if (loading) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '64px 0',
        fontSize: '17px',
        color: '#6e6e73'
      }}>
        Loading...
      </div>
    )
  }

  if (!image) {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '64px 0'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          marginBottom: '16px',
          color: '#1d1d1f'
        }}>
          Image Not Found
        </h1>
        <p style={{
          fontSize: '17px',
          color: '#6e6e73',
          marginBottom: '32px'
        }}>
          The image you're looking for doesn't exist.
        </p>
        <a 
          href={`/${lang}/gallery`}
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            fontSize: '17px',
            fontWeight: '600',
            color: 'white',
            background: '#0071e3',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0, 113, 227, 0.3)'
          }}
        >
          Back to Gallery
        </a>
      </div>
    )
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
      paddingTop: '40px',
      paddingBottom: '40px'
    }}>
      {/* 面包屑导航 */}
      <nav aria-label="Breadcrumb" style={{
        marginBottom: '24px',
        fontSize: '14px',
        color: '#6e6e73'
      }}>
        <ol style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          gap: '8px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <li>
            <a href={`/${lang}`} style={{ color: '#0071e3', textDecoration: 'none' }}>
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <a href={`/${lang}/gallery`} style={{ color: '#0071e3', textDecoration: 'none' }}>
              Gallery
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: '#1d1d1f' }}>
            {image.text.substring(0, 20)}...
          </li>
        </ol>
      </nav>

      {/* 图片卡片 */}
      <div style={{
        background: 'white',
        borderRadius: '18px',
        padding: 'clamp(24px, 4vw, 32px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        marginBottom: '32px'
      }}>
        {/* 图片 */}
        <div style={{
          width: '100%',
          marginBottom: '24px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <img
            src={image.image_url}
            alt={`Brat style image with text: ${image.text}`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* 文字内容 */}
        <div style={{
          marginBottom: '24px'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1d1d1f',
            marginBottom: '8px',
            wordBreak: 'break-word'
          }}>
            {image.text}
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6e6e73'
          }}>
            Created on {new Date(image.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* 点赞按钮 */}
        <button
          onClick={handleLike}
          disabled={liking}
          style={{
            width: '100%',
            padding: '16px 32px',
            fontSize: '17px',
            fontWeight: '600',
            color: 'white',
            background: liking ? '#6e6e73' : '#8ACE00',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(138, 206, 0, 0.3)',
            cursor: liking ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (!liking) {
              e.currentTarget.style.background = '#9ADE00'
            }
          }}
          onMouseLeave={(e) => {
            if (!liking) {
              e.currentTarget.style.background = '#8ACE00'
            }
          }}
        >
          <span style={{ fontSize: '20px' }}>❤️</span>
          <span>{image.likes} {image.likes === 1 ? 'Like' : 'Likes'}</span>
        </button>
      </div>

      {/* 返回按钮 */}
      <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center'
      }}>
        <a 
          href={`/${lang}/gallery`}
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            fontSize: '17px',
            fontWeight: '600',
            color: 'white',
            background: '#0071e3',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0, 113, 227, 0.3)',
            transition: 'all 0.2s ease'
          }}
        >
          Back to Gallery
        </a>
        
        <a 
          href={`/${lang}`}
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            fontSize: '17px',
            fontWeight: '600',
            color: '#0071e3',
            background: 'white',
            border: '2px solid #0071e3',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
        >
          Create Your Own
        </a>
      </div>
    </div>
  )
}

