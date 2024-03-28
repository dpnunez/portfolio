import { Editor } from '@/components'
import { PrismLight } from 'react-syntax-highlighter'

export default function Page() {
  const example = `import { Editor } from '@/components'\nimport { menu } from '@/constants/data'
    
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
}`
  return (
    <Editor.EnterCode>
      <PrismLight
        showLineNumbers
        className="!bg-transparent"
        language="javascript"
      >
        {example}
      </PrismLight>
    </Editor.EnterCode>
  )
}
