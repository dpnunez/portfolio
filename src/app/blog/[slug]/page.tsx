import { api } from '@/lib/api'
import { generatePlaceholder } from '@/lib/images'
import { defaultMdxComponents } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import remarkGfm from 'remark-gfm'

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await api
    .get(`api/posts/${params.slug}`)
    .json<ResponseApi<PostWithContent>>()

  const { src: thumb, base64: placeholder } = await generatePlaceholder(
    data.cover_image,
  )

  return (
    <div className="mb-20">
      {thumb && (
        <Image
          placeholder="blur"
          blurDataURL={placeholder}
          className="rounded-3xl mb-4 aspect-video overflow-hidden object-cover"
          src={thumb}
          alt={data.title}
          width={1000}
          height={1000}
        />
      )}
      <h1 className="text-4xl font-bold mb-20">{data.title}</h1>
      <MDXRemote
        components={defaultMdxComponents}
        source={data.body_markdown}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { data } = await api
    .get(`api/posts/${params.slug}`)
    .json<ResponseApi<PostWithContent>>()

  return {
    title: data.title,
  }
}
