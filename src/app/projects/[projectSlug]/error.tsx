'use client'

import { MdWarning } from 'react-icons/md'

export default function Error() {
  return (
    <div className="p-4 bg-red-600/10 ring-red-500/40 ring-1 mb-2 rounded-2xl flex items-center justify-center gap-4">
      <div className="min-w-8">
        <MdWarning className="w-full h-full text-red-900" />
      </div>
      The content you are looking for is provided by github readme files,
      fetched and rendered by next-mdx-remote. If you are seeing this message,
      it is likely that the github readme file for this project is not
      available. But you can still check out the project on github by clicking
      the link below.
    </div>
  )
}
