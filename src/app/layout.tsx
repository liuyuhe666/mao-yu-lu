import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '疯狂的网左',
  description: '随机一句毛语录',
  keywords: ['毛语录', '网左', '我的好朋友左左'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="bg-[url('/bg.jpg')] bg-cover bg-right">
          {children}
        </div>
      </body>
    </html>
  )
}
