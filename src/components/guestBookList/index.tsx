'use client'

import { useGuestBook } from '@/providers/guest-book'

export function GuestBookList() {
  const { guestList, addGuest } = useGuestBook()
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          addGuest({
            createdAt: new Date().toISOString(),
            id: Math.random().toString(36).substring(7),
            message: Math.random().toString(36).substring(7),
          })
        }
      >
        Add Random
      </button>
      {guestList?.map((guest) => (
        <div key={guest.id} className="flex justify-between">
          <h1>{guest.id}</h1>
          <p>{guest.message}</p>
          <p>{guest.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
