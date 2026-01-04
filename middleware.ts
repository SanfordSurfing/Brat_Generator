/**
 * Next.js Middleware - 处理国际化路由
 * 自动检测用户语言并重定向到对应的语言页面
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languageCodes, defaultLanguage } from './i18n/config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 检查路径是否已经包含语言代码
  const pathnameHasLocale = languageCodes.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // 路径已包含语言代码，直接返回
    return NextResponse.next()
  }

  // 从请求头获取用户首选语言
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // 简单的语言检测逻辑
  let detectedLocale = defaultLanguage
  if (acceptLanguage.includes('zh')) {
    detectedLocale = 'zh'
  }

  // 重定向到带语言前缀的 URL
  const url = request.nextUrl.clone()
  url.pathname = `/${detectedLocale}${pathname}`
  return NextResponse.redirect(url)
}

// 配置 middleware 运行的路径
export const config = {
  // 匹配所有路径，除了：
  // - api 路由
  // - _next/static（静态文件）
  // - _next/image（图片优化）
  // - favicon.ico（网站图标）
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

