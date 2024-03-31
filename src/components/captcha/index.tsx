'use client'

import { anim, cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { statusAnim } from './anim'

interface CaptchaProps {
  onChange: Dispatch<SetStateAction<string>>
  error?: boolean
}

export function Captcha({ onChange }: CaptchaProps) {
  const [status, setStatus] = useState<'running' | 'protected' | 'error'>(
    'running',
  )

  const renderStatusPing = useMemo(() => {
    switch (status) {
      case 'error':
        return (
          <>
            <StatusPing ping className="bg-red-500" />
            <StatusPing className="bg-red-500" />
          </>
        )
      case 'running':
        return (
          <>
            <StatusPing ping className="bg-orange-500" />
            <StatusPing className="bg-orange-500" />
          </>
        )
      case 'protected':
        return (
          <>
            <StatusPing ping className="bg-green-500" />
            <StatusPing className="bg-green-500" />
          </>
        )
    }
  }, [status])

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
        <div>{renderStatusPing}</div>
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
