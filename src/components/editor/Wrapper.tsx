interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="p-4 md:p-16 h-screen w-screen flex items-center justify-center z-10">
      <div className="rounded-2xl ring-1 dark:ring-zinc-700 ring-zinc-300 w-full h-full grid overflow-hidden grid-cols-editor-mobile grid-rows-editor md:grid-cols-editor-desktop">
        {children}
      </div>
    </div>
  )
}
