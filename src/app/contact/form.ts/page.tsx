import { Editor, ContactForm } from '@/components'
import { menu } from '@/constants/menu'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '~/contact/form.ts',
}

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
