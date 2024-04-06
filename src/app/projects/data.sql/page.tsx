import { ProjectsList } from '@/components/routes/projects/list'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <ProjectsList />
    </Suspense>
  )
}
