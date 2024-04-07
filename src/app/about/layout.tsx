import { Editor } from '@/components'
import { menu } from '@/constants/menu'

export default function Layout({ children }: { children: React.ReactNode }) {
  const subitems = menu.find((item) => item.name === '/about')?.subItems ?? []
  return (
    <>
      <Editor.FileTreeSide>
        <Editor.Navigation.FileTreePanelCollapse
          defaultOpen={true}
          title="About"
          data={subitems}
        />
      </Editor.FileTreeSide>
      <Editor.CodeSide>{children}</Editor.CodeSide>
    </>
  )
}
