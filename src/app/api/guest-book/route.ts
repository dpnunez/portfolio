import prisma from '@/lib/db'
import { authOptions } from '@/lib/nextAuth'
import { bookGuestForm } from '@/validations'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session)
    return NextResponse.json(
      {
        error: {
          message: 'Please sign in with github to continue',
        },
      },
      {
        status: 401,
      },
    )

  const data = await req.json()
  const validInput = bookGuestForm.safeParse(data).success

  if (!validInput)
    return NextResponse.json(
      {
        error: {
          message: 'Message is required',
        },
      },
      { status: 400 },
    )

  const githubUsername = session.user.username
  const message = data.message

  try {
    const res = await prisma.bookGuest.create({
      data: {
        id: githubUsername,
        message,
      },
    })

    return NextResponse.json({
      data: res,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          message:
            'Error sending your message, remember you can only send one message on book guest.',
        },
      },
      { status: 500 },
    )
  }

  return NextResponse.json({ message: 'Email sent' })
}

export async function DELETE() {
  const session = await getServerSession(authOptions)

  if (!session)
    return NextResponse.json(
      {
        error: {
          message: 'Please sign in with github to continue',
        },
      },
      {
        status: 401,
      },
    )

  const githubUsername = session.user.username

  try {
    await prisma.bookGuest.delete({
      where: {
        id: githubUsername,
      },
    })

    return NextResponse.json({
      data: {
        id: githubUsername,
      },
    })
  } catch {
    return NextResponse.json(
      {
        error: {
          message: 'Error deleting your message',
        },
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  const messages = await prisma.bookGuest.findMany()

  return NextResponse.json({
    data: messages,
  })
}
