'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { BratImage } from '@/lib/supabase'

// Gallery 页面组件
export default function GalleryPage() {
  const params = useParams()
  const lang = params.lang as string
  
  const [images, setImages] = useState<BratImage[]>([])
  const [loading, setLoading] = useState(true)
  const [likingIds, setLikingIds] = useState<Set<string>>(new Set())

  // 获取所有图片
  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/images')
      const result = await response.json()
      
      if (response.ok) {
        setImages(result.data || [])
      } else {
        console.error('Failed to fetch images:', result.error)
      }
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  // 点赞功能
  const handleLike = async (id: string) => {
    if (likingIds.has(id)) return
    
    setLikingIds(prev => new Set(prev).add(id))
    
    try {
      const response = await fetch(`/api/images/${id}/like`, {
        method: 'POST',
      })
      
      if (response.ok) {
        // 更新本地数据
        setImages(prevImages => 
          prevImages.map(img => 
            img.id === id 
              ? { ...img, likes: img.likes + 1 }
              : img
          ).sort((a, b) => b.likes - a.likes)
        )
      }
    } catch (error) {
      console.error('Like error:', error)
    } finally {
      setLikingIds(prev => {
        const newSet = new Set(prev)
        newSet.delete(id)
        return newSet
      })
    }
  }

  return (
    <div style={{
      maxWidth: '1200px',
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
          alignItems: 'center'
        }}>
          <li>
            <a href={`/${lang}`} style={{ color: '#0071e3', textDecoration: 'none' }}>
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: '#1d1d1f' }}>
            Gallery
          </li>
        </ol>
      </nav>

      {/* 页面标题 */}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: '700',
        marginBottom: '16px',
        color: '#1d1d1f',
        textAlign: 'center'
      }}>
        Brat Gallery
      </h1>

      <p style={{
        fontSize: '19px',
        color: '#6e6e73',
        textAlign: 'center',
        marginBottom: '48px',
        lineHeight: '1.6'
      }}>
        Explore amazing Brat style images created by our community
      </p>

      {/* 加载状态 */}
      {loading && (
        <div style={{
          textAlign: 'center',
          padding: '64px 0',
          fontSize: '17px',
          color: '#6e6e73'
        }}>
          Loading...
        </div>
      )}

      {/* 图片网格 */}
      {!loading && images.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '64px 0',
          fontSize: '17px',
          color: '#6e6e73'
        }}>
          No images yet. Be the first to upload!
        </div>
      )}

      {!loading && images.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {images.map((image) => (
            <div
              key={image.id}
              style={{
                background: 'white',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
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
              <a href={`/${lang}/gallery/${image.id}`}>
                <img
                  src={image.image_url}
                  alt={`Brat style image with text: ${image.text}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </a>

              {/* 点赞按钮 */}
              <div style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  fontSize: '14px',
                  color: '#6e6e73',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  flex: 1,
                  marginRight: '16px'
                }}>
                  {image.text.substring(0, 30)}{image.text.length > 30 ? '...' : ''}
                </div>
                
                <button
                  onClick={() => handleLike(image.id)}
                  disabled={likingIds.has(image.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    background: '#f5f5f7',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    cursor: likingIds.has(image.id) ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!likingIds.has(image.id)) {
                      e.currentTarget.style.background = '#e8e8ed'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f5f5f7'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>❤️</span>
                  <span>{image.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 返回首页按钮 */}
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a 
          href={`/${lang}`}
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
          Back to Generator
        </a>
      </div>
    </div>
  )
}

