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
        'md:col-span-1 bg-editor-background-secondary hidden md:flex flex-col border-r border-editor-divider',
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
