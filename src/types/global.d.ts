declare global {
  type AnimVariants = {
    initial?: import('framer-motion').Variant
    enter: import('framer-motion').Variant
    exit?: import('framer-motion').Variant
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
