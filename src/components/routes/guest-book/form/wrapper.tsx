'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { formStateAnim } from './anim'
import { anim } from '@/lib/utils'
import { useGuestBook } from '@/providers/guest-book'

import { Form } from './form'
import { Loader } from './loading'

export function GuestBookForm() {
  const { status } = useGuestBook()

  const renderForm = () => {
    switch (status) {
      case 'just-signed':
        return 'Thank you for sign my guest book!'
      case 'previus-signed':
        return 'You have already signed the guest book, thank you!'
      case 'loading':
        return <Loader />
      default:
        return <Form />
    }
  }

  return (
    <div className="w-full min-h-16">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={status}
          {...anim({
            variants: formStateAnim,
          })}
        >
          {renderForm()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
