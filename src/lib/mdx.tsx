import { CodeSnippet } from '@/components'
import { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { CiLink } from 'react-icons/ci'
import { cn } from '@/lib/utils'

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

const InjectAnchor = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const id = toSlug(extractChildrenText(children))
  return (
    <div id={id} className={cn('flex relative items-center group', className)}>
      {children}
      <Link
        href={`#${id}`}
        className="pl-4 aspect-square flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity"
      >
        <CiLink className="w-7 h-7" />
      </Link>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractChildrenText(children: any): string {
  if (typeof children === 'string') {
    return children
  }

  if (Array.isArray(children)) {
    return children.map(extractChildrenText).join('')
  }
  return extractChildrenText(children?.props.children)
}

export const defaultMdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <InjectAnchor className="mb-5 mt-10">
      <h1 className="text-3xl font-bold">{children}</h1>
    </InjectAnchor>
  ),
  h2: ({ children }) => (
    <InjectAnchor className="mb-3 mt-10">
      <h2 className="text-2xl font-bold">{children}</h2>
    </InjectAnchor>
  ),
  h3: ({ children }) => (
    <InjectAnchor className="mb-2 mt-5">
      <h3 className="text-xl font-bold">{children}</h3>
    </InjectAnchor>
  ),
  h4: ({ children }) => (
    <InjectAnchor className="mb-2 mt-5">
      <h4 className="text-lg font-bold">{children}</h4>
    </InjectAnchor>
  ),
  p: ({ children }) => <p className="my-4">{children}</p>,
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
  ol: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  li: ({ children }) => <li className="ml-4">{children}</li>,
  img: ({ src, alt }) => (
    <Image
      width={1000}
      height={1000}
      src={String(src)}
      alt={String(alt)}
      className="mx-auto rounded-lg my-5"
    />
  ),
  code(props) {
    const { children, className } = props
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <div className="p-4 bg-foreground/5 rounded-xl my-5 overflow-auto">
        <CodeSnippet language={match[1]}>
          {String(children).replace(/\n$/, '')}
        </CodeSnippet>
      </div>
    ) : (
      <code className={className}>{children}</code>
    )
  },
}
