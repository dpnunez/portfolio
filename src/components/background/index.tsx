import { cn } from '@/lib/utils'

interface BackgroundProps {
  children: React.ReactNode
  className?: string
}

export function Background({ children, className }: BackgroundProps) {
  return (
    <div
      className={cn(
        'w-full min-h-screen h-full bg-blue-700 flex items-center justify-center',
        className,
      )}
    >
      <div className="bg-noise-pattern absolute w-full h-full opacity-50 pointer-events-none" />
      {children}
    </div>
  )
}
