import { Card } from '@/components'
import { api } from '@/lib/api'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '~/blog/data.sql',
}

export default async function Page() {
  const { data } = await api.get(`api/posts`).json<ResponseApi<Post[]>>()

  if (data.length === 0) {
    return (
      <h1 className="text-4xl italic font-bold text-pink-500 opacity-50 col-span-4 w-full items-center justify-center flex flex-col">
        No posts found
      </h1>
    )
  }

  return data.map((post) => (
    <div className="col-span-1" key={post.slug}>
      <Card
        href={`/blog/${post.slug}`}
        image={post.cover_image}
        secondaryTitle={post.title}
      />
    </div>
  ))
}
