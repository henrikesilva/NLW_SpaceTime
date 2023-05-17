import { User } from 'lucide-react'
import Image from 'next/image'

import nwlLogo from '../assets/nwl-spaceTime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="px-28 border-white/10 relative flex flex-col items-start justify-between py-16 overflow-hidden border-r bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="bg-stripes right-2 absolute top-0 bottom-0 w-2" />

        {/* SignIn */}
        <a href="" className="flex items-center gap-3 text-left">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full">
            <User className="w-5 h-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug hover:text-gray-50 transition-colors">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nwlLogo} alt="NWL Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-gray-50 text-5xl font-bold leading-tight">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            className="font-alt hover:bg-green-600 inline-block px-5 py-3 text-sm leading-none text-black uppercase bg-green-500 rounded-full"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            className="hover:text-gray-100 underline"
            href="https://rocketseat.com.br"
            rel="noreferrer"
          >
            Rocketseat
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex items-center justify-center flex-1">
          <p className="leading-relaxed text-center w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="hover:text-gray-50 underline">
              {' '}
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
