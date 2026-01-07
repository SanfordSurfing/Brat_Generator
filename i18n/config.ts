/**
 * 国际化配置文件
 * 定义支持的语言和默认语言
 */

// 支持的语言列表
export const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'zh',
    name: '简体中文',
    flag: '🇨🇳'
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  },
  {
    code: 'id',
    name: 'Indonesia',
    flag: '🇮🇩'
  },
  {
    code: 'ja',
    name: '日本語',
    flag: '🇯🇵'
  }
] as const

// 所有语言代码
export const languageCodes = languages.map(lang => lang.code)

// locales 别名（用于 sitemap 等文件）
export const locales = languageCodes

// 默认语言
export const defaultLanguage = 'en'

// 语言类型
export type Language = typeof languageCodes[number]

// Locale 类型别名（用于页面组件）
export type Locale = Language

