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
  loading: boolean
  addGuest: (guest: GuestData) => void
  hasSigned: boolean
}

export const GuestBookContext = createContext<GuestBookContextType>({
  guestList: undefined,
  loading: true,
  addGuest: () => {},
  hasSigned: false,
})

export const useGuestBook = (): GuestBookContextType => {
  const guestBookContext = useContext(GuestBookContext)
  if (!guestBookContext) {
    throw new Error('useGuestBook must be used within a GuestBookProvider')
  }
  return guestBookContext
}

export function GuestBookProvider({ children }: { children: React.ReactNode }) {
  const {
    data,
    mutate,
    isLoading: isLoadingList,
  } = useSWR('api/guest-book', apiFetcher<GuestData[]>)

  const { data: canWrite, isLoading: isLoadingVerify } = useSWR(
    'api/guest-book/can-write',
    apiFetcher<boolean>,
  )

  const hasSigned = canWrite === false

  const addGuest = (data: GuestData) => {
    mutate((old) => [data, ...(old || [])], false)
  }

  const isLoading = isLoadingList || isLoadingVerify

  return (
    <GuestBookContext.Provider
      value={{ guestList: data, hasSigned, addGuest, loading: isLoading }}
    >
      {children}
    </GuestBookContext.Provider>
  )
}
