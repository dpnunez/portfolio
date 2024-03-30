import { Editor, Forms } from '@/components'
import { CodeSide, FileTreeSide } from '@/components/editor'
import { menu } from '@/constants/data'

export default function Page() {
  const files = menu.find((e) => e.name === '/contact')?.subItems ?? []

  return (
    <>
      <FileTreeSide>
        <Editor.Navigation.FileTreePanelCollapse
          defaultOpen={true}
          title="Contact"
          data={files}
        />
      </FileTreeSide>
      <CodeSide>
        <Forms.ContactForm />
      </CodeSide>
    </>
  )
}
