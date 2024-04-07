import ky from 'ky'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      slug: string
    }
  },
) {
  try {
    const { slug } = params

    const data = await ky(
      `https://dev.to/api/articles/${process.env.DEV_TO_USERNAME}/${slug}`,
    ).json<PostWithContent>()

    return NextResponse.json({
      data,
    })
  } catch {
    return NextResponse.json({
      error: {
        message: 'Post not found',
      },
    })
  }
}
