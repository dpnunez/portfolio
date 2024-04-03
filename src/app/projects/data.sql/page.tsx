import { Editor, ProjectsFilter } from '@/components'

export default function Page() {
  return (
    <>
      <Editor.FileTreeSide>
        <ProjectsFilter />
      </Editor.FileTreeSide>
      <Editor.CodeSide>b</Editor.CodeSide>
    </>
  )
}
