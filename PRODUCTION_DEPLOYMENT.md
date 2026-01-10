# 🚀 生产环境部署指南

这个指南会一步步教你如何将 Brat Generator 部署到生产环境。

---

## 📋 前置准备

在开始部署之前，你需要：

1. ✅ 一个 GitHub 账号（用于连接 Vercel）
2. ✅ 一个 Vercel 账号（免费，用于托管网站）
3. ✅ 一个 Supabase 账号（免费，用于数据库）
4. ✅ 代码已经推送到 GitHub

---

## 第一步：配置生产环境的 Supabase

### 1.1 确认 Supabase 项目配置

登录 [Supabase Dashboard](https://supabase.com/dashboard)

#### 检查数据库表和 RLS 策略

1. 进入你的项目
2. 点击左侧 **Table Editor**
3. 确认 `brat_images` 表存在，包含以下字段：
   - `id` (uuid, primary key)
   - `created_at` (timestamp)
   - `image_url` (text)
   - `text` (text)
   - `likes` (int4, 默认 0)

4. 点击左侧 **Authentication** > **Policies**
5. 确认 `brat_images` 表有以下 3 个 RLS 策略：
   - ✅ **读取策略 (SELECT)**: 允许所有人读取
   - ✅ **插入策略 (INSERT)**: 允许所有人插入
   - ✅ **更新策略 (UPDATE)**: 允许所有人更新（用于点赞）

如果没有这些策略，请参考 `SUPABASE_SETUP.md` 创建。

#### 检查 Storage Bucket

1. 点击左侧 **Storage**
2. 确认有一个名为 `brat-images` 的 Bucket
3. 点击 `brat-images`，进入 **Policies** 标签
4. 确认有以下策略：
   - ✅ **上传策略 (INSERT)**: 允许所有人上传
   - ✅ **读取策略 (SELECT)**: 允许所有人查看

如果没有，点击 **New Policy** 创建：

**上传策略 (INSERT)**:
```sql
Policy name: Allow public uploads
Target roles: public
Policy definition: true
```

**读取策略 (SELECT)**:
```sql
Policy name: Allow public read
Target roles: public
Policy definition: true
```

### 1.2 获取生产环境的 API 密钥

1. 在 Supabase Dashboard，点击左侧 **Settings** (齿轮图标)
2. 点击 **API**
3. 找到以下两个值（**请妥善保管，不要分享给他人**）：
   - **Project URL**: `https://xxx.supabase.co`
   - **anon public key**: 一串很长的字符串

📝 **复制这两个值，稍后在 Vercel 配置时需要用到！**

---

## 第二步：推送代码到 GitHub

### 2.1 如果还没有推送到 GitHub

```bash
# 1. 在 GitHub 上创建一个新仓库（不要初始化 README）
# 2. 在本地项目执行：

cd /Users/sanford/出海项目/Brat_Generator

# 添加远程仓库（替换成你的 GitHub 用户名和仓库名）
git remote add origin https://github.com/你的用户名/brat-generator.git

# 推送到 GitHub
git push -u origin main
```

### 2.2 如果已经推送过

```bash
cd /Users/sanford/出海项目/Brat_Generator

# 推送最新更改
git push
```

---

## 第三步：在 Vercel 上部署

### 3.1 导入项目

1. 访问 [Vercel Dashboard](https://vercel.com)
2. 点击 **Add New...** → **Project**
3. 选择你的 GitHub 仓库 `brat-generator`
4. 点击 **Import**

### 3.2 配置环境变量（⚠️ 重要！）

在 **Configure Project** 页面：

1. 展开 **Environment Variables**
2. 添加以下 3 个环境变量：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | 从 Supabase 复制的 Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` | 从 Supabase 复制的 anon public key |
| `NEXT_PUBLIC_SITE_URL` | `https://你的域名.vercel.app` | 你的网站 URL（稍后可修改） |

**注意**：
- `NEXT_PUBLIC_SITE_URL` 先填 Vercel 自动生成的域名，部署成功后会显示（格式如 `https://brat-generator.vercel.app`）
- 部署后可以回来修改这个值

### 3.3 开始部署

1. 检查配置无误后，点击 **Deploy**
2. 等待 2-3 分钟（首次部署会安装依赖）
3. 看到 🎉 **Congratulations!** 表示部署成功

### 3.4 更新网站 URL

1. 部署成功后，复制 Vercel 分配的域名（如 `https://brat-generator.vercel.app`）
2. 回到 Vercel 项目的 **Settings** → **Environment Variables**
3. 找到 `NEXT_PUBLIC_SITE_URL`，点击编辑
4. 更新为你的真实域名
5. 点击 **Save**
6. 回到 **Deployments** 标签，点击右上角 **Redeploy**（使新的环境变量生效）

---

## 第四步：配置自定义域名（可选）

如果你有自己的域名（如 `bratgenerator.com`）：

1. 在 Vercel 项目页面，点击 **Settings** → **Domains**
2. 输入你的域名，点击 **Add**
3. 根据提示到你的域名服务商添加 DNS 记录：
   - **类型**: CNAME
   - **名称**: `@` 或 `www`
   - **值**: `cname.vercel-dns.com`
4. 等待 DNS 生效（通常 5-30 分钟）
5. 回到 Vercel，点击 **Verify**
6. 配置成功后，**记得更新 `NEXT_PUBLIC_SITE_URL` 环境变量**并重新部署

---

## 第五步：验证部署

### 5.1 测试基本功能

访问你的生产网站，测试以下功能：

1. ✅ 输入文字，生成 Brat 风格图片
2. ✅ 下载图片
3. ✅ 上传图片到 Gallery
4. ✅ 查看 Gallery 页面，能看到刚上传的图片
5. ✅ 点赞功能正常
6. ✅ 多语言切换（/en 和 /zh）
7. ✅ Brat Color 页面正常显示

### 5.2 检查 SEO

1. 访问 `https://你的域名/sitemap.xml`，应该能看到 XML 格式的站点地图
2. 访问 `https://你的域名/robots.txt`，应该能看到规则
3. 在浏览器中右键 → **查看网页源代码**，确认能看到完整的 HTML（不是空的）

### 5.3 测试缓存刷新

1. 上传一张新图片
2. 点击"查看画廊"
3. 应该立即看到新图片（不需要等待 60 秒）

---

## 🔄 后续更新流程

当你修改代码后，只需：

```bash
# 1. 保存到 Git
git add -A
git commit -m "描述你的更改"

# 2. 推送到 GitHub
git push

# 3. Vercel 会自动检测并重新部署（无需手动操作）
```

**自动部署时间**：通常 1-2 分钟

---

## ⚠️ 重要注意事项

### 安全性

1. ✅ **不要泄露环境变量**：
   - 不要将 `.env` 文件提交到 Git
   - 不要在代码中硬编码 API 密钥
   - Supabase 的 `anon key` 是公开的（前端可见），但有 RLS 保护

2. ✅ **Supabase RLS 必须配置正确**：
   - 如果 RLS 策略没配置好，用户将无法上传图片或点赞
   - 测试环境和生产环境的 Supabase 应该是同一个项目（免费版足够）

### 性能优化

1. ✅ **ISR 缓存**：
   - Gallery 和图片详情页有 60 秒缓存
   - 上传/点赞后会自动清除缓存
   - 首次访问稍慢，后续访问秒开

2. ✅ **图片优化**：
   - Next.js 自动优化图片
   - Supabase Storage 提供 CDN 加速

### 成本

1. ✅ **Vercel 免费版**：
   - 每月 100GB 带宽
   - 无限请求
   - 对个人项目足够

2. ✅ **Supabase 免费版**：
   - 500MB 数据库
   - 1GB 文件存储
   - 50,000 月活用户
   - 对小型项目足够

---

## 🐛 常见问题

### Q1: 上传图片时报错 "row-level security policy"

**原因**：Supabase RLS 策略未配置

**解决**：参考 `SUPABASE_SETUP.md` 第 4 步，创建 RLS 策略

### Q2: 部署成功但图片无法加载

**原因**：Supabase Storage Bucket 未设置公开访问

**解决**：
1. 进入 Supabase Dashboard → Storage → brat-images
2. 点击右上角 **Settings**
3. 确认 **Public bucket** 已勾选

### Q3: Gallery 页面不显示新上传的图片

**原因**：ISR 缓存未刷新（已在 v1.6 修复）

**解决**：等待 1-2 分钟后刷新，或清除浏览器缓存

### Q4: Vercel 部署失败

**原因**：环境变量未配置

**解决**：
1. 检查 Vercel 项目设置中的环境变量是否正确
2. 确认变量名没有拼写错误（区分大小写）
3. 重新部署

---

## 📞 需要帮助？

如果遇到问题，检查以下内容：

1. ✅ Supabase 的表和 RLS 策略配置正确
2. ✅ Vercel 的环境变量配置正确
3. ✅ 代码已推送到 GitHub
4. ✅ 查看 Vercel 的部署日志（Deployments → 点击最新部署 → Logs）

---

**祝部署顺利！🎉**



