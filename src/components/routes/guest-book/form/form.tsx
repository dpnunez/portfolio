'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components'
import { api, apiErrorToast } from '@/lib/api'
import { bookGuestForm } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { FormActions } from './formActions'
import { useGuestBook } from '@/providers/guest-book'

type Schema = z.infer<typeof bookGuestForm>

interface FormInsertProps {
  onSuccess: (state: boolean) => void
}

function FormInsert({ onSuccess }: FormInsertProps) {
  const { addGuest } = useGuestBook()
  const methods = useForm<Schema>({
    resolver: zodResolver(bookGuestForm),
    defaultValues: {
      message: '',
    },
  })

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const { data: insertedData } = await api
        .post('api/guest-book', {
          json: {
            ...data,
          },
        })
        .json<ResponseApi<GuestEntry>>()

      toast.success('Signature sent successfully!')
      addGuest(insertedData)
      onSuccess(true)
      methods.reset()
    } catch (err) {
      apiErrorToast(err)
    }
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
