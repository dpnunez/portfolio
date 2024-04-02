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
import { bookGuestForm } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

type Schema = z.infer<typeof bookGuestForm>

function SubmitButton() {
  const isDev = process.env.NODE_ENV === 'development'

  return (
    <div className="flex gap-1">
      {isDev && (
        <Button variant="destructive" type="button" onClick={() => signOut()}>
          Logout
        </Button>
      )}
      <Button type="submit">Send</Button>
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

export function BookGuestForm() {
  const methods = useForm<Schema>({
    resolver: zodResolver(bookGuestForm),
  })

  return (
    <Form {...methods}>
      <form
        className="w-full"
        onSubmit={methods.handleSubmit(() => console.log('submit'))}
      >
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
  )
}
