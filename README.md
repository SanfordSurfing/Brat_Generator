# Brat Generator

一个模仿 Charlie XCX "Brat" 专辑封面风格的图片生成工具。

## 项目目标
为用户提供快捷的方式创建 Brat 风格的图片，用于社交媒体、个人主页等。

## 当前进度
- ✅ 项目初始化
- ✅ MVP 版本完成（文本输入 + 图片生成 + 下载功能）
- ✅ 字体效果优化（完美还原官方 bratgenerator.com）
- ✅ 文字自动换行功能
- ✅ 多语言支持（英文 + 中文）

## 技术栈
- Next.js 14 (App Router)
- React
- TypeScript
- Canvas API (用于图片生成)

## 核心功能
1. **文本输入**：支持多行输入
2. **自动换行**：文字太长自动换行，不会溢出
3. **实时生成**：Brat 风格图片（#8ACE00 背景，黑色 Arial Narrow 字体）
4. **图片下载**：一键下载 PNG 格式
5. **多语言**：支持英文（/en）和中文（/zh）
6. **自动检测**：根据浏览器语言自动跳转

## 本地运行
```bash
npm install
npm run dev
```

访问：
- http://localhost:3000 （自动重定向到对应语言）
- http://localhost:3000/en （英文版）
- http://localhost:3000/zh （中文版）

## 多语言路由说明

### 访问方式
- **根路径** `/` - 自动检测浏览器语言，重定向到 `/en` 或 `/zh`
- **英文** `/en` - 英文界面
- **中文** `/zh` - 中文界面

### 添加新语言
1. 在 `i18n/config.ts` 添加语言配置
2. 在 `i18n/dictionaries/` 创建新的翻译文件（如 `ja.json`）
3. 在 `i18n/get-dictionary.ts` 添加导入
4. 完成！Next.js 会自动生成新的路由

### 部署说明
- **不需要在 Vercel 配置**：所有多语言逻辑都在代码中
- **自动生成路由**：部署后自动支持 `/en`、`/zh` 等路径
- **SEO 友好**：每个语言都有独立的 meta 标签和 canonical URL

## SEO 优化
- 每页只有一个 H1 标签
- 正确的 canonical 设置
- 标题 < 60 字符
- 描述 < 160 字符
- 移动端友好
- 无障碍友好

