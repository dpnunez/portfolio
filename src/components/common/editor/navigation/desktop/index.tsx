'use client'

import Link from 'next/link'
import { Separator } from '@/components'
import { usePathname } from 'next/navigation'
import { anim, cn } from '@/lib/utils'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { indicator } from './anim'

interface DesktopNavigationProps {
  items: MenuItem[]
}

export function Desktop({ items }: DesktopNavigationProps) {
  return (
    <nav className="flex items-center h-full overflow-auto">
      {items.map((item, index) => (
        <MenuItem key={index} href={item.href} name={item.name}>
          {item.label}
        </MenuItem>
      ))}
    </nav>
  )
}

function MenuItem({
  href,
  children,
  name,
}: {
  href: string
  children: React.ReactNode
  name: string
}) {
  const [hover, setHover] = useState(false)
  const pathname = usePathname()
  const isActive = pathname.includes(name)

  return (
    <>
      <motion.div
        className="relative overflow-hidden h-full flex items-center"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <Link
          className={cn(
            'opacity-60 transition-opacity duration-200 hover:opacity-100 h-full flex items-center px-6',
            {
              'opacity-100': isActive,
            },
          )}
          href={href}
        >
          {children}
        </Link>
        <motion.div
          className="bg-slate-100 h-[1px] w-full absolute bottom-0"
          {...anim({
            variants: indicator,
            custom: hover || isActive,
          })}
        />
      </motion.div>
      <Separator orientation="vertical" />
    </>
  )
}
