import { NextRequest, NextResponse } from 'next/server'
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
    
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

