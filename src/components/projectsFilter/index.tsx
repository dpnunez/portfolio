'use client'

import { Checkbox, Editor } from '@/components'
import { projectsTypes } from '@/constants/data'
import { anim } from '@/lib/utils'
import { fileTreeItem } from '@/styles/framer-animations'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'

export function ProjectsFilter() {
  return (
    <Editor.Panel title="Filters">
      <AnimatePresence>
        <div className="my-3">
          {projectsTypes.map((project, idx) => {
            return (
              <motion.div
                className="last:mb-0 hover:bg-foreground/5 transition-color"
                key={project.name}
                {...anim({
                  variants: fileTreeItem,
                  custom: { idx },
                })}
              >
                <Tech {...project} />
              </motion.div>
            )
          })}
        </div>
      </AnimatePresence>
    </Editor.Panel>
  )
}

function Tech({ name, label, icon }: ProjectTypes) {
  const { get } = useSearchParams()
  const router = useRouter()
  const filter = get('filter')?.split(' ')

  const checked = !!filter?.includes(name)

  const onChange = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const currentFilter = filter || []
    let newFilter = currentFilter
    if (checked) {
      newFilter = currentFilter?.filter((item) => item !== name)
      if (newFilter.length === 0) {
        router.push('?')
        return
      }
    } else {
      newFilter.push(name)
    }

    router.push(`?filter=${newFilter.join(' ')}`)
  }

  return (
    <div
      key={name}
      className="flex items-center py-1 px-3 cursor-pointer"
      onClick={onChange}
    >
      <Checkbox checked={checked} id={name} name={name} className="mr-4" />
      <label htmlFor={name} className="flex items-center gap-2 flex-1">
        {icon}
        {label}
      </label>
    </div>
  )
}
