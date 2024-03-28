import { cn } from '@/lib/utils'

interface CodeSideProps {
  children: React.ReactNode
  className?: string
  fullSize?: boolean
}

export function CodeSide({
  children,
  className,
  fullSize = false,
}: CodeSideProps) {
  return (
    <div
      className={cn(
        'dark:bg-zinc-900/95 bg-zinc-100/90 max-w-full overflow-auto flex',
        { 'md:col-span-3': !fullSize, 'md:col-span-4': fullSize },
        className,
      )}
    >
      {children}
    </div>
  )
}
