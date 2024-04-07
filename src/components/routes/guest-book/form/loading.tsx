import { CodeSnippet, Spinner } from '@/components'

export function Loader() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
      <CodeSnippet showLineNumbers={false} language="sql">
        SELECT username, email, createdAt FROM Guest
      </CodeSnippet>
    </div>
  )
}
