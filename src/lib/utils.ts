import { type ClassValue, clsx } from 'clsx'
import { MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface AnimProps extends MotionProps {
  variants: AnimVariants
  custom?: number | boolean | string
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
