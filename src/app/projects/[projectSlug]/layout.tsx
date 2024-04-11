import { Editor } from '@/components'
import { projectsList } from '@/constants/projects'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    projectSlug: string
  }
}) {
  const data = projectsList.find(
    (project) => project.slug === params.projectSlug,
  )

  return (
    <Editor.EnterCode className="flex flex-col items-start w-full h-full overflow-hidden relative">
      <div className="flex justify-between w-full absolute backdrop-blur-lg bg-editor-background-primary">
        <Link
          className="flex items-center gap-2 hover:bg-foreground/5 px-4 py-2 rounded-md transition-all m-4"
          href="/projects/data.sql"
        >
          <ChevronLeftIcon />
          Back
        </Link>

        {data && (
          <Link
            href={data.githubLink}
            target="_blank"
            className="flex items-center gap-2 hover:bg-foreground/5 px-4 py-2 rounded-md transition-all m-4"
          >
            <FaGithub />
            Check on GitHub
          </Link>
        )}
      </div>
      <div className="overflow-auto w-full pt-20">
        <div className="mx-auto max-w-4xl px-10">{children}</div>
      </div>
    </Editor.EnterCode>
  )
}
