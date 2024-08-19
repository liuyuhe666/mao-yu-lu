import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  // 获取总数
  const count = await prisma.mao.count()
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
