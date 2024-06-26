import { NextAuthProvider } from '@/providers/nextauth-provider'
import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'
import { authOptions } from '@/lib/nextAuth'

export const metadata: Metadata = {
  title: '~/guest-book/data.sql',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return <NextAuthProvider session={session}>{children}</NextAuthProvider>
}
