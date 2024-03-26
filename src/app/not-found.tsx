import { Editor } from '@/components'

export default function Page() {
  return (
    <Editor.CodeSide fullSize className="items-center justify-center">
      <span className="text-2xl italic font-bold text-pink-500 opacity-50">
        File not found
      </span>
      <span className="text-8xl italic font-bold text-pink-500 opacity-50">
        404
      </span>
    </Editor.CodeSide>
  )
}
