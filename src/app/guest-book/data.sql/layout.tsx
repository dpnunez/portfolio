import { NextAuthProvider } from '@/providers/nextauth-provider'
import { getServerSession } from 'next-auth'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return <NextAuthProvider session={session}>{children}</NextAuthProvider>
}
