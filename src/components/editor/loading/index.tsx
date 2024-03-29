import { Spinner } from '@/components'

export function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  )
}
