import { type ClassValue, clsx } from 'clsx'
import { MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface AnimProps extends MotionProps {
  variants: AnimVariants
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  custom?: any
}

export const anim = ({ variants, custom, ...rest }: AnimProps) => {
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

export function generateRandomWidth(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
