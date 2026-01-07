/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用严格模式，帮助发现潜在问题
  reactStrictMode: true,
  
  // 性能优化配置
  compress: true, // 启用 Gzip 压缩
  
  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'], // 使用现代图片格式
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // 响应式图片尺寸
    minimumCacheTTL: 60 * 60 * 24 * 7, // 图片缓存 7 天
  },
  
  // 编译优化
  swcMinify: true, // 使用 SWC 压缩 JS（更快）
  
  // 实验性功能
  experimental: {
    optimizePackageImports: ['@supabase/supabase-js'], // 按需导入包
  },
  
  // 外部域名配置（用于 Supabase Storage）
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig


