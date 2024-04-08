'use client'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.div
      className="py-2 px-5 flex items-center"
      style={{
        perspective: '100px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="flex gap-6">
        <AnimatePresence initial={false}>
          <div className="flex items-center text-md">
            <IconWrapper
              action={() => setTheme('light')}
              active={theme === 'light'}
            >
              <SunIcon />
            </IconWrapper>
          </div>
          <div className="flex items-center text-md">
            <IconWrapper
              action={() => setTheme('dark')}
              active={theme === 'dark'}
            >
              <MoonIcon />
            </IconWrapper>
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function IconWrapper({
  children,
  active: externalActive,
  action,
}: {
  children: React.ReactNode
  active: boolean
  action: () => void
}) {
  const [active, setActive] = useState(false)

  // To Prevent Hydratation Mismatch
  useEffect(() => {
    setActive(externalActive)
  }, [externalActive])

  return (
    <motion.button
      onClick={() => {
        !active && action()
      }}
      animate={
        active
          ? {
              opacity: 0.2,
            }
          : {
              opacity: 1,
            }
      }
      className={cn('flex text-md items-center p-1', {
        'cursor-not-allowed': active,
      })}
    >
      <motion.div
        animate={
          !active
            ? {
                opacity: 0,
              }
            : {
                opacity: 1,
              }
        }
      >
        {'//'}
      </motion.div>
      {children}
    </motion.button>
  )
}

export default ToggleTheme
