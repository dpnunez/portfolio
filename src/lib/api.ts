import ky from 'ky'

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  throwHttpErrors: false,
  hooks: {
    afterResponse: [
      async (_input, _options, response) => {
        const body = await response.json()
        if (body.error) {
          throw new Error(body.error.message)
        }
      },
    ],
  },
})

export { api }
