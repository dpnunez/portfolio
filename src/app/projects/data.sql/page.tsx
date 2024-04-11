import { ProjectsList } from '@/components/routes/projects/list'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '~/projects/data.sql',
}

export default function Page() {
  return <ProjectsList />
}
