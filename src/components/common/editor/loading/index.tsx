import { Spinner } from '@/components'
import { cn } from '@/lib/utils'

export function Loading({
  className,
  fullSize,
}: {
  className?: string
  fullSize?: boolean
}) {
  return (
    <div
      className={cn(
        'w-full h-full flex items-center justify-center',
        {
          'col-span-4': fullSize,
        },
        className,
      )}
    >
      <Spinner />
    </div>
  )
}
