const indicator = {
  initial: {
    opacity: 0,
  },
  enter: (show: boolean) => ({
    opacity: show ? 1 : 0,
    x: show ? 0 : -100,
  }),
}

export { indicator }
