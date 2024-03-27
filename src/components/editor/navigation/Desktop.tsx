'use client'

import Link from 'next/link'
import { Separator } from '@/components'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface DesktopNavigationProps {
  items: MenuItem[]
}

export function Desktop({ items }: DesktopNavigationProps) {
  return (
    <nav className="flex items-center h-full overflow-auto">
      <Separator orientation="vertical" />
      {items.map((item, index) => (
        <MenuItem key={index} href={item.href}>
          {item.name}
        </MenuItem>
      ))}
    </nav>
  )
}

function MenuItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname.includes(href)

  return (
    <>
      <Link
        className={cn(
          'opacity-60 transition-opacity duration-200 hover:opacity-100 px-6',
          {
            'opacity-100': isActive,
          },
        )}
        href={href}
      >
        {children}
      </Link>
      <Separator orientation="vertical" />
    </>
  )
}
