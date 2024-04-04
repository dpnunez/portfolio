import { getPlaceholder } from '@/lib/images'
import Image from 'next/image'
import fs from 'node:fs/promises'

const external =
  'https://images.unsplash.com/photo-1711539924968-81d3382a85d9?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const internal = '/assets/images/unsplash/alexander-ant-oR7HxvOe2YE.jpg'

export default async function Page() {
  const blurPublic = await getPlaceholder('/assets/images/sample.jpg')
  const blurExternal = await getPlaceholder(external)

  return (
    <div>
      <div className="flex items-center gap-2 flex-col">
        <h2>External</h2>
        <Image
          className="w-96 aspect-square overflow-hidden"
          placeholder="blur"
          blurDataURL={blurExternal}
          src={external}
          width={1000}
          height={1000}
          alt="image"
        />
      </div>
      <div className="flex items-center gap-2 flex-col">
        {String(blurPublic)}
        <h2>Internal</h2>
        <Image
          className="w-96 aspect-square overflow-hidden"
          placeholder="blur"
          blurDataURL={blurPublic}
          src={internal}
          width={1000}
          height={1000}
          alt="image"
        />
      </div>
    </div>
  )
}
