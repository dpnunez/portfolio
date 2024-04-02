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
        'dark:bg-zinc-950 bg-zinc-100/90 max-w-full overflow-auto flex px-2 py-5',
        { 'md:col-span-3': !fullSize, 'md:col-span-4': fullSize },
        className,
      )}
    >
      {children}
    </div>
  )
}
