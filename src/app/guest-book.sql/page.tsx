import { Editor } from '@/components'
import { BookGuestForm } from '@/components/forms'

export default function Page() {
  return (
    <Editor.CodeSide fullSize className="mx-16">
      <BookGuestForm />
    </Editor.CodeSide>
  )
}
