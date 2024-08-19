import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page')
  const pageSize = searchParams.get('size')
  // 获取总数
  const count = await prisma.mao.count()
  if (page && pageSize) {
    try {
      const result = await prisma.mao.findMany({
        skip: (Number(page) - 1) * Number(pageSize),
        take: Number(pageSize),
      })
      return NextResponse.json({
        code: 0,
        msg: '成功',
        data: result,
        total: count,
      })
    }
    catch (e) {
      console.error(e)
      return NextResponse.json({
        code: -1,
        msg: '失败',
        data: null,
      })
    }
  }
  // 生成一个随机索引
  const randomIndex = Math.floor(Math.random() * count)
  // 根据随机索引获取数据
  const result = await prisma.mao.findMany({
    skip: randomIndex,
    take: 1,
  })
  return NextResponse.json({
    code: 0,
    msg: '成功',
    data: result[0],
  })
}
