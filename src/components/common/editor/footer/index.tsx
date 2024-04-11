import {
  CrossCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons'
import { Editor, Separator } from '@/components'
import { FooterItem } from './footerItem'
import { GitSection } from './gitRemote'

export function Footer() {
  return (
    <Editor.FileTreeSide
      className="border-t border-editor-divider row-start-3 flex items-start"
      fullSize
    >
      <div className="flex items-center h-full">
        <GitSection />
        <Separator orientation="vertical" />
        <FooterItem>
          <ExclamationTriangleIcon />
          <span>0</span>
          <CrossCircledIcon />
          <span>0</span>
        </FooterItem>
        <Separator orientation="vertical" />
      </div>
    </Editor.FileTreeSide>
  )
}
