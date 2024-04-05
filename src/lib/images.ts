'use server'
import { promises as fs } from 'fs'
import { getPlaiceholder } from 'plaiceholder'

interface GeneratePlaceholder {
  base64?: string
  src: string
}

export async function generatePlaceholder(
  file: string,
): Promise<GeneratePlaceholder> {
  'use server'
  try {
    const buffer = await fs.readFile(`${process.cwd()}/public${file}`)
    const plaiceholder = await getPlaiceholder(buffer)

    return {
      ...plaiceholder,
      src: file,
    }
  } catch {
    return {
      base64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
      src: file,
    }
  }
}
