import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-col flex-1 gap-4 p-16">
      <Link
        href="/"
        className="hover:text-gray-100 flex items-center gap-1 text-sm text-gray-200"
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
