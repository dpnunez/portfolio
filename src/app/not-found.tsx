import { Editor } from '@/components'

export default function Page() {
  return (
    <Editor.CodeSide fullSize className="items-center justify-center flex-col">
      <p className="text-2xl italic font-bold text-editor-primary opacity-50">
        File not found
      </p>
      <p className="text-8xl italic font-bold text-editor-primary opacity-50">
        404
      </p>
    </Editor.CodeSide>
  )
}
