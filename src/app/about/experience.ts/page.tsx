import { CodeSnippet, Editor } from '@/components'
import { about } from '@/constants/content'

export default function Page() {
  return (
    <Editor.EnterCode>
      <CodeSnippet>{about.work}</CodeSnippet>
    </Editor.EnterCode>
  )
}
