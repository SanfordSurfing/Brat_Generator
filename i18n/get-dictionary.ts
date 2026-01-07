/**
 * 获取指定语言的翻译字典
 */

import type { Language } from './config'

// 翻译字典的类型（基于 en.json 结构）
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  id: () => import('./dictionaries/id.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
}

// 获取字典的函数
export const getDictionary = async (locale: Language) => {
  // 如果语言不存在，返回英文（默认）
  if (!dictionaries[locale]) {
    return dictionaries.en()
  }
  return dictionaries[locale]()
}


