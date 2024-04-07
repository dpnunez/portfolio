import { Editor, ContactForm } from '@/components'
import { menu } from '@/constants/menu'

export default function Page() {
  const files = menu.find((e) => e.name === '/contact')?.subItems ?? []

  return (
    <>
      <Editor.FileTreeSide>
        <Editor.Navigation.FileTreePanelCollapse
          defaultOpen={true}
          title="Contact"
          data={files}
        />
      </Editor.FileTreeSide>
      <Editor.CodeSide>
        <ContactForm />
      </Editor.CodeSide>
    </>
  )
}
