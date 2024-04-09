import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { FooterItem } from './footerItem'
import Link from 'next/link'
import { repoLink } from '@/constants/content'

export function GitSection() {
  return (
    <Link href={repoLink} target="_blank">
      <FooterItem>
        <GitHubLogoIcon />
        <span>main</span>
      </FooterItem>
    </Link>
  )
}
