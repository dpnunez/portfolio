'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { formStateAnim } from './anim'
import { anim } from '@/lib/utils'
import { useGuestBook } from '@/providers/guest-book'

import { Form } from './form'
import { Loader } from './loading'

export function GuestBookForm() {
  const { hasSigned, loading } = useGuestBook()

  useEffect(() => {
    if (!loading) {
      setCanWrite(!hasSigned)
    }
  }, [hasSigned, loading])
  const [canWrite, setCanWrite] = useState(false)

  const wallMessage = hasSigned
    ? 'You have already signed the guest book, thank you!'
    : 'Thank you for sign my guest book!'

  const renderForm = () => {
    if (loading) return <Loader />
    if (!canWrite) return wallMessage
    return <Form onSuccess={setCanWrite} />
  }

  const stateKey = loading ? 'loading' : canWrite ? 'form' : 'wall'

  return (
    <div className="w-full min-h-16">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={stateKey}
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
