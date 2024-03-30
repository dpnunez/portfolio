import { api } from '@/lib/api'
import { ContactFormBody } from '@/types/forms'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data: ContactFormBody = await req.json()

  try {
    await api.post(process.env.URL + '/api/captcha', {
      json: {
        token: data.captcha_token,
      },
    })

    return NextResponse.json(
      {
        message: 'Message sent successfully.',
      },
      {
        status: 200,
      },
    )
  } catch (err) {
    const error = err as ErrorApi
    return NextResponse.json(
      {
        error: {
          message: error.message,
        },
      },
      {
        status: 401,
      },
    )
  }
}
