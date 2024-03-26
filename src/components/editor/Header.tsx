import Link from 'next/link'
import { FileTreeSide } from './FileTreeSide'
import { CodeSide } from './CodeSide'
import { Separator, ToggleTheme } from '@/components'
import { MenuItem } from './MenuItem'

export function Header() {
  return (
    <header className="col-span-4 grid row-span-1 md:grid-cols-editor">
      <FileTreeSide className="flex items-center justify-center border-b dark:border-white/10 border-zinc-500/30">
        <Link href="/">
          <h1 className="text-lg group">
            <span className="text-pink-500 font-bold">whoami</span>
            <span className="opacity-60 italic group-hover:opacity-100 transition-opacity">
              {' > '}dpnunez
            </span>
          </h1>
        </Link>
      </FileTreeSide>
      <CodeSide className="border-b dark:border-white/10 border-zinc-500/30 flex justify-between">
        <nav className="flex items-center h-full overflow-auto">
          <MenuItem href="/about">about_me.ts</MenuItem>
          <Separator orientation="vertical" />
          <MenuItem href="/projects">projects.ts</MenuItem>
          <Separator orientation="vertical" />
          <MenuItem href="/blog">blog.md</MenuItem>
          <Separator orientation="vertical" />
          <MenuItem href="/contact">contact.sql</MenuItem>
        </nav>
        <ToggleTheme />
      </CodeSide>
    </header>
  )
}
