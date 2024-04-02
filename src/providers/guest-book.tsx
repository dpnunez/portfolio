'use client'
import { apiFetcher } from '@/lib/api'
import React, { createContext, useContext } from 'react'
import useSWR from 'swr'

type GuestData = {
  id: string
  message: string
  createdAt: string
}

interface GuestBookContextType {
  guestList?: GuestData[]
  addGuest: (guest: GuestData) => void
}

export const GuestBookContext = createContext<GuestBookContextType>({
  guestList: [],
  addGuest: () => {},
})

export const useGuestBook = (): GuestBookContextType => {
  const guestBookContext = useContext(GuestBookContext)
  if (!guestBookContext) {
    throw new Error('useGuestBook must be used within a GuestBookProvider')
  }
  return guestBookContext
}

export function GuestBookProvider({ children }: { children: React.ReactNode }) {
  const { data, mutate } = useSWR('api/guest-book', apiFetcher<GuestData[]>)

  const addGuest = (data: GuestData) => {
    mutate((old) => [data, ...(old || [])], false)
  }

  return (
    <GuestBookContext.Provider value={{ guestList: data, addGuest }}>
      {children}
    </GuestBookContext.Provider>
  )
}
