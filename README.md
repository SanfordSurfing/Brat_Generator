# Brat Generator

一个模仿 Charlie XCX "Brat" 专辑封面风格的图片生成工具。

## 项目目标
为用户提供快捷的方式创建 Brat 风格的图片，用于社交媒体、个人主页等。

## 当前版本：v1.2

## 当前进度
- ✅ 项目初始化
- ✅ MVP 版本完成（文本输入 + 图片生成 + 下载功能）
- ✅ 字体效果优化（完美还原官方 bratgenerator.com）
- ✅ 文字自动换行功能优化（智能字号计算）
- ✅ 多语言支持（英文 + 中文）
- ✅ Gallery 功能（图片上传 + 展示 + 点赞）
- ✅ 单张图片详情页（独立 URL，SEO 优化）
- ✅ Brat Color 页面（色值展示）
- ✅ 完整的 SEO 优化（结构化数据、sitemap、robots.txt）
- ✅ Supabase 后端集成

## 技术栈
- Next.js 14 (App Router)
- React 18
- TypeScript
- Canvas API (用于图片生成)
- Supabase (数据库 + 存储)

## 核心功能
1. **文本输入**：支持多行输入
2. **智能换行**：优先换行，只有溢出时才缩小字号
3. **实时生成**：Brat 风格图片（#8ACE00 背景，黑色 Arial Narrow 字体）
4. **图片下载**：一键下载 PNG 格式
5. **图片上传**：上传到 Gallery，与社区分享
6. **Gallery 展示**：浏览所有用户上传的图片
7. **点赞功能**：给喜欢的图片点赞，按点赞数排序
8. **独立页面**：每张图片都有独立 URL（SEO 友好）
9. **Brat Color**：查看标志性绿色的色值
10. **多语言**：支持英文（/en）和中文（/zh）
11. **自动检测**：根据浏览器语言自动跳转

## 本地运行

### 第一步：安装依赖
```bash
npm install
```

### 第二步：配置 Supabase（可选，但推荐）
如果你想使用 Gallery 功能（上传、点赞），需要配置 Supabase：

1. 查看详细设置指南：[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
2. 创建 `.env.local` 文件并填写你的 Supabase 配置

如果暂时不需要 Gallery 功能，可以跳过这一步，只使用图片生成和下载功能。

### 第三步：启动开发服务器
```bash
npm run dev
```

访问：
- http://localhost:3000 （自动重定向到对应语言）
- http://localhost:3000/en （英文版）
- http://localhost:3000/zh （中文版）
- http://localhost:3000/en/gallery （Gallery 页面）
- http://localhost:3000/en/brat-color （Brat Color 页面）

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

