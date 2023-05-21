import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }
  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="before:h-px before:w-5 before:bg-gray-50 flex items-center gap-2 -ml-8 text-sm text-gray-100">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>

            <Image
              src={memory.coverUrl}
              width={592}
              height={280}
              className="aspect-video object-cover w-full rounded-lg"
              alt=""
            />

            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>

            <Link
              className="hover::text-gray-100 flex items-center gap-2 text-sm text-gray-200"
              href={`/memories/${memory.id}`}
            >
              Ler Mais
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
