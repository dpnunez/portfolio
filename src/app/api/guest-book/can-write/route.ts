import prisma from '@/lib/db'
import { authOptions } from '@/lib/nextAuth'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user.username)
    return NextResponse.json({
      data: true,
    })

  const username = session.user.username

  const hasBookGuessed = await prisma.bookGuest.findUnique({
    where: {
      id: username,
    },
  })

  return NextResponse.json({
    data: !hasBookGuessed,
  })
}
