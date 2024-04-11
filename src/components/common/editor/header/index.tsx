import Link from 'next/link'
import { ToggleTheme, Editor } from '@/components'
import { menu } from '@/constants/menu'

export function Header() {
  return (
    <header className="col-span-4 grid row-span-1 md:grid-cols-editor-desktop max-w-full">
      <Editor.FileTreeSide className="flex items-center justify-center border-b border-editor-divider relative">
        <Link href="/">
          <h1 className="text-lg group">
            <span className="text-editor-primary font-bold">whoami</span>
            <span className="opacity-60 italic group-hover:opacity-100 group-hover:text-editor-secondary group-hover:font-bold transition-all">
              {' > '}dpnunez
            </span>
          </h1>
        </Link>
        <div className="md:hidden absolute right-4">
          <Editor.Navigation.Mobile />
        </div>
      </Editor.FileTreeSide>
      <Editor.CodeSide className="border-b border-editor-divider justify-between hidden md:flex p-0">
        <Editor.Navigation.Desktop items={menu} />
        <ToggleTheme />
      </Editor.CodeSide>
    </header>
  )
}
