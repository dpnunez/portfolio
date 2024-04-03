import { CodeSnippet, Editor } from '@/components'
import { about } from '@/constants/content'

export default function Page() {
  return (
    <Editor.EnterCode>
      <CodeSnippet showLineNumbers>{about.skills}</CodeSnippet>
    </Editor.EnterCode>
  )
}
