import { Editor, ProjectsFilter } from '@/components'
import { Suspense } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Editor.Loading fullSize />}>
      <Editor.FileTreeSide>
        <ProjectsFilter />
      </Editor.FileTreeSide>
      <Editor.CodeSide className="flex-col p-0">{children}</Editor.CodeSide>
    </Suspense>
  )
}
