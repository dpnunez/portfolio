declare global {
  type AnimVariants = {
    initial?: import('framer-motion').Variant
    enter: import('framer-motion').Variant
    exit?: import('framer-motion').Variant
  }

  type ProjectTag = {
    label: string
    name: string
    icon: React.ReactNode
  }

  type Project = {
    title: string
    slug: string
    image: string
    placeholder?: string
    shortDescription: string
    readmeUrl: string
    githubLink: string
    tags: string[]
  }

  type SignedStatus =
    | 'previus-signed'
    | 'just-signed'
    | 'not-signed'
    | 'loading'
    | 'error'

  type Post = {
    title: string
    description: string
    slug: string
    isDraft: boolean
    published_at: string
    published: boolean
    externalUrl: string
    url: string
    cover_image: string
  }

  type PostWithContent = Post & {
    body_markdown: string
  }

  interface turnstileOpts {
    sitekey: string
    callback: (token: string) => void
  }

  type ErrorApi = {
    message: string
  }

  type ResponseApi<T> = {
    data: T
  }

  type GuestEntry = {
    id: string
    message: string
    createdAt: string
  }

  type MenuItem = {
    label: string
    name: string
    href: string
    subItems?: MenuItem[]
    Icon?: React.ReactNode
    target?: string
  }
  interface Window {
    turnstile: {
      reset: () => void
      render: (containerQuery: string, turnstileOpts) => void
    }
  }
}

export {}
