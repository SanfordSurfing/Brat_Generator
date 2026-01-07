# 多语言功能说明

## 📖 概述

本项目使用 Next.js 14 的 App Router 实现了完整的多语言支持。所有多语言逻辑都在**代码中实现**，不需要在 Vercel 等部署平台进行额外配置。

---

## 🌍 支持的语言

目前支持：
- 🇺🇸 **英文** (en) - 默认语言
- 🇨🇳 **简体中文** (zh)

---

## 🔗 URL 结构

### 访问路径
- `/` - 自动检测浏览器语言，重定向到对应语言
- `/en` - 英文版
- `/zh` - 中文版

### 自动检测逻辑
当用户访问根路径 `/` 时：
1. Middleware 读取浏览器的 `Accept-Language` 请求头
2. 如果包含 `zh`，重定向到 `/zh`
3. 否则重定向到 `/en`（默认）

---

## 📁 文件结构

```
Brat_Generator/
├── app/
│   └── [lang]/              # 动态语言路由
│       ├── layout.tsx       # 布局（支持多语言 SEO）
│       └── page.tsx         # 首页（使用翻译）
├── i18n/                    # 国际化配置
│   ├── config.ts            # 语言配置
│   ├── get-dictionary.ts    # 获取翻译的函数
│   └── dictionaries/        # 翻译文件
│       ├── en.json          # 英文翻译
│       └── zh.json          # 中文翻译
└── middleware.ts            # 语言检测和重定向
```

---

## 🔧 如何添加新语言

### 步骤 1：添加语言配置

编辑 `i18n/config.ts`：

```typescript
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },  // 新增日语
] as const
```

### 步骤 2：创建翻译文件

创建 `i18n/dictionaries/ja.json`：

```json
{
  "meta": {
    "title": "Brat Generator - Bratスタイルの画像を作成",
    "description": "Charlie XCX Bratアルバムスタイルの画像を無料で生成。"
  },
  "home": {
    "title": "Brat Generator",
    "subtitle": "あなた専用のCharlie XCX Bratスタイル画像を作成",
    "inputLabel": "テキストを入力",
    "inputPlaceholder": "任意のテキストを入力...",
    "inputHint": "ヒント：Enterキーで改行できます",
    "previewTitle": "プレビュー",
    "downloadButton": "画像をダウンロード",
    "footer": "Charlie XCXのBratアルバムにインスパイアされました"
  }
}
```

### 步骤 3：添加字典导入

编辑 `i18n/get-dictionary.ts`：

```typescript
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),  // 新增
}
```

### 步骤 4：更新 Middleware（可选）

如果需要自动检测日语，编辑 `middleware.ts`：

```typescript
let detectedLocale = defaultLanguage
if (acceptLanguage.includes('zh')) {
  detectedLocale = 'zh'
} else if (acceptLanguage.includes('ja')) {
  detectedLocale = 'ja'
}
```

### 完成！

部署后自动支持 `/ja` 路径，无需额外配置。

---

## 🚀 部署说明

### Vercel 部署
1. 直接部署，无需额外配置
2. Vercel 会自动识别 Next.js 项目
3. 所有语言路由自动生成

### 环境变量
无需设置任何环境变量，所有配置都在代码中。

### SEO 优化
每个语言都有：
- ✅ 独立的 `<title>` 和 `<meta description>`
- ✅ 正确的 `lang` 属性（`<html lang="zh">`）
- ✅ `hreflang` 标签（告诉搜索引擎有哪些语言版本）
- ✅ Canonical URL（避免重复内容）
- ✅ Open Graph 标签（社交媒体分享优化）

---

## 🎯 最佳实践

### 1. 翻译文件管理
- 保持所有语言的 JSON 结构一致
- 使用有意义的键名（如 `home.title` 而不是 `t1`）
- 添加注释说明特殊翻译

### 2. 组件设计
- 组件接收翻译作为 props
- 避免在组件内硬编码文字
- 使用类型定义确保翻译完整

### 3. URL 设计
- 使用语言代码作为路径前缀（`/en`, `/zh`）
- 不要在 URL 中混合语言和内容路径
- 保持 URL 结构简单清晰

---

## ❓ 常见问题

### Q: 为什么不用 next-intl 或 react-i18next？
A: 对于简单项目，Next.js 14 的原生功能已经足够。这样可以：
- 减少依赖
- 更好的性能
- 更简单的配置
- 完全控制逻辑

### Q: 如何测试不同语言？
A: 直接访问对应路径：
- http://localhost:3001/en
- http://localhost:3001/zh

### Q: 可以让用户手动切换语言吗？
A: 可以！添加一个语言切换器组件，使用 Next.js 的 `useRouter` 切换路径即可。

### Q: 部署后需要配置 DNS 吗？
A: 不需要。所有语言都在同一个域名下，通过路径区分（`example.com/en`, `example.com/zh`）。

---

## 📚 参考资料

- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [MDN: Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
- [Google: Multilingual SEO](https://developers.google.com/search/docs/specialty/international)


