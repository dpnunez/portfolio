import { Editor, ProjectsFilter } from '@/components'
import { Suspense } from 'react'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Editor.FileTreeSide>
        <Suspense fallback={<div>loading</div>}>
          <ProjectsFilter />
        </Suspense>
      </Editor.FileTreeSide>
      <Editor.CodeSide className="flex-col p-0">{children}</Editor.CodeSide>
    </>
  )
}
