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
    <PrismLight
      showLineNumbers
      className="!bg-transparent mx-2"
      language={language}
    >
      {children}
    </PrismLight>
  )
}
