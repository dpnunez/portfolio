import { Editor, ProjectsFilter } from '@/components'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Editor.FileTreeSide>
        <ProjectsFilter />
      </Editor.FileTreeSide>
      <Editor.CodeSide className="flex-col p-0">{children}</Editor.CodeSide>
    </>
  )
}
