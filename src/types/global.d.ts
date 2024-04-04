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
    imageBlur: string
    shortDescription: string
    readmeUrl: string
    githubLink: string
    link: string
    tags: string[]
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
