'use client'

import { anim, cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { statusAnim } from './anim'
import { ClassValue } from 'clsx'

interface CaptchaProps {
  onChange: Dispatch<SetStateAction<string>>
  error?: boolean
}

export function Captcha({ onChange }: CaptchaProps) {
  const [status, setStatus] = useState<'running' | 'protected' | 'error'>(
    'running',
  )

  useEffect(() => {
    if (window.turnstile) {
      window.turnstile.render('#captcha-cf', {
        sitekey: process.env.NEXT_PUBLIC_TURNSFILE_CLIENT_KEY,
        callback: (token: string) => {
          onChange(token)
          setStatus('protected')
        },
        'error-callback': () => {
          onChange('')
          setStatus('error')
        },
        'expired-callback': () => {
          onChange('')
          setStatus('running')
        },
        size: 'normal',
      })
    }
  }, [onChange])

  const pingStyle = {
    'bg-orange-600': status === 'running',
    'bg-green-500': status === 'protected',
    'bg-red-500': status === 'error',
  } as ClassValue

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={() => {
          window.turnstile.render('#captcha-cf', {
            sitekey: process.env.NEXT_PUBLIC_TURNSFILE_CLIENT_KEY,
            callback: (token: string) => {
              onChange(token)
              setStatus('protected')
            },
            'error-callback': () => {
              onChange('')
              setStatus('error')
            },
            'expired-callback': () => {
              onChange('')
              setStatus('running')
            },
            size: 'normal',
          })
        }}
      />
      <div className="flex gap-2 items-center">
        <div className="relative flex items-center">
          <StatusPing className={cn(pingStyle)} />
          <StatusPing ping className={cn(pingStyle)} />
        </div>
        <span className="text-small opacity-65 flex items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={status}
              className="overflow-hidden inline-block text-nowrap mr-3 capitalize"
              {...anim({
                variants: statusAnim,
              })}
            >
              {status}
            </motion.span>
          </AnimatePresence>{' '}
          CloudFlare captcha
        </span>
      </div>
      <div id="captcha-cf" />
    </>
  )
}

function StatusPing({
  ping = false,
  className,
}: {
  ping?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'w-2 h-2 rounded-full bg-orange-500 transition-colors',
        {
          'absolute animate-ping': ping,
        },
        className,
      )}
    />
  )
}
