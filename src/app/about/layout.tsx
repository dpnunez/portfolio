import { Editor } from '@/components'
import { menu } from '@/constants/data'

export default function Layout({ children }: { children: React.ReactNode }) {
  const subitems = menu.find((item) => item.href === '/about')?.subItems ?? []
  return (
    <>
      <Editor.FileTreeSide className="flex-col">
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
