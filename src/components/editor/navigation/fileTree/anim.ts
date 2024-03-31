const containerAnim: AnimVariants = {
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

const navigationItem: AnimVariants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  enter: ({ idx }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15 * idx + 0.2,
    },
  }),
  exit: {
    opacity: 0,
  },
}

export { containerAnim, panelAnim, folderAnim, navigationItem }
