import { api } from '@/lib/api'
import prisma from '@/lib/db'
import { transporter } from '@/lib/mailer'
import { ContactFormBody } from '@/types/forms'
import { contactSchema } from '@/validations'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data: ContactFormBody = await req.json()

  try {
    await api.post('api/captcha', {
      json: {
        token: data.captcha_token,
      },
    })

    const validInput = contactSchema.safeParse(data)
    if (!validInput.success) {
      return NextResponse.json(
        {
          error: {
            message: 'Invalid entries, please check the form.',
          },
        },
        {
          status: 401,
        },
      )
    }

    await Promise.all([
      prisma.contactMessage.create({
        data: {
          message: data.message,
          name: data.name,
          email: data.email,
        },
      }),
      transporter.sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: '[Portfolio] Contact form submission',
        html: `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `,
      }),
    ])

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
          message: error.message || 'Error sending your message.',
        },
      },
      {
        status: 401,
      },
    )
  }
}
