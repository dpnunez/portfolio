'use client'

import { Skeleton } from '@/components'
import { Fragment } from 'react'

export function Loading() {
  return (
    <div className="grid gap-x-4 grid-cols-guest-book">
      {Array.from({ length: 40 }).map((_, i) => {
        return (
          <Fragment key={i}>
            <div className="w-44">
              <Skeleton
                className="h-4 mt-1"
                style={{
                  width: generateRandomWidth(60, 100) + '%',
                }}
              />
            </div>
            <Skeleton
              className="h-4 mt-1"
              style={{
                width: generateRandomWidth(50, 65) + '%',
              }}
            />
            <div className="relative">
              <div className="opacity-0">2024-04-02T20:08:03.021Z</div>
              <Skeleton className="h-4 mt-1 w-full absolute top-0" />
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

function generateRandomWidth(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
