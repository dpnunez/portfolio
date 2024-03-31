import { api } from '@/lib/api'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data: { token: string } = await req.json()
  const token = data.token

  try {
    const formData = new FormData()
    formData.append('secret', process.env.TURNSTILE_SECRET)
    formData.append('response', token)

    const res = await api.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        body: formData,
      },
    )
    const data = await res.json<{ success: boolean; message?: string }>()

    if (data.success) {
      return NextResponse.json(
        { ok: true },
        {
          status: 200,
        },
      )
    } else {
      throw new Error()
    }
  } catch (err) {
    return NextResponse.json(
      {
        error: {
          message: 'Captcha verification failed.',
        },
      },
      {
        status: 401,
      },
    )
  }
}
