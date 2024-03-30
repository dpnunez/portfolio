import { cn } from '@/lib/utils'

interface FileTreeSideProps {
  children: React.ReactNode
  className?: string
  fullSize?: boolean
}

export function FileTreeSide({
  children,
  className,
  fullSize,
}: FileTreeSideProps) {
  return (
    <div
      className={cn(
        'md:col-span-1 dark:bg-zinc-900/80 bg-zinc-200/70 hidden md:flex flex-col border-r',
        className,
        {
          'md:col-span-1': !fullSize,
          'md:col-span-4': fullSize,
        },
      )}
    >
      {children}
    </div>
  )
}