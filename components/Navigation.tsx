'use client'

import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'

// 导航栏组件属性
type NavigationProps = {
  lang: string
}

// 全局顶部导航栏
export default function Navigation({ lang }: NavigationProps) {
  const pathname = usePathname()
  
  // 导航链接配置
  const navLinks = [
    { name: 'Brat Generator', href: `/${lang}`, icon: '🎨' },
    { name: 'Gallery', href: `/${lang}/gallery`, icon: '🖼️' },
    { name: 'Brat Color', href: `/${lang}/brat-color`, icon: '🎨' },
  ]
  
  // 判断当前链接是否激活
  const isActive = (href: string) => {
    if (href === `/${lang}`) {
      return pathname === `/${lang}` || pathname === `/${lang}/`
    }
    return pathname?.startsWith(href)
  }
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #d2d2d7',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(16px, 4vw, 48px)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
    }}>
      {/* Logo */}
      <a 
        href={`/${lang}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          color: '#1d1d1f',
          fontWeight: '700',
          fontSize: '20px',
          transition: 'opacity 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <div style={{
          width: '36px',
          height: '36px',
          background: '#8ACE00',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: '700',
          color: '#000',
          fontFamily: 'Arial Narrow, Arial, sans-serif',
          filter: 'blur(0.5px)'
        }}>
          B
        </div>
        <span className="logo-text">
          Brat Generator
        </span>
      </a>
      
      {/* 导航链接 + 语言切换 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(8px, 2vw, 24px)'
      }}>
        {/* 导航链接 */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              fontSize: '15px',
              fontWeight: '500',
              color: isActive(link.href) ? '#8ACE00' : '#1d1d1f',
              textDecoration: 'none',
              borderRadius: '8px',
              background: isActive(link.href) ? 'rgba(138, 206, 0, 0.1)' : 'transparent',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (!isActive(link.href)) {
                e.currentTarget.style.background = '#f5f5f7'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(link.href)) {
                e.currentTarget.style.background = 'transparent'
              }
            }}
          >
            <span style={{ fontSize: '16px' }}>{link.icon}</span>
            <span className="nav-link-text">
              {link.name}
            </span>
          </a>
        ))}
        
        {/* 语言切换器 */}
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
