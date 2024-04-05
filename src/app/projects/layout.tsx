import { Editor, ProjectsFilter } from '@/components'
import { Suspense } from 'react'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Editor.Loading />}>
      <Editor.FileTreeSide>
        <ProjectsFilter />
      </Editor.FileTreeSide>
      <Editor.CodeSide className="flex-col p-0">{children}</Editor.CodeSide>
    </Suspense>
  )
}
