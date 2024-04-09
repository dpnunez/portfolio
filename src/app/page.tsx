import { ASCII, Editor } from '@/components'
import { PrismLight } from 'react-syntax-highlighter'
import Link from 'next/link'
import { computerAscii } from '@/constants/ascii'
import { repoLink } from '@/constants/content'

export default function Page() {
  return (
    <Editor.CodeSide
      fullSize
      className="col-span-1 flex items-center justify-center relative max-w-full overflow-hidden"
    >
      <div className="flex flex-col items-center max-w-full p-4 md:items-start">
        <Editor.EnterCode className="gap-4 flex flex-col">
          <span>Hi all, I&apos;m</span>
          <h1 className="font-extrabold text-3xl md:text-6xl">
            <span>Daniel Núñez</span>
          </h1>
          <h2 className="text-lg mb-4">
            <span>{'> '}</span>
            <span>
              Full Stack Engineer, specialized in Javascript environment
            </span>
          </h2>

          <Link target="_blank" href={repoLink}>
            <PrismLight
              className="!bg-transparent hidden md:block"
              language="javascript"
            >
              {`// fell free to access the code of this page in my github\nconst url = "${repoLink}"`}
            </PrismLight>
          </Link>
        </Editor.EnterCode>
        <ASCII className="absolute top-0 left-0 opacity-5 max-w-full max-h-full">
          {computerAscii}
        </ASCII>
      </div>
    </Editor.CodeSide>
  )
}
