'use client'

import { useState, useEffect, useRef } from 'react'
import { languages } from '@/i18n/config'
import { usePathname } from 'next/navigation'

/**
 * 语言切换组件
 * 显示当前语言，点击后展开下拉菜单选择其他语言
 */
export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  
  // 从当前路径获取语言代码
  const currentLang = pathname?.split('/')[1] || 'en'
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  /**
   * 切换语言
   */
  const switchLanguage = (langCode: string) => {
    if (!pathname) return
    
    // 替换路径中的语言代码
    const pathParts = pathname.split('/')
    pathParts[1] = langCode
    const newPath = pathParts.join('/')
    
    // 跳转到新路径
    window.location.href = newPath
  }

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      {/* 当前语言按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          color: '#1d1d1f',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
        }}
      >
        <span style={{ fontSize: '18px' }}>{currentLanguage.flag}</span>
        <span className="lang-name" style={{ display: 'none' }}>
          {currentLanguage.name}
        </span>
        <span style={{ fontSize: '10px', opacity: 0.7 }}>▼</span>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          minWidth: '160px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
          zIndex: 1000,
          animation: 'slideDown 0.2s ease'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                switchLanguage(lang.code)
                setIsOpen(false)
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: lang.code === currentLang ? 'rgba(138, 206, 0, 0.1)' : 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                color: lang.code === currentLang ? '#8ACE00' : '#1d1d1f',
                fontSize: '15px',
                fontWeight: lang.code === currentLang ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (lang.code !== currentLang) {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.03)'
                }
              }}
              onMouseLeave={(e) => {
                if (lang.code !== currentLang) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>{lang.flag}</span>
              <span style={{ flex: 1 }}>{lang.name}</span>
              {lang.code === currentLang && (
                <span style={{ fontSize: '14px' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* 动画样式 */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (min-width: 640px) {
          .lang-name {
            display: inline !important;
          }
        }
      `}</style>
    </div>
  )
}


