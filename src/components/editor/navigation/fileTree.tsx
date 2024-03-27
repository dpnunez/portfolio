'use client'

import { Separator } from '@/components'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaChevronDown, FaFile, FaFolder, FaFolderOpen } from 'react-icons/fa'

interface FileTreeData {
  data: MenuItem[]
}

interface NavigationItemProps extends MotionProps {
  idx: number
  len: number
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

interface NavigationFolderProps extends NavigationItemProps {
  data: MenuItem[]
}

function NavigationItem({ children, idx, len, ...props }: NavigationItemProps) {
  const Element = props.onClick ? motion.button : motion.div
  return (
    <Element
      className="cursor-pointer flex gap-2 items-center select-none mx-4 flex-1 hover:bg-foreground/5 transition-colors rounded-md my-1"
      {...props}
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.1 * idx + 0.2,
        },
      }}
      exit={{
        opacity: 0,
        x: -10,
        transition: {
          duration: 0.1 * (len - idx),
        },
      }}
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
              initial={{
                height: 0,
              }}
              animate={{
                height: 'auto',
              }}
              exit={{
                height: 0,
              }}
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
      <Link key={item.name} href={item.href}>
        <NavigationItem idx={i} len={data.length}>
          <FaFile />
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
        <motion.div
          animate={
            open
              ? {
                  rotate: 180,
                }
              : {
                  rotate: 0,
                }
          }
        >
          <FaChevronDown />
        </motion.div>
      </button>
      {open && <Separator />}
      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden flex flex-col"
            initial={{
              height: 0,
            }}
            animate={{
              height: 'auto',
            }}
            exit={{
              height: 0,
              transition: {
                delay: 0.1,
              },
            }}
          >
            <FileTreeNavigation data={data} />
          </motion.div>
        )}
      </AnimatePresence>
      <Separator />
    </>
  )
}
