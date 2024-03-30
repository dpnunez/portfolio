import React from 'react'
import { PrismLight } from 'react-syntax-highlighter'

interface CodeSnippetProps {
  children: string
  language?: string
}

export function CodeSnippet({
  children,
  language = 'javascript',
}: CodeSnippetProps) {
  return (
    <PrismLight showLineNumbers className="!bg-transparent" language={language}>
      {children}
    </PrismLight>
  )
}
