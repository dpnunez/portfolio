import { ProjectsList } from '@/components/routes/projects/list'
import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '~/projects/data.sql',
}

export default function Page() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <ProjectsList />
    </Suspense>
  )
}
