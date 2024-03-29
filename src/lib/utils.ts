import { type ClassValue, clsx } from 'clsx'
import { MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const anim = (
  variants: AnimVariants,
  custom: number | null = null,
  rest: MotionProps,
) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    whileHover: 'hover',
    whileInView: 'view',
    viewport: {
      once: true,
    },
    custom,
    variants,
    ...rest,
  }
}
