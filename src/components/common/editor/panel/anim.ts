const panelAnim: AnimVariants = {
  initial: {
    rotate: 0,
  },
  enter: (open) => {
    return {
      rotate: open ? 0 : 180,
      transition: {
        duration: 0.15,
      },
    }
  },
}

const contentAnim: AnimVariants = {
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

export { panelAnim, contentAnim }
