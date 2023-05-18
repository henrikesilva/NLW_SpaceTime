import { User } from 'lucide-react'

export function SignIn() {
  return (
    <a
      href={`http://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="hover:text-gray-50 flex items-center gap-3 text-left transition-colors"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full">
        <User className="w-5 h-5 text-gray-500" />
      </div>

      <p className="max-w-[140px] text-sm leading-snug">
        <span className="underline">Crie sua conta</span> e salve suas memórias!
      </p>
    </a>
  )
}
