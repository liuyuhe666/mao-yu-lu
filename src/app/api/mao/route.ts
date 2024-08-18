import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { NextResponse } from 'next/server'

const filePath = path.join(process.cwd(), 'public', 'data', 'maoyulu.txt')
const fileContent = fs.readFileSync(filePath, 'utf-8')
const textList = fileContent.split('\n')

export async function GET() {
  const index = Math.floor(Math.random() * textList.length)
  const text = textList[index].trim()
  return NextResponse.json({
    code: 0,
    msg: '成功',
    data: text,
  }, {
    headers: {
      'Cache-Control': 'no-store', // 完全不缓存数据
    },
  })
}
