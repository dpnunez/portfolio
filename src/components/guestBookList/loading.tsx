'use client'

import { Skeleton, TableCell, TableRow } from '@/components'
import { anim } from '@/lib/utils'
import { motion } from 'framer-motion'
import { contentAnim } from './anim'

export function Loading() {
  return (
    <motion.tbody
      className="[&_tr:last-child]:border-0"
      {...anim({
        variants: contentAnim,
      })}
    >
      {Array.from({ length: 40 }).map((_, i) => {
        return (
          <TableRow key={i} className="h-10">
            <TableCell>
              <Skeleton
                className="h-4"
                style={{
                  width: generateRandomWidth(50, 65) + '%',
                }}
              />
            </TableCell>
            <TableCell>
              <Skeleton
                className="h-4"
                style={{
                  width: generateRandomWidth(50, 65) + '%',
                }}
              />
            </TableCell>
            <TableCell className="relative items-center">
              <div className="relative h-4">
                <div className="invisible text-nowrap">
                  2024-04-02T20:08:03.021Z
                </div>
                <Skeleton className="w-full h-full top-0 absolute" />
              </div>
            </TableCell>
          </TableRow>
        )
      })}
    </motion.tbody>
  )
}

function generateRandomWidth(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
