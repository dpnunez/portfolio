import { cn } from '@/lib/utils'
import { FileIcon } from '@radix-ui/react-icons'

export function FileName({
  children,
  icon = <FileIcon />,
  className,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn('opacity-35 italic flex items-center gap-2', className)}
    >
      {icon}
      {children}
    </span>
  )
}
