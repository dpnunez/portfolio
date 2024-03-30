import { cn } from '@/lib/utils'

interface EnterCode {
  children: React.ReactNode
  className?: string
}

export function EnterCode({ children, className }: EnterCode) {
  return (
    <div
      className={cn('my-5 mx-2 w-full', className)}
      style={{
        perspective: 1000,
      }}
    >
      <div className="animate-open-file">{children}</div>
    </div>
  )
}
