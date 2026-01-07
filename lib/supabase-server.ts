import { createClient } from '@supabase/supabase-js'
import { BratImage } from './supabase'

// Supabase 配置（服务端）
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 创建 Supabase 客户端（服务端使用）
const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * 获取所有图片（服务端）
 * 按点赞数和创建时间排序
 */
export async function getImages(): Promise<BratImage[]> {
  try {
    const { data, error } = await supabase
      .from('brat_images')
      .select('*')
      .order('likes', { ascending: false })
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Supabase error:', error)
      return []
    }
    
    return data || []
  } catch (error) {
    console.error('Server error:', error)
    return []
  }
}

/**
 * 获取单张图片（服务端）
 * @param id 图片 ID
 */
export async function getImageById(id: string): Promise<BratImage | null> {
  try {
    const { data, error } = await supabase
      .from('brat_images')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Server error:', error)
    return null
  }
}

/**
 * 获取最新的 N 张图片（用于生成静态路径）
 * @param limit 限制数量
 */
export async function getRecentImageIds(limit: number = 100): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('brat_images')
      .select('id')
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) {
      console.error('Supabase error:', error)
      return []
    }
    
    return data?.map(img => img.id) || []
  } catch (error) {
    console.error('Server error:', error)
    return []
  }
}


