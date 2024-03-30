'use client'
import { useScript } from '@/hooks'
import { Dispatch, SetStateAction, useEffect } from 'react'

interface CaptchaProps {
  onChange: Dispatch<SetStateAction<boolean>>
}

export function Captcha({ onChange }: CaptchaProps) {
  const status = useScript(
    'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
  )

  useEffect(() => {
    if (status === 'ready') {
      window.turnstile.render('#captcha-cf', {
        sitekey: process.env.NEXT_PUBLIC_TURNSFILE_CLIENT_KEY,
        callback: async function (token: string) {
          console.log(`Challenge Success ${token}`)
          // siteverify request
        },
        size: 'normal',
      })
    }
  }, [status])

  return <div id="captcha-cf" />
}
