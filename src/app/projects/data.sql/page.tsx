import { Editor, ProjectsFilter } from '@/components'
import { ProjectsList } from '@/components/projectsList'

export default function Page() {
  return (
    <>
      <Editor.FileTreeSide>
        <ProjectsFilter />
      </Editor.FileTreeSide>
      <Editor.CodeSide>
        <ProjectsList />
      </Editor.CodeSide>
    </>
  )
}
