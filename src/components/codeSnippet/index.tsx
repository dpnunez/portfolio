import { cn } from '@/lib/utils'
import React from 'react'
import { PrismLight } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql'

interface CodeSnippetProps {
  children: string
  language?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeSnippet({
  children,
  language = 'javascript',
  showLineNumbers = true,
  className,
}: CodeSnippetProps) {
  PrismLight.registerLanguage('javascript', js)
  PrismLight.registerLanguage('sql', sql)

  return (
    <PrismLight
      showLineNumbers={showLineNumbers}
      className={cn('!bg-transparent', className)}
      language={language}
    >
      {children}
    </PrismLight>
  )
}
