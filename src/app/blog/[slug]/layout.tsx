import { Editor } from '@/components'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Editor.CodeSide fullSize className="p-0 relative">
      <div className="flex justify-between w-full absolute backdrop-blur-lg dark:bg-zinc-950/60 bg-zinc-100/50">
        <Link
          className="flex items-center gap-2 hover:bg-foreground/5 px-4 py-2 rounded-md transition-all m-4"
          href="/blog"
        >
          <ChevronLeftIcon />
          Back
        </Link>
      </div>
      <div className="overflow-auto w-full pt-20">
        <div className="mx-auto max-w-4xl px-10">{children}</div>
      </div>
    </Editor.CodeSide>
  )
}
