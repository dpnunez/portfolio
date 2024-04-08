import ky from 'ky'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // change to /me to get the current user posts
    const res = await ky
      .get('https://dev.to/api/articles/me', {
        searchParams: {
          per_page: 1000,
        },
        headers: {
          'api-key': process.env.DEV_TO_API_KEY,
        },
      })
      .json<Post[]>()

    console.log(res)

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
