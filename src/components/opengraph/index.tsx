import { Skeleton } from '../common/skeleton'

interface OpenGraphLayoutProps {
  hasFileTree?: boolean
  content?: React.ReactNode
}

export function OpenGraphLayout({
  content,
  hasFileTree = true,
}: OpenGraphLayoutProps) {
  return (
    <div className="w-[1200px] h-[630px] bg-editor-background-secondary flex">
      <div className="m-12 rounded-2xl ring-1 ring-editor-divider bg-editor-background-primary flex-1 flex">
        {hasFileTree && (
          <div className="flex-1 border-r border-editor-divider h-full py-8 px-3 gap-4 flex flex-col">
            <Skeleton className="h-5 w-full animate-none" />
            <Skeleton className="h-5 w-[80%] animate-none" />
            <Skeleton className="h-5 w-[90%] animate-none" />
            <Skeleton className="h-5 w-full animate-none" />
          </div>
        )}
        <div className="flex-[3] h-full flex items-center justify-center flex-col relative gap-4">
          {content}
          <div className="absolute h-[30%] w-2 right-2 top-9 rounded-full bg-primary/10"></div>
        </div>
      </div>
    </div>
  )
}
