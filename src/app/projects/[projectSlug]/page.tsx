import { CodeSnippet } from '@/components'
import { projectsList } from '@/constants/projects'
import fs from 'node:fs/promises'
import ky from 'ky'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { getPlaiceholder } from 'plaiceholder'
import remarkGfm from 'remark-gfm'

const getImage = async (file: string) => {
  const nextRelativePath = file.replace('public', '')
  const fsPath = 'public' + nextRelativePath
  const buffer = await fs.readFile(fsPath)
  const plaiceholder = await getPlaiceholder(buffer)
  return { ...plaiceholder, img: { src: nextRelativePath } }
}

export default async function RemoteMdxPage({
  params,
}: {
  params: {
    projectSlug: string
  }
}) {
  const project = projectsList.find(
    (project) => project.slug === params.projectSlug,
  )
  if (!project) throw new Error('Project not found')

  const markdown = await ky.get(project.readmeUrl).text()
  const { base64, img } = await getImage(
    '/assets/images/projects/portfolio.jpeg',
  )

  return (
    <div className="flex flex-col">
      <Image
        className="aspect-video w-full md:w-[70%] mx-auto rounded-3xl object-cover mb-10"
        src={img.src}
        placeholder="blur"
        blurDataURL={base64}
        alt={project.title}
        width={800}
        height={400}
      />

      <h1 className="hover:text-pink-500 transition-colors text-3xl font-bold mx-auto block mb-20">
        {project.title}
      </h1>
      <MDXRemote
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold my-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold my-4">{children}</h2>
          ),
          a: ({ children, href }) => (
            <Link
              href={href as string}
              target="_blank"
              className="text-blue-600 underline"
            >
              {children}
            </Link>
          ),
          ul: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal ml-6">{children}</ol>
          ),
          li: ({ children }) => <li className="ml-4">{children}</li>,
          code(props) {
            const { children, className } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <div className="p-4 bg-foreground/5 rounded-xl my-5">
                <CodeSnippet language={match[1]}>
                  {String(children).replace(/\n$/, '')}
                </CodeSnippet>
              </div>
            ) : (
              <code className={className}>{children}</code>
            )
          },
        }}
        source={markdown}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  )
}
