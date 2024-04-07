import { Skeleton } from '@/components'
import { generateRandomWidth } from '@/lib/utils'

export default function Loading() {
  return Array.from({
    length: 20,
  }).map((_, i) => (
    <div key={i} className="flex flex-col gap-2">
      <Skeleton className="w-full aspect-video rounded-xl mb-2" />
      <Skeleton className="h-5 w-full rounded-full animate-pulse" />
      <Skeleton
        style={{
          width: generateRandomWidth(10, 96) + '%',
        }}
        className="h-5 rounded-full animate-pulse"
      />
    </div>
  ))
}
