import { Editor, GuestBookList, GuestBookForm } from '@/components'
import { GuestBookProvider } from '@/providers/guest-book'

export default async function Page() {
  return (
    <Editor.CodeSide fullSize className="px-16 flex-col gap-4">
      <GuestBookProvider>
        <GuestBookForm />
        <GuestBookList />
      </GuestBookProvider>
    </Editor.CodeSide>
  )
}
