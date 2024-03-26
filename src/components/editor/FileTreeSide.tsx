import { cn } from '@/lib/utils'

interface FileTreeSideProps {
  children: React.ReactNode
  className?: string
}

export function FileTreeSide({ children, className }: FileTreeSideProps) {
  return (
    <div
      className={cn(
        'md:col-span-1 dark:bg-zinc-900/75 bg-zinc-100/40',
        className,
      )}
    >
      {children}
    </div>
  )
}
