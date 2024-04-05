import { ProjectsList } from '@/components/projectsList'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <ProjectsList />
    </Suspense>
  )
}
