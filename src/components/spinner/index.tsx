import { cn } from '@/lib/utils'
import { FaSpinner } from 'react-icons/fa'

interface SpinnerProps {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return <FaSpinner className={cn('animate-spin', className)} />
}
