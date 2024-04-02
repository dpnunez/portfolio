import z from 'zod'

export const bookGuestForm = z.object({
  message: z
    .string({
      required_error: 'Required field',
    })
    .min(3, 'Too Short!')
    .max(100, 'Too Long!'),
})
