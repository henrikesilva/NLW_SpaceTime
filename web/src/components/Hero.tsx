import Image from 'next/image'

import nwlLogo from '../assets/nwl-spaceTime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nwlLogo} alt="NWL Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-gray-50 text-5xl font-bold leading-tight">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        className="font-alt hover:bg-green-600 inline-block px-5 py-3 text-sm leading-none text-black uppercase bg-green-500 rounded-full"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
