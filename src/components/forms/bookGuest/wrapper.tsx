'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { formStateAnim } from './anim'
import { anim } from '@/lib/utils'
import { Form } from './form'

interface GuestBookHeaderProps {
  hasSigned: boolean
}

export function GuestBookForm({ hasSigned }: GuestBookHeaderProps) {
  const [justSigned, setJustSigned] = useState(hasSigned)

  const wallMessage = hasSigned
    ? 'You have already signed the guest book, thank you!'
    : 'Thank you for sign my guest book!'

  return (
    <div className="w-full min-h-16">
      <AnimatePresence mode="wait" initial={false}>
        {justSigned ? (
          <motion.p
            key="message"
            {...anim({
              variants: formStateAnim,
            })}
          >
            {wallMessage}
          </motion.p>
        ) : (
          <motion.div
            {...anim({
              variants: formStateAnim,
            })}
            key="form"
          >
            <Form onSuccess={setJustSigned} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
