import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '疯狂的旺佐',
  description: '毛主席语录',
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
