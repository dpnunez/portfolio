import {
  CrossCircledIcon,
  ExclamationTriangleIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons'
import { FileTreeSide } from '.'
import { Separator } from '..'
import { FooterItem } from './footerItem'

export function Footer() {
  return (
    <FileTreeSide
      className="border-t dark:border-white/10 border-zinc-500/30 items-center row-start-3 flex"
      fullSize
    >
      <div className="flex items-center h-full">
        <FooterItem>
          <GitHubLogoIcon />
          <span>main</span>
        </FooterItem>
        <Separator orientation="vertical" />
        <FooterItem>
          <ExclamationTriangleIcon />
          <span>0</span>
          <CrossCircledIcon />
          <span>0</span>
        </FooterItem>
        <Separator orientation="vertical" />
      </div>
    </FileTreeSide>
  )
}
