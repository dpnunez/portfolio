'use client'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Spinner,
} from '@/components'
import { api } from '@/lib/api'
import { bookGuestForm } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { formStateAnim } from './anim'
import { anim } from '@/lib/utils'
import { FaSpinner } from 'react-icons/fa'

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
      <Button type="submit" className="w-40" disabled={isSubmitting}>
        {isSubmitting ? <Spinner /> : 'Sign Book'}
      </Button>
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
  const alreadyMessage = previousSend
    ? 'Thank you for sign my guest book!'
    : 'You have already signed the guest book, thank you!'
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
    }
  })

  return (
    <motion.div className="h-20 w-full">
      <AnimatePresence mode="wait" initial={false}>
        {canSend ? (
          <motion.div
            className="w-full"
            key="form"
            {...anim({
              variants: formStateAnim,
            })}
          >
            <Form {...methods}>
              <form className="w-full" onSubmit={onSubmit}>
                <div className="flex flex-1 gap-10 items-start justify-start">
                  <FormField
                    control={methods.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Insert your message here!"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormAction />
                </div>
              </form>
            </Form>
          </motion.div>
        ) : (
          <motion.p
            key="message"
            {...anim({
              variants: formStateAnim,
            })}
          >
            {alreadyMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
