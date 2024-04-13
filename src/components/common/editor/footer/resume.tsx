import Link from 'next/link'
import { FooterItem } from './footerItem'
import { DownloadIcon } from '@radix-ui/react-icons'

export function ResumeItem({ className }: { className?: string }) {
  return (
    <FooterItem className={className}>
      <DownloadIcon />
      <Link href="/resume.pdf" target="_blank">
        resume.pdf
      </Link>
    </FooterItem>
  )
}
