import { Skeleton } from '@/components'

export default async function Loader() {
  return (
    <div>
      <Skeleton className="rounded-3xl mb-4 aspect-video overflow-hidden object-conver" />
      <Skeleton className="h-10 w-full rounded-full mb-20" />

      {Array.from({
        length: 10,
      }).map((_, i) => (
        <Skeleton
          key={i}
          style={{
            width: Math.floor(Math.random() * 100) + '%',
          }}
          className="h-5 rounded-full mb-4"
        />
      ))}
    </div>
  )
}
