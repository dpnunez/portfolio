import { contactSchema } from '@/validations'
import * as z from 'zod'

type ContactSchema = z.infer<typeof contactSchema>

export type ContactFormBody = ContactSchema & {
  captcha_token: string
}
