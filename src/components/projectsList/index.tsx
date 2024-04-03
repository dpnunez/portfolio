'use client'

import { projects } from '@/constants/content'
import { CodeSnippet, Editor } from '..'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ProjectsList() {
  return (
    <Editor.EnterCode className="px-8 py-4">
      <FilterVisualizer />
      <div className="grid grid-cols-3 gap-10 gap-y-16">
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
    ? projects.list.filter((project) => {
        return project.tags.some((tag) => filterSet.has(tag))
      })
    : projects.list

  return (
    <>
      <AnimatePresence mode="popLayout">
        {filteredList.map((project) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            layout
            key={project.title}
            className="group col-span-1 flex flex-col"
          >
            <div className="flex gap-4 mx-2 mb-2">
              <h3 className="text-pink-500 font-bold">{project.title}</h3>{' '}
              <span className="opacity-50">{'// extra info'}</span>
            </div>
            <div className="rounded-xl overflow-hidden ring-1 ring-foreground/15 group-hover:ring-pink-500 cursor-pointer transition-all flex-1">
              <Image
                className="aspect-video object-cover border-b border-foreground/15"
                width={500}
                height={500}
                src={project.image}
                alt={project.title}
              />
              <div className="p-4 gap-4 flex flex-col items-start">
                <p>{project.shortDescription}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn('text-xs bg-foreground/10 p-1 rounded-md')}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
