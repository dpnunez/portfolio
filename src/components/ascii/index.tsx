import { cn } from '@/lib/utils'

interface ComputerBackgroundProps {
  className?: string
  children: string
}
export function ASCII({ className, children }: ComputerBackgroundProps) {
  return (
    <pre
      data-testid="ascii"
      className={cn('text-2xl pointer-events-none', className)}
    >
      {children}
    </pre>
  )
}
