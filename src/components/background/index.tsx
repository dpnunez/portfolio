import { cn } from '@/lib/utils'

interface BackgroundProps {
  children: React.ReactNode
  className?: string
}

export function Background({ children, className }: BackgroundProps) {
  return (
    <div
      className={cn(
        'w-full min-h-screen h-full flex items-center justify-center',
        className,
      )}
    >
      <div className="dark:bg-blue-900 bg-cyan-100 absolute w-full h-full" />
      <div className="bg-noise-pattern absolute w-full h-full opacity-20 pointer-events-none" />
      {children}
    </div>
  )
}
