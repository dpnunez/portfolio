import React from 'react'
import { PrismLight } from 'react-syntax-highlighter'

interface CodeSnippetProps {
  children: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeSnippet({
  children,
  language = 'javascript',
  showLineNumbers = true,
}: CodeSnippetProps) {
  return (
    <PrismLight
      showLineNumbers={showLineNumbers}
      className="!bg-transparent"
      language={language}
    >
      {children}
    </PrismLight>
  )
}
