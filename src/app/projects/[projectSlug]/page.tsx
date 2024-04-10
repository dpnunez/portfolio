import { projectsList } from '@/constants/projects'
import { generatePlaceholder } from '@/lib/images'
import { defaultMdxComponents } from '@/lib/mdx'
import ky from 'ky'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import remarkGfm from 'remark-gfm'

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
  const { base64: placeholder, src: image } = await generatePlaceholder(
    project.image,
  )

  return (
    <div className="flex flex-col mb-20">
      <Image
        className="aspect-video w-full md:w-[70%] mx-auto rounded-3xl object-cover mb-10"
        src={image}
        placeholder="blur"
        blurDataURL={placeholder}
        alt={project.title}
        width={800}
        height={400}
      />

      <h1 className="hover:text-editor-primary transition-colors text-3xl font-bold mx-auto block mb-20">
        {project.title}
      </h1>
      <MDXRemote
        components={defaultMdxComponents}
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

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    projectSlug: project.slug,
  }))
}

export function generateMetadata({
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

  return {
    title: 'Projects: ' + project.title,
  }
}
