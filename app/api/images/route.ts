import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - 获取所有图片（按点赞数排序）
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('brat_images')
      .select('*')
      .order('likes', { ascending: false })
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - 上传新图片
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text, image_url } = body
    
    // 验证数据
    if (!text || !image_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    
    // 插入数据
    const { data, error } = await supabase
      .from('brat_images')
      .insert([{ text, image_url, likes: 0 }])
      .select()
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

