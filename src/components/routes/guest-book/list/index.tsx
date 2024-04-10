'use client'

import { useGuestBook } from '@/providers/guest-book'
import { Loading } from './loading'
import { AnimatePresence, motion } from 'framer-motion'
import { anim } from '@/lib/utils'
import { contentAnim, counterAnim } from './anim'
import {
  Button,
  FileName,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'
import { FaDatabase } from 'react-icons/fa'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { TrashIcon } from '@radix-ui/react-icons'

function Header() {
  const { guestList } = useGuestBook()
  const rows = guestList?.length

  return (
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
  )
}

export function GuestBookList() {
  return (
    <div>
      <Header />
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
        {loading.list ? <Loading key="loading" /> : <ListBody key="content" />}
      </AnimatePresence>
    </Table>
  )
}

function ListBody() {
  const { guestList, deleteGuest } = useGuestBook()
  const { data } = useSession()
  const username = data?.user?.username

  return (
    <motion.tbody
      {...anim({
        variants: contentAnim,
      })}
      className="[&_tr:last-child]:border-0"
    >
      {guestList?.map((guest) => (
        <TableRow key={guest.id} className="h-10 group">
          <TableCell className="font-medium">
            <Link href={`https://github.com/${guest.id}`} target="_blank">
              {guest.id}
            </Link>
          </TableCell>
          <TableCell>{guest.message}</TableCell>
          <TableCell className="text-right text-nowrap p-0 overflow-auto">
            <div className="flex items-center gap-4">
              <div className="bg-foreground/5 p-1 px-3 rounded-xl">
                {guest.createdAt}
              </div>
              {guest.id === username && (
                <Button
                  size="icon"
                  className="opacity-40 group-hover:opacity-100"
                  variant="destructive"
                  onClick={deleteGuest}
                >
                  <TrashIcon />
                </Button>
              )}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </motion.tbody>
  )
}
