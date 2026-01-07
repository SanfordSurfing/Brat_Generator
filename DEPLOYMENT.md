# 部署指南

本文档说明如何将 Brat Generator 部署到生产环境，以及如何管理测试和生产数据。

---

## 🌍 环境说明

### 测试环境（本地开发）
- **地址**：http://localhost:3002
- **用途**：开发和测试新功能
- **数据**：测试数据

### 生产环境（线上）
- **地址**：https://bratgenerator.com（或你的域名）
- **用途**：真实用户使用
- **数据**：生产数据

---

## 📊 数据管理策略

### 方案 1：共享数据库（简单）

**适合场景**：小型项目、个人项目

- 测试环境和生产环境使用**同一个** Supabase 项目
- 所有数据（测试+生产）存储在同一个数据库

**优点**：
- ✅ 配置简单，只需要一套 Supabase 配置
- ✅ 不需要额外费用
- ✅ 测试数据可以直接在生产环境看到

**缺点**：
- ❌ 测试数据会混入生产数据
- ❌ 测试时可能影响生产用户体验
- ❌ 删除测试数据需要手动操作

**清理测试数据**：

部署到生产前，可以在 Supabase SQL Editor 中运行：

```sql
-- 删除某个日期之前的数据（假设 2026-01-10 是上线日期）
DELETE FROM brat_images WHERE created_at < '2026-01-10 00:00:00';

-- 或者删除所有数据重新开始
TRUNCATE TABLE brat_images;
```

---

### 方案 2：分离数据库（推荐）

**适合场景**：团队项目、商业项目

创建两个独立的 Supabase 项目：

#### 开发环境（Dev）
- **项目名称**：`brat-generator-dev`
- **用途**：本地开发和测试
- **配置文件**：`.env.local`

```bash
# .env.local（本地开发）
NEXT_PUBLIC_SUPABASE_URL=https://xxx-dev.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的_dev_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3002
```

#### 生产环境（Prod）
- **项目名称**：`brat-generator-prod`
- **用途**：线上真实用户
- **配置**：在 Vercel 环境变量中设置

**优点**：
- ✅ 数据完全隔离，测试不影响生产
- ✅ 可以安全地进行破坏性测试
- ✅ 更专业的开发流程

**缺点**：
- ❌ 需要创建和维护两个 Supabase 项目
- ❌ 配置稍微复杂一点

**实施步骤**：

1. 在 Supabase 创建第二个项目 `brat-generator-prod`
2. 按照 `SUPABASE_SETUP.md` 重新设置：
   - 创建 `brat_images` 表
   - 设置 RLS 策略
3. 本地保持使用 dev 配置
4. 部署到 Vercel 时使用 prod 配置

---

## 🚀 部署到 Vercel

### 第一步：准备代码

```bash
# 确保所有改动已提交
git add .
git commit -m "准备部署到生产环境"
git push
```

### 第二步：创建 Vercel 项目

1. 访问 [vercel.com](https://vercel.com)
2. 登录并点击 "Add New Project"
3. 导入你的 GitHub 仓库
4. 项目设置：
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

### 第三步：配置环境变量

在 Vercel 项目设置中，添加环境变量：

**Environment Variables：**

```
NEXT_PUBLIC_SUPABASE_URL = https://你的_supabase_url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = 你的_anon_key
NEXT_PUBLIC_SITE_URL = https://你的域名.com
```

⚠️ **重要**：
- 如果使用方案 1，填写你现有的 Supabase 配置
- 如果使用方案 2，填写生产环境（prod）的 Supabase 配置

### 第四步：部署

1. 点击 "Deploy"
2. 等待部署完成（通常 1-2 分钟）
3. 访问 Vercel 提供的 URL 测试功能

### 第五步：配置自定义域名（可选）

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的域名（如 `bratgenerator.com`）
3. 根据提示配置 DNS 记录
4. 等待 DNS 生效（通常 5-60 分钟）

---

## ✅ 部署后检查清单

- [ ] 访问生产网站，确认页面正常加载
- [ ] 测试图片生成功能
- [ ] 测试上传到 Gallery 功能
- [ ] 测试点赞功能
- [ ] 访问 Gallery 页面，确认数据显示正常
- [ ] 访问 Brat Color 页面
- [ ] 测试多语言切换（/en 和 /zh）
- [ ] 在手机上测试响应式布局
- [ ] 检查 Google Search Console（等待索引）

---

## 🔧 常见问题

### Q1: 部署后上传功能报错
**解决方案**：
1. 检查 Vercel 环境变量是否正确设置
2. 检查 Supabase RLS 策略是否正确
3. 查看 Vercel 的 Function Logs

### Q2: 如何查看生产环境的日志？
1. 在 Vercel 项目页面点击 "Functions"
2. 查看 API 路由的日志
3. 或者在 Supabase 查看数据库日志

### Q3: 如何更新生产环境？
```bash
# 提交改动
git add .
git commit -m "更新描述"
git push

# Vercel 会自动检测并重新部署
```

### Q4: 如何回滚到之前的版本？
1. 在 Vercel 项目页面点击 "Deployments"
2. 找到之前的成功部署
3. 点击 "..." > "Promote to Production"

---

## 📈 SEO 优化建议

部署后的 SEO 工作：

1. **提交 sitemap.xml**
   - 访问 `https://你的域名.com/sitemap.xml`
   - 在 Google Search Console 提交

2. **监控索引状态**
   - 使用 Google Search Console
   - 检查哪些页面已被索引

3. **社交媒体分享**
   - 测试 Open Graph 标签
   - 在 Twitter、Facebook 分享测试

4. **性能监控**
   - 使用 Vercel Analytics
   - 使用 Google PageSpeed Insights

---

## 💰 费用说明

### Vercel（免费版足够）
- ✅ 免费：100GB 带宽/月
- ✅ 免费：100 次部署/天
- ✅ 免费：自动 HTTPS
- ✅ 免费：自定义域名

### Supabase（免费版足够）
- ✅ 免费：500MB 数据库
- ✅ 免费：1GB 文件存储
- ✅ 免费：50,000 次/月 API 请求

**结论**：个人项目完全免费！

---

## 🎉 完成

恭喜！你的 Brat Generator 已经成功部署到生产环境。

如有问题，请查看：
- [Vercel 文档](https://vercel.com/docs)
- [Supabase 文档](https://supabase.com/docs)
- [Next.js 文档](https://nextjs.org/docs)


