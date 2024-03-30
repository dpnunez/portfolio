'use client'

import { CodeSnippet, Editor } from '@/components'
import { contactData } from '@/constants/content'
import { contactSchema } from '@/validation'
import { SiTypescript } from 'react-icons/si'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import * as z from 'zod'

type Schema = z.infer<typeof contactSchema>

export function ContactForm() {
  const methods = useForm<Schema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  return (
    <Editor.EnterCode className="mx-10">
      <h1 className="text-3xl font-bold mb-8">Send me a message</h1>
      <FormProvider {...methods}>
        <div className="flex w-full">
          <div className="flex-1">
            <Form />
          </div>
          <div className="flex-1">
            <ReqViwer />
          </div>
        </div>
      </FormProvider>
    </Editor.EnterCode>
  )
}

function Form() {
  return <div>form</div>
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
