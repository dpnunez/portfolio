import fs from 'node:fs/promises'
import { glob } from 'glob'
import * as React from 'react'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

const getImages = async (pattern: string, basePath = './public') =>
  Promise.all(glob.sync(basePath + pattern).map(getImage))

const getImage = async (file: string) => {
  const nextRelativePath = file.replace('public', '')
  const fsPath = 'public' + nextRelativePath
  const buffer = await fs.readFile(fsPath)
  const plaiceholder = await getPlaiceholder(buffer)
  return { ...plaiceholder, img: { src: nextRelativePath } }
}

export default async function Page() {
  const images = await getImages('/assets/images/unsplash/*.{jpg,png}')
  const teste = await getImage(
    '/assets/images/unsplash/alexander-ant-oR7HxvOe2YE.jpg',
  )

  return (
    <ul role="list">
      <Image
        {...teste.img}
        src={teste.img.src}
        alt="Paint Splashes"
        title="Photo from Unsplash"
        blurDataURL={teste.base64}
        width={500}
        height={500}
        placeholder="blur"
      />
      {images.map(({ base64, img }) => (
        <li key={img.src}>
          <Image
            {...img}
            src={img.src}
            alt="Paint Splashes"
            title="Photo from Unsplash"
            blurDataURL={base64}
            width={500}
            height={500}
            placeholder="blur"
          />
        </li>
      ))}
    </ul>
  )
}
