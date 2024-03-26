interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="p-16 h-screen w-screen flex items-center justify-center z-10">
      <div className="rounded-2xl w-full h-full grid overflow-hidden md:grid-cols-editor md:grid-rows-editor">
        {children}
      </div>
    </div>
  )
}
