'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { anim } from '@/lib/utils'
import { contentAnim, panelAnim } from './anim'
import { Separator } from '@/components'

interface PanelProps {
  defaultOpen: boolean
  title: string
  children: React.ReactNode
}

export function Panel({ defaultOpen, title, children }: PanelProps) {
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
              variants: contentAnim,
            })}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <Separator />
    </>
  )
}
