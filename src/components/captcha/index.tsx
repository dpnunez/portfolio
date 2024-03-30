import Script from 'next/script'
import { Dispatch, SetStateAction } from 'react'

interface CaptchaProps {
  onChange: Dispatch<SetStateAction<boolean>>
}

export function Captcha({ onChange }: CaptchaProps) {
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={() => {
          window.turnstile.render('#captcha-cf', {
            sitekey: process.env.NEXT_PUBLIC_TURNSFILE_CLIENT_KEY,
            callback: async function (token: string) {
              console.log(`Challenge Success ${token}`)
            },
            size: 'normal',
          })
        }}
      />
      <div id="captcha-cf" />
    </>
  )
}
