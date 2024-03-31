import { api } from '@/lib/api'
import { transporter } from '@/lib/mailer'
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

    transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: '[Portfolio] Contact form submission',
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
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
