import { Spinner } from '@/components'
import { cn } from '@/lib/utils'

export function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full h-full flex items-center justify-center',
        className,
      )}
    >
      <Spinner />
    </div>
  )
}
