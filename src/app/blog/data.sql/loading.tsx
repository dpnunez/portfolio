import { Card, Skeleton } from '@/components'
import { generateRandomWidth } from '@/lib/utils'

export default function Loading() {
  return Array.from({
    length: 20,
  }).map((_, i) => (
    <Card
      key={i}
      secondaryTitle={
        <div>
          <Skeleton className="h-5 w-full rounded-full animate-pulse mb-2" />
          <Skeleton
            style={{
              width: generateRandomWidth(10, 96) + '%',
            }}
            className="h-5 rounded-full animate-pulse"
          />
        </div>
      }
    />
  ))
}
