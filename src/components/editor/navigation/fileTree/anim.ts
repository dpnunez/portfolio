const containerAnim: AnimVariants = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
  },
  exit: {
    height: 0,
    transition: {
      delay: 0.1,
    },
  },
}

const folderAnim: AnimVariants = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
  },
  exit: {
    height: 0,
  },
}

const panelAnim: AnimVariants = {
  enter: (open) => (open ? { rotate: 180 } : { rotate: 0 }),
}

export { containerAnim, panelAnim, folderAnim }
