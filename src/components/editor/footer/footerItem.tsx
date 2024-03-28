import { cn } from '@/lib/utils'

interface FooterItemProps {
  children: React.ReactNode
  className?: string
}

export function FooterItem({ children, className }: FooterItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer',
        className,
      )}
    >
      {children}
    </div>
  )
}
