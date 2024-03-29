declare type MenuItem = {
  label: string
  name: string
  href: string
  subItems?: MenuItem[]
}

declare type AnimVariants = {
  initial: import('framer-motion').Target
  animate: import('framer-motion').TargetAndTransition
  exit: import('framer-motion').TargetAndTransition
}
