import { CodeSnippet } from '@/components'
import { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { CiLink } from 'react-icons/ci'

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

const InjectAnchor = ({ children }: { children: ReactNode }) => {
  const id = toSlug(extractChildrenText(children))
  return (
    <div
      id={id}
      className="flex title-index relative h-10 items-center group mt-20"
    >
      <Link
        href={`#${id}`}
        className="absolute w-10 h-10 -left-12 group-hover:opacity-100 opacity-0 transition-opacity"
      >
        <CiLink className="w-10 h-10 " />
      </Link>
      {children}
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
    <InjectAnchor>
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    </InjectAnchor>
  ),
  h2: ({ children }) => (
    <InjectAnchor>
      <h2 className="text-2xl font-bold my-3">{children}</h2>
    </InjectAnchor>
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
      <div className="p-4 bg-foreground/5 rounded-xl my-5">
        <CodeSnippet language={match[1]}>
          {String(children).replace(/\n$/, '')}
        </CodeSnippet>
      </div>
    ) : (
      <code className={className}>{children}</code>
    )
  },
}
