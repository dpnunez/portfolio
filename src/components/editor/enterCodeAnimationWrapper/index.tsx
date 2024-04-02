import { cn } from '@/lib/utils'

interface EnterCode {
  children: React.ReactNode
  className?: string
}

export function EnterCode({ children, className }: EnterCode) {
  return (
    <div
      className={cn('w-full', className)}
      style={{
        perspective: 1000,
      }}
    >
      <div className="animate-open-file">{children}</div>
    </div>
  )
}
