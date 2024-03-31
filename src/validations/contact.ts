import z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(3, 'Required field'),
  email: z.string().email(),
  message: z.string().min(3, 'Required field'),
})
