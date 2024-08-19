'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

// eslint-disable-next-line node/prefer-global/process
const apiBaseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_BASE_URL : 'http://localhost:3000'

export default function Home() {
  const [text, setText] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const text = await fetch(`${apiBaseUrl}/api/mao`, { cache: 'no-store' }).then(
        res => res.json(),
      ).then(
        data => data.data,
      ).then(
        data => data.content,
      )
      setText(text)
    }

    fetchData()

    const timer = setInterval(fetchData, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl sm:flex grow-0 items-center justify-between font-mono text-sm">
        <p className="hidden sm:block p-4 text-center overflow-hidden rounded-md bg-slate-50">
          数据接口:&nbsp;
          <code className="font-mono font-bold">{`${apiBaseUrl}/api/mao`}</code>
        </p>
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="w-full max-w-5xl h-full flex flex-col justify-center grow">
        <div className="text-2xl font-semibold text-white text-left">『</div>
        <div className="p-8 text-2xl font-semibold text-white text-center">{text}</div>
        <div className="text-2xl font-semibold text-white text-right">』</div>
      </div>
    </main>
  )
}
