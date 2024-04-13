import { FooterItem } from './footerItem'
import Link from 'next/link'
import { repoLink } from '@/constants/content'
import { PiGitBranch } from 'react-icons/pi'

export function GitSection() {
  return (
    <Link href={repoLink} target="_blank">
      <FooterItem>
        <PiGitBranch />
        <span>main</span>
      </FooterItem>
    </Link>
  )
}
