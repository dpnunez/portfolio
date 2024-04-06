'use client'
import { Button, Spinner } from '@/components'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useFormContext } from 'react-hook-form'

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

export function FormActions() {
  const { data } = useSession()

  if (!data) return <GithubOAuthButton />
  return <SubmitButton />
}
