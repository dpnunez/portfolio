'use client'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Popover, PopoverTrigger, PopoverContent } from '../poppover'
import { Button } from '../button'
import { toast } from 'sonner'

export function ToggleTheme() {
  const [openConfirm, setOpenConfirm] = useState(false)
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
        <div className="flex items-center text-md">
          <Popover open={openConfirm} onOpenChange={setOpenConfirm}>
            <PopoverTrigger disabled={theme === 'light'}>
              <IconWrapper
                action={() => setOpenConfirm(true)}
                active={theme === 'light'}
              >
                <SunIcon />
              </IconWrapper>
            </PopoverTrigger>
            <ConfirmPoppover
              onClose={() => setOpenConfirm(false)}
              onConfirm={() => setTheme('light')}
            />
          </Popover>
        </div>
        <div className="flex items-center text-md">
          <IconWrapper
            action={() => setTheme('dark')}
            active={theme === 'dark'}
          >
            <MoonIcon />
          </IconWrapper>
        </div>
      </div>
    </motion.div>
  )
}

interface ConfirmPoppoverProps {
  onClose: () => void
  onConfirm: () => void
}

function ConfirmPoppover({ onClose, onConfirm }: ConfirmPoppoverProps) {
  return (
    <PopoverContent className="flex flex-col gap-6">
      <p>Are you sure that you want to drop a flash bang?</p>
      <div className="flex gap-4">
        <Button variant="outline" className="flex-1" onClick={onClose}>
          Cancel
        </Button>
        <Button
          className="flex-1"
          variant="secondary"
          onClick={() => {
            onConfirm()
            toast(
              <div className="flex flex-col">
                &apos;Throwing flashbang!&apos;{' '}
                <span className="opacity-60 italic">- cs teammate</span>
              </div>,
              {
                duration: 2000,
              },
            )
            onClose()
          }}
        >
          Yes
        </Button>
      </div>
    </PopoverContent>
  )
}

interface IconWrapperProps {
  children: React.ReactNode
  active: boolean
  action: () => void
}

function IconWrapper({
  children,
  active: externalActive,
  action,
  ...props
}: IconWrapperProps) {
  const [active, setActive] = useState(false)

  // To Prevent Hydratation Mismatch
  useEffect(() => {
    setActive(externalActive)
  }, [externalActive])

  return (
    <motion.div
      {...props}
      onClick={() => {
        if (!active && action) {
          action()
        }
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
      className={cn('flex text-md items-center p-1 cursor-pointer', {
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
    </motion.div>
  )
}

export default ToggleTheme
