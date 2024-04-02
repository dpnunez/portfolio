import { Editor } from '@/components'
import { BookGuestForm } from '@/components/forms'
import { api } from '@/lib/api'
import { headers } from 'next/headers'

export default async function Page() {
  const { data: canSend } = await api
    .get('api/book-guest/can-write', { headers: headers() })
    .json<ResponseApi<boolean>>()

  return (
    <Editor.CodeSide fullSize className="mx-16">
      <BookGuestForm canSend={canSend} />
    </Editor.CodeSide>
  )
}
