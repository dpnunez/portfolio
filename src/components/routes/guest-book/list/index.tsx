'use client'

import { useGuestBook } from '@/providers/guest-book'
import { Loading } from './loading'
import { AnimatePresence, motion } from 'framer-motion'
import { anim } from '@/lib/utils'
import { contentAnim, counterAnim } from './anim'
import {
  FileName,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'
import { FaDatabase } from 'react-icons/fa'

export function GuestBookList() {
  const { guestList } = useGuestBook()
  const rows = guestList?.length

  return (
    <div>
      <FileName icon={<FaDatabase />} className="mb-4">
        guests.sql{' '}
        <AnimatePresence mode="wait" initial={false}>
          {!guestList ? (
            <motion.span
              key="counter-loader"
              {...anim({
                variants: counterAnim,
              })}
            >
              (loading)
            </motion.span>
          ) : (
            <motion.span
              key="counter-data"
              {...anim({
                variants: counterAnim,
              })}
              className="text-sm"
            >
              ({rows} rows)
            </motion.span>
          )}
        </AnimatePresence>
      </FileName>
      <List />
    </div>
  )
}

function List() {
  const { loading } = useGuestBook()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">username</TableHead>
          <TableHead>message</TableHead>
          <TableHead className="text-right w-16 flex-nowrap">
            createdAt
          </TableHead>
        </TableRow>
      </TableHeader>

      <AnimatePresence mode="wait" initial={false}>
        {loading ? <Loading key="loading" /> : <ListBody key="content" />}
      </AnimatePresence>
    </Table>
  )
}

function ListBody() {
  const { guestList } = useGuestBook()
  return (
    <motion.tbody
      {...anim({
        variants: contentAnim,
      })}
      className="[&_tr:last-child]:border-0"
    >
      {guestList?.map((guest) => (
        <TableRow key={guest.id} className="h-10">
          <TableCell className="font-medium">{guest.id}</TableCell>
          <TableCell>{guest.message}</TableCell>
          <TableCell className="text-right text-nowrap p-0">
            <div className="bg-foreground/5 p-1 px-3 rounded-xl">
              {guest.createdAt}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </motion.tbody>
  )
}
