declare type MenuItem = {
  label: string
  name: string
  href: string
  subItems?: MenuItem[]
  Icon?: React.ReactNode
  target?: string
}

declare type AnimVariants = {
  initial?: import('framer-motion').Variant
  enter: import('framer-motion').Variant
  exit?: import('framer-motion').Variant
}

interface turnstileOpts {
  sitekey: string
  callback: (token: string) => void
}
declare global {
  interface Window {
    turnstile: {
      render: (containerQuery: string, turnstileOpts) => void
    }
  }
}

export {}
