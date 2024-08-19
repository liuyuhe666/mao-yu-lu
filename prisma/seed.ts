import process from 'node:process'
import path from 'node:path'
import fs from 'node:fs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // eslint-disable-next-line no-console
  console.log('Start seeding ...')
  const filePath = path.join(process.cwd(), 'data', 'maoyulu.txt')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const textList = fileContent.split('\n')
  for (const text of textList) {
    const result = await prisma.mao.create({
      data: {
        content: text.trim(),
      },
    })
    // eslint-disable-next-line no-console
    console.log(result.id)
  }
}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
