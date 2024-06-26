'use client'

import {
  Button,
  Captcha,
  CodeSnippet,
  Editor,
  FileName,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  Spinner,
  Textarea,
} from '@/components'
import { contactData } from '@/constants/content'
import { contactSchema } from '@/validations'
import { SiTypescript } from 'react-icons/si'
import { useForm, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { toast } from 'sonner'
import { api } from '@/lib/api'

type Schema = z.infer<typeof contactSchema>

export function ContactForm() {
  const methods = useForm<Schema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  return (
    <Editor.EnterCode className="m-4 md:m-10 flex h-auto">
      <Form {...methods}>
        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-bold mb-8">
            # Send me a message
          </h1>
          <div className="flex w-full">
            <div className="flex-1">
              <FormSection />
            </div>
          </div>
        </div>
        <div className="items-start justify-center flex-1 hidden md:flex">
          <ReqViwer />
        </div>
      </Form>
    </Editor.EnterCode>
  )
}

function FormSection() {
  const [tokenCaptcha, setTokenCaptcha] = useState('')

  const form = useFormContext<Schema>()

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await api.post('api/contact', {
        json: {
          ...values,
          captcha_token: tokenCaptcha,
        },
      })

      form.reset()
      toast.success('Message sent successfully.')
    } catch (err) {
      toast.error(err as string)
    } finally {
      window.turnstile.reset()
    }
  })

  return (
    <form onSubmit={onSubmit} className="md:mr-24 gap-6 flex flex-col">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>_name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>_email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>_message</FormLabel>
            <FormControl>
              <Textarea rows={5} maxLength={280} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-between w-full items-start md:items-end flex-col md:flex-row">
        <Captcha onChange={setTokenCaptcha} />

        <Button
          type="submit"
          size="lg"
          className="mt-4 max-lg:w-full w-40"
          disabled={!tokenCaptcha}
        >
          {form.formState.isSubmitting ? <Spinner /> : 'Send message'}
        </Button>
      </div>
    </form>
  )
}

function ReqViwer() {
  const { watch } = useFormContext<Schema>()

  const values = watch()

  return (
    <div className="rounded-xl bg-foreground/5 flex flex-col overflow-hidden max-h-full">
      <FileName className="py-3 pl-6" icon={<SiTypescript />}>
        contact.ts
      </FileName>
      <Separator />
      <CodeSnippet className="flex-1 overflow-auto px-2 pt-3 mb-3">
        {contactData.req(values.name, values.email, values.message)}
      </CodeSnippet>
    </div>
  )
}
