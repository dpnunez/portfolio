import ky from 'ky'
import { toast } from 'sonner'

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

const apiErrorToast = (error: unknown) => {
  if ((error as ErrorApi).message) {
    toast.error((error as ErrorApi).message)
  }
}

function apiFetcher<T>(url: string) {
  return api
    .get(url)
    .json<ResponseApi<T>>()
    .then((res) => res.data)
}

export { api, apiFetcher, apiErrorToast }
