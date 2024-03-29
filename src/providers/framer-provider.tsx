'use client'

import { MotionConfig } from 'framer-motion'

interface MotionProviderProps {
  children: React.ReactNode
}

export function FramerGlobalConfig({ children }: MotionProviderProps) {
  return <MotionConfig transition={{ bounce: 0 }}>{children}</MotionConfig>
}
