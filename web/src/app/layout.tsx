import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

import { cookies } from 'next/headers'
import { Profile } from '@/components/Profile'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'Uma capsula do tempo construida com React, Next,js, TailwindCSS e Typescript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="px-28 border-white/10 relative flex flex-col items-start justify-between py-16 overflow-hidden border-r bg-[url(../assets/bg-stars.svg)] bg-cover">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            {/* Stripes */}
            <div className="bg-stripes right-2 absolute top-0 bottom-0 w-2" />

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
