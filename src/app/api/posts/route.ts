import ky from 'ky'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await ky
      .get('https://dev.to/api/articles', {
        searchParams: {
          username: process.env.DEV_TO_USERNAME,
          per_page: 1000,
        },
      })
      .json<Post[]>()

    const posts = res.map((post) => ({
      title: post.title,
      description: post.description,
      slug: post.slug,
      isDraft: !post.published,
      publishedAt: post.published_at,
      externalUrl: post.url,
      cover_image: post.cover_image,
    }))

    return NextResponse.json({
      data: posts,
    })
  } catch {
    return NextResponse.json(
      {
        error: {
          message: 'An error occurred while fetching the posts',
        },
      },
      {
        status: 400,
      },
    )
  }
}
