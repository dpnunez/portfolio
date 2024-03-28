import { Editor } from '@/components'
import { about } from '@/constants/content'
import { PrismLight } from 'react-syntax-highlighter'

export default function Page() {
  return (
    <Editor.EnterCode>
      <PrismLight
        showLineNumbers
        className="!bg-transparent"
        language="javascript"
      >
        {about.skills}
      </PrismLight>
    </Editor.EnterCode>
  )
}
