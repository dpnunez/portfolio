import { CodeSnippet, Editor } from '@/components'
import { about } from '@/constants/content'

export default function Page() {
  const birthday = new Date('2000-04-16')
  const diffMili = Date.now() - birthday.getTime()
  const differenceInYears = Math.floor(
    diffMili / (1000 * 60 * 60 * 24 * 365.25),
  )

  return (
    <Editor.EnterCode>
      <CodeSnippet>{about.profile(differenceInYears)}</CodeSnippet>
    </Editor.EnterCode>
  )
}
