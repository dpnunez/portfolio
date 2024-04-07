'use client'

import { Card, CodeSnippet, Editor } from '@/components'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { anim } from '@/lib/utils'
import { cardAnim } from './anim'
import { projectsList } from '@/constants/projects'

export function ProjectsList() {
  return (
    <Editor.EnterCode className="px-8 py-4">
      <FilterVisualizer />
      <div className="grid grid-col-1 md:grid-cols-3 gap-10 gap-y-16">
        <List />
      </div>
    </Editor.EnterCode>
  )
}

function FilterVisualizer() {
  const { get } = useSearchParams()
  const filter = get('filter')?.split(' ')

  return (
    <CodeSnippet
      language="sql"
      showLineNumbers={false}
      className="bg-transparent!"
    >
      {`SELECT * FROM projects 
    ${filter ? `WHERE tags IN (${filter?.join(', ')})` : ''}
    `}
    </CodeSnippet>
  )
}

function List() {
  const params = useSearchParams()
  const filter = params?.get('filter')?.split(' ')
  const filterSet = new Set(filter || [])
  const filteredList = filter
    ? projectsList.filter((project) => {
        return project.tags.some((tag) => filterSet.has(tag))
      })
    : projectsList

  return (
    <AnimatePresence mode="popLayout">
      {filteredList.map((project) => (
        <motion.div
          {...anim({
            variants: cardAnim,
          })}
          layout
          key={project.title}
          className="group col-span-1 flex flex-col"
        >
          <Card
            href={`/projects/${project.slug}`}
            image={project.image}
            tags={project.tags}
            primaryTitle={project.title}
            secondaryTitle={project.shortDescription}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
