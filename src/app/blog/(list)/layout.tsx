import { Editor } from '@/components'
import { InfoCircledIcon } from '@radix-ui/react-icons'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Editor.CodeSide fullSize className="flex-col p-20 pt-10">
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-4xl font-bold">Posts</h1>
        <div className="flex items-center gap-2">
          <InfoCircledIcon className="w-6 h-6" />
          Powered by dev.to API
        </div>
      </div>
      <div className="gap-10 grid grid-cols-4">{children}</div>
    </Editor.CodeSide>
  )
}
