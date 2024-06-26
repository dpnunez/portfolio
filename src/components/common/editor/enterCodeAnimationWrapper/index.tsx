import { cn } from '@/lib/utils'

interface EnterCode {
  children: React.ReactNode
  className?: string
}

export function EnterCode({ children, className }: EnterCode) {
  return (
    <div className={cn('w-full h-fit animate-open-file', className)}>
      {children}
    </div>
  )
}
