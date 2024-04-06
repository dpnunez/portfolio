import { Editor, GuestBookList, GuestBookForm } from '@/components'
import { api } from '@/lib/api'
import { GuestBookProvider } from '@/providers/guest-book'
import { headers } from 'next/headers'

export default async function Page() {
  const { data: canSend } = await api
    .get('api/guest-book/can-write', { headers: headers() })
    .json<ResponseApi<boolean>>()

  return (
    <Editor.CodeSide fullSize className="px-16 flex-col gap-4">
      <GuestBookProvider>
        <GuestBookForm hasSigned={!canSend} />
        <GuestBookList />
      </GuestBookProvider>
    </Editor.CodeSide>
  )
}
