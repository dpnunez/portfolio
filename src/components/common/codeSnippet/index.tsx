import { cn } from '@/lib/utils'
import React from 'react'
import { PrismLight } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql'
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'

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
  PrismLight.registerLanguage('markdown', markdown)

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
