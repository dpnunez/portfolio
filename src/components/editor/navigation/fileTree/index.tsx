'use client'

import { Separator } from '@/components'
import { anim, cn } from '@/lib/utils'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaChevronDown, FaFile, FaFolder, FaFolderOpen } from 'react-icons/fa'
import { containerAnim, folderAnim, navigationItem, panelAnim } from './anim'

interface FileTreeData {
  data: MenuItem[]
}

interface NavigationItemProps extends MotionProps {
  idx: number
  len: number
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

interface NavigationFolderProps extends NavigationItemProps {
  data: MenuItem[]
}

function NavigationItem({
  children,
  idx,
  len,
  href,
  ...props
}: NavigationItemProps) {
  const Element = props.onClick ? motion.button : motion.div
  const path = usePathname()
  const active = path === href

  return (
    <Element
      className={cn(
        'cursor-pointer flex gap-2 items-center select-none px-4 flex-1 hover:bg-foreground/5 transition-colors my-[2px] py-1',
        {
          'bg-foreground/5': active,
        },
      )}
      {...props}
      {...anim({ variants: navigationItem, custom: { idx, len } })}
    >
      {children}
    </Element>
  )
}

function NavigationFolder({ children, data, ...props }: NavigationFolderProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <NavigationItem {...props} onClick={() => setOpen(!open)}>
        {open ? <FaFolderOpen /> : <FaFolder />}
        {children}
      </NavigationItem>
      <div className="pl-6">
        <AnimatePresence>
          {open && (
            <motion.div
              className="overflow-hidden"
              {...anim({ variants: folderAnim })}
            >
              <FileTreeNavigation data={data} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export function FileTreeNavigation({ data }: FileTreeData) {
  return data.map((item, i) => {
    if (item.subItems !== undefined) {
      return (
        <NavigationFolder
          len={data.length}
          idx={i}
          data={item.subItems}
          key={item.name}
        >
          {item.name}
        </NavigationFolder>
      )
    }

    return (
      <Link key={item.name} href={item.href} target={item.target}>
        <NavigationItem href={item.href} idx={i} len={data.length}>
          {item.Icon ?? <FaFile />}
          {item.name}
        </NavigationItem>
      </Link>
    )
  })
}

interface PanelProps extends FileTreeData {
  title: string
  defaultOpen?: boolean
}

export function FileTreePanelCollapse({
  title,
  data,
  defaultOpen = true,
}: PanelProps) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <>
      <button
        className="hover:bg-foreground/5 p-2 px-4 flex justify-between items-center"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {title}
        <motion.div {...anim({ variants: panelAnim, custom: open })}>
          <FaChevronDown />
        </motion.div>
      </button>
      {open && <Separator />}
      <AnimatePresence initial={false} mode="sync">
        {open && (
          <motion.div
            className="overflow-hidden flex flex-col"
            {...anim({
              variants: containerAnim,
            })}
          >
            <AnimatePresence>
              <FileTreeNavigation data={data} />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <Separator />
    </>
  )
}
