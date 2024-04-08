import { Editor } from '@/components'
import { InfoCircledIcon } from '@radix-ui/react-icons'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Editor.CodeSide fullSize className="flex-col md:p-20 md:pt-10 p-5 pt-10">
      <Editor.EnterCode>
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
          <h1 className="text-4xl font-bold">Posts</h1>
          <div className="flex items-center gap-2">
            <InfoCircledIcon className="w-6 h-6" />
            Powered by dev.to API
          </div>
        </div>
        <div className="gap-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {children}
        </div>
      </Editor.EnterCode>
    </Editor.CodeSide>
  )
}
