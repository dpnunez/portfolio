'use client'

import {
  Button,
  Captcha,
  CodeSnippet,
  Editor,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
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
    <Editor.EnterCode className="m-10">
      <h1 className="text-xl md:text-3xl font-bold mb-8">
        # Send me a message
      </h1>
      <Form {...methods}>
        <div className="flex w-full">
          <div className="flex-1">
            <FormSection />
          </div>
          <div className="flex-1 md:block hidden">
            <ReqViwer />
          </div>
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
              <Textarea rows={5} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-between w-full items-end flex-col md:flex-row">
        <Captcha onChange={setTokenCaptcha} />

        <Button
          type="submit"
          size="lg"
          className="mt-4 max-lg:w-full"
          disabled={!tokenCaptcha}
          loading={form.formState.isSubmitting}
        >
          $send_message
        </Button>
      </div>
    </form>
  )
}

function ReqViwer() {
  const { watch } = useFormContext<Schema>()

  const values = watch()

  return (
    <div className="rounded-xl bg-foreground/5 p-3 flex flex-col">
      <span className="opacity-35 italic mb-4 flex items-center gap-3 ml-6">
        <SiTypescript />
        /forms/contact.ts
      </span>
      <CodeSnippet>
        {contactData.req(values.name, values.email, values.message)}
      </CodeSnippet>
    </div>
  )
}
