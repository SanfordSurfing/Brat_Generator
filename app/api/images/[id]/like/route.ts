import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'

// POST - 给图片点赞
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    // 先获取当前点赞数
    const { data: currentData, error: fetchError } = await supabase
      .from('brat_images')
      .select('likes')
      .eq('id', id)
      .single()
    
    if (fetchError) {
      console.error('Fetch error:', fetchError)
      return NextResponse.json({ error: fetchError.message }, { status: 500 })
    }
    
    // 增加点赞数
    const { data, error } = await supabase
      .from('brat_images')
      .update({ likes: (currentData.likes || 0) + 1 })
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Update error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    // 🔄 刷新所有语言版本的 Gallery 页面和图片详情页缓存
    const languages = ['en', 'zh', 'es', 'id', 'ja']
    
    // Gallery 页面需要刷新（因为排序可能改变）
    for (const lang of languages) {
      revalidatePath(`/${lang}/gallery`, 'page')
    }
    
    // 图片详情页需要刷新（显示新的点赞数）
    for (const lang of languages) {
      revalidatePath(`/${lang}/gallery/${id}`, 'page')
    }
    
    // 返回更新后的点赞数
    return NextResponse.json({ 
      data, 
      likes: data.likes,
      success: true 
    }, { status: 200 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

