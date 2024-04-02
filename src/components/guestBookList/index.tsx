'use client'

import { useGuestBook } from '@/providers/guest-book'
import { Fragment } from 'react'
import { Loading } from './loading'
import { AnimatePresence, motion } from 'framer-motion'
import { anim } from '@/lib/utils'
import { contentAnim } from './anim'
import { FileName } from '@/components'
import { FaDatabase } from 'react-icons/fa'

export function GuestBookList() {
  const { loading } = useGuestBook()

  return (
    <div>
      <FileName icon={<FaDatabase />} className="mb-4">
        guests.sql
      </FileName>
      <AnimatePresence mode="wait" initial={false}>
        {loading ? (
          <motion.div
            key="loader"
            className="overflow-hidden"
            {...anim({
              variants: contentAnim,
            })}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="data"
            {...anim({
              variants: contentAnim,
            })}
          >
            <List />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function List() {
  const { guestList } = useGuestBook()

  return (
    <div className="grid gap-x-4 grid-cols-guest-book">
      {guestList?.map((guest) => (
        <Fragment key={guest.id}>
          <h1 className="after:content-[':'] relative after:absolute after:right-0 w-full pr-8">
            {guest.id}
          </h1>
          <p>&quot;{guest.message}&quot;</p>
          <span>{guest.createdAt}</span>
        </Fragment>
      ))}
    </div>
  )
}
