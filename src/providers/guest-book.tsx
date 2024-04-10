'use client'
import { api, apiErrorToast, apiFetcher } from '@/lib/api'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import useSWR from 'swr'

type GuestData = {
  id: string
  message: string
  createdAt: string
}

type DeleteResponse = {
  id: string
}

interface GuestBookContextType {
  guestList?: GuestData[]
  loading: {
    list: boolean
  }
  addGuest: (message: string, cb: () => void) => void
  deleteGuest: () => void
  status: SignedStatus
}

export const GuestBookContext = createContext<GuestBookContextType>({
  guestList: undefined,
  loading: {
    list: false,
  },
  deleteGuest: () => {},
  addGuest: () => {},
  status: 'loading',
})

export const useGuestBook = (): GuestBookContextType => {
  const guestBookContext = useContext(GuestBookContext)
  if (!guestBookContext) {
    throw new Error('useGuestBook must be used within a GuestBookProvider')
  }
  return guestBookContext
}

export function GuestBookProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<SignedStatus>('loading')

  const {
    data,
    mutate,
    isLoading: isLoadingList,
  } = useSWR('api/guest-book', apiFetcher<GuestData[]>)

  useEffect(() => {
    api
      .get('api/guest-book/can-write')
      .json<ResponseApi<boolean>>()
      .then((res) => {
        const canWrite = res.data
        setStatus(canWrite ? 'not-signed' : 'previus-signed')
      })
      .catch(() => {
        setStatus('error')
      })
  }, [])

  const addGuest = async (message: string, cb: () => void) => {
    try {
      const { data: insertedData } = await api
        .post('api/guest-book', {
          json: {
            message,
          },
        })
        .json<ResponseApi<GuestEntry>>()

      toast.success('Signature sent successfully!')
      mutate((old) => [insertedData, ...(old || [])], false)
      setStatus('just-signed')
      cb()
    } catch (err) {
      apiErrorToast(err)
    }
  }

  const deleteGuest = async () => {
    try {
      const { data } = await api
        .delete('api/guest-book')
        .json<ResponseApi<DeleteResponse>>()
      mutate((old) => old?.filter((g) => g.id !== data.id), false)
      setStatus('not-signed')
      toast.success('Entry deleted')
    } catch {
      toast.error('Failed to delete guest')
    }
  }

  return (
    <GuestBookContext.Provider
      value={{
        guestList: data,
        addGuest,
        loading: {
          list: isLoadingList,
        },
        status,
        deleteGuest,
      }}
    >
      {children}
    </GuestBookContext.Provider>
  )
}
