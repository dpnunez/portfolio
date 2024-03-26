'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItemProps {
  children: React.ReactNode
  href: string
}

export function MenuItem({ children, href }: MenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname.includes(href)

  return (
    <Link
      className={cn('px-10 opacity-50 hover:opacity-100 transition-opacity', {
        'opacity-100': isActive,
      })}
      href={href}
    >
      {children}
    </Link>
  )
}
