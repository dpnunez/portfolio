import { Card } from '@/components'
import { api } from '@/lib/api'

export default async function Page() {
  const { data } = await api.get(`api/posts`).json<ResponseApi<Post[]>>()

  return data.map((post) => (
    <Card
      href={`/blog/${post.slug}`}
      key={post.slug}
      image={post.cover_image}
      secondaryTitle={post.title}
    />
  ))
}
