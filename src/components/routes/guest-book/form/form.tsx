'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components'
import { bookGuestForm } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { FormActions } from './formActions'
import { useGuestBook } from '@/providers/guest-book'

type Schema = z.infer<typeof bookGuestForm>

function FormInsert() {
  const { addGuest } = useGuestBook()
  const methods = useForm<Schema>({
    resolver: zodResolver(bookGuestForm),
    defaultValues: {
      message: '',
    },
  })

  const onSubmit = methods.handleSubmit(async (data) => {
    await addGuest(data.message, methods.reset)
  })

  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>
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
          <FormActions />
        </div>
      </form>
    </Form>
  )
}

export { FormInsert as Form }
