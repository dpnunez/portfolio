import { api } from '@/lib/api'
import { solidGrayPlaceholder } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  const { data } = await api.get(`api/posts`).json<ResponseApi<Post[]>>()

  return data.map((post) => (
    <Link href={`/blog/${post.slug}`} key={post.slug}>
      {post.cover_image && (
        <Image
          className="rounded-xl aspect-video overflow-hidden object-cover object-center mb-2"
          placeholder="blur"
          blurDataURL={solidGrayPlaceholder}
          src={post.cover_image}
          alt={post.title}
          width={800}
          height={400}
          loading="lazy"
        />
      )}
      <h2 className="text-lg font-bold line-clamp-2">{post.title}</h2>
    </Link>
  ))
}
