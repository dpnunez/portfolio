'use client'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components'
import { api } from '@/lib/api'
import { bookGuestForm } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { AnimatePresence } from 'framer-motion'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

type Schema = z.infer<typeof bookGuestForm>

function SubmitButton() {
  const { formState } = useFormContext()
  const { isSubmitting } = formState
  const isDev = process.env.NODE_ENV === 'development'

  return (
    <div className="flex gap-1">
      {isDev && (
        <Button variant="destructive" type="button" onClick={() => signOut()}>
          Logout
        </Button>
      )}
      <Button type="submit">{isSubmitting ? 'Sending...' : 'Send'}</Button>
    </div>
  )
}

function GithubOAuthButton() {
  return (
    <Button
      type="button"
      className="flex flex-row gap-2"
      onClick={() => signIn('github')}
    >
      <GitHubLogoIcon className="w-5 h-5" />
      Github auth
    </Button>
  )
}

function FormAction() {
  const { data } = useSession()

  if (!data) return <GithubOAuthButton />
  return <SubmitButton />
}

export function BookGuestForm({ canSend: previousSend }: { canSend: boolean }) {
  const [canSend, setCanSend] = useState(previousSend)
  const methods = useForm<Schema>({
    resolver: zodResolver(bookGuestForm),
    defaultValues: {
      message: '',
    },
  })

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await api.post('api/book-guest', {
        json: {
          ...data,
        },
      })

      toast.success('Signature sent successfully!')
      setCanSend(false)
      methods.reset()
    } catch (err) {
      toast.error((err as ErrorApi).message)
      console.error('Error sending message')
    }
  })

  return (
    <AnimatePresence>
      <Form {...methods}>
        <form className="w-full" onSubmit={onSubmit}>
          <div className="flex flex-1 gap-10 items-start justify-start">
            <FormField
              control={methods.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Insert your message here!" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormAction />
          </div>
        </form>
      </Form>
    </AnimatePresence>
  )
}
