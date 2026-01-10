import { createClient } from '@supabase/supabase-js'

// Supabase 配置
// 这些环境变量需要在 .env.local 文件中设置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 创建 Supabase 客户端
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 数据库类型定义
export interface BratImage {
  id: string
  text: string  // 图片上的文字内容
  image_url: string  // 图片的 URL
  likes: number  // 点赞数
  created_at: string  // 创建时间
}



