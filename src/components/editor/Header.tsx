import Link from 'next/link'
import { FileTreeSide } from './fileTreeSide'
import { CodeSide } from './codeSide'
import { ToggleTheme } from '@/components'
import * as Navigation from './navigation'
import { menu } from '@/constants/data'

export function Header() {
  return (
    <header className="col-span-4 grid row-span-1 md:grid-cols-editor-desktop">
      <FileTreeSide className="flex items-center justify-center border-b dark:border-white/10 border-zinc-500/30 relative">
        <Link href="/">
          <h1 className="text-lg group">
            <span className="text-pink-500 font-bold">whoami</span>
            <span className="opacity-60 italic group-hover:opacity-100 transition-opacity group-hover:text-emerald-500 group-hover:font-bold transition-all">
              {' > '}dpnunez
            </span>
          </h1>
        </Link>
        <div className="md:hidden absolute right-4">
          <Navigation.Mobile />
        </div>
      </FileTreeSide>
      <CodeSide className="border-b dark:border-white/10 border-zinc-500/30 justify-between">
        <Navigation.Desktop items={menu} />
        <ToggleTheme />
      </CodeSide>
    </header>
  )
}
