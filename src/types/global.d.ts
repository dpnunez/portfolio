declare type MenuItem = {
  label: string
  name: string
  href: string
  subItems?: MenuItem[]
}

declare type AnimVariants = {
  initial?: import('framer-motion').Variant
  enter: import('framer-motion').Variant
  exit?: import('framer-motion').Variant
}
