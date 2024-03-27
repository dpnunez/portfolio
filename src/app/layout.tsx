import type { Metadata } from 'next'
import { Fira_Mono as FontSans } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/prism.css'
import { Editor } from '@/components'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'

const fontSans = FontSans({
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daniel P. Núñez',
  description: 'Portfolio, blog, and personal website of Daniel Pôrto Núñez',
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
      </body>
    </html>
  )
}
