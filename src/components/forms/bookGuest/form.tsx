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

type Schema = z.infer<typeof bookGuestForm>

interface FormInsertProps {
  onSuccess: (state: boolean) => void
}

function FormInsert({ onSuccess }: FormInsertProps) {
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
