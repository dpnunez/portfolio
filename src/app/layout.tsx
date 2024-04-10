import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Fira_Mono as FontSans } from 'next/font/google'
import { Editor, Toaster } from '@/components'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import { FramerGlobalConfig } from '@/providers/framer-provider'

import '@/styles/globals.css'
import '@/styles/prism.css'

const fontSans = FontSans({
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daniel P. Núñez',
  description: 'Portfolio, blog, and personal website of Daniel Pôrto Núñez',
  icons: [
    {
      url: '/images/favIcon/dark/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: '/images/favIcon/light/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        <FramerGlobalConfig>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <div
              className={cn(
                'w-full min-h-screen h-full flex items-center justify-center',
              )}
            >
              <Editor.Wrapper>
                <Editor.Header />
                {children}
                <Editor.Footer />
              </Editor.Wrapper>
            </div>
          </ThemeProvider>
          <Toaster richColors />
        </FramerGlobalConfig>
      </body>
    </html>
  )
}
